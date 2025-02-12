import { Atom } from "atomicreact-ts"

import { error, input, placeholder, s_active, s_disabled, s_error, loader } from "./input.atom.css"
import { CircleLoader } from "../loaders/circle.jsx"

export enum InputState {
    default,
    active,
    disabled,
    error
}

export interface InputError {
    code?: string | number,
    message: string
}

type HTMLInputTypeAttribute = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"

type HTMLInputModeAttribute = "none" | "text" | "decimal" | "numeric" | "tel" | "search" | "email" | "url"

export interface IInputProp {
    state?: InputState,
    label?: string,
    verify?: (value: string) => InputError | null,
    value?: string,
    type?: HTMLInputTypeAttribute,
    mask?: string,
    placeholder?: string,
    mode?: HTMLInputModeAttribute,
    class?: string[],
    max?: number,
    name?: string,
    loader?: boolean
}

interface ISub {
    input: HTMLInputElement,
    error: HTMLSpanElement,
    placeholder: HTMLSpanElement,
    label: HTMLLabelElement,
    loader: HTMLDivElement
}

export class Input extends Atom<{ prop: IInputProp, sub: ISub }> {

    private states = [s_active, s_disabled, s_error]

    preRender: () => void = () => {
        if (this.prop.state == undefined) this.prop.state = InputState.default
        if (this.prop.value == undefined) this.prop.value = ""
        if (this.prop.type == undefined) this.prop.type = "text"
        if (this.prop.loader == undefined) this.prop.loader = false
        this.prop.class ??= []
    }

    struct: () => string = () => (
        <div class={[input, ...this.prop.class]}>
            <label sub={this.sub.label} htmlFor={`${this.id}_input`}>{this.prop.label}</label>
            <input
                sub={this.sub.input}
                id={`${this.id}_input`}
                type={this.prop.type}
                {...(this.prop.mask) ? { ["data-mask"]: this.prop.mask } : {}}
                {...(this.prop.mode) ? { inputmode: this.prop.mode } : {}}
                {...(this.prop.name) ? { name: this.prop.name } : {}}
            ></input>
            {(this.prop.placeholder !== undefined) ? <span sub={this.sub.placeholder} class={placeholder}>{this.prop.placeholder}</span> : ''}
            <div nucleus>
                <div sub={this.sub.loader} class={loader}><CircleLoader size={20}></CircleLoader></div>
            </div>
            <span class={error} sub={this.sub.error}>Some error</span>
        </div>
    )

    onRender(): void {
        this.setState(this.prop.state)
        this.setPlaceholder(this.prop.placeholder)
        this.showLoader(this.prop.loader)

        this.value = this.prop.value

        this.getElement().onmouseenter = () => { }

        this.getElement().onmouseleave = () => { }

        this.sub.input.addEventListener("focus", () => {
            this.setState(InputState.active)
        })

        this.sub.input.addEventListener("blur", () => {
            if (this.sub.input.value !== "") return this.verify()
            this.setState(InputState.default)
        })

        this.sub.input.addEventListener("keypress", (e) => {
            if (this.prop.max !== undefined) {
                if (this.sub.input.value.length > this.prop.max) {
                    this.sub.input.value = this.value
                    return
                }
            }
        })
        this.sub.input.addEventListener("keyup", (e) => {
            if (this.prop.max !== undefined) {
                if (this.sub.input.value.length > this.prop.max) {
                    this.sub.input.value = this.value
                    return
                }
            }

            this.value = this.sub.input.value

            this.setPlaceholder()
        })
    }

    setState(state: InputState) {
        const _this = this.getElement()

        this.states.forEach(s => _this.classList.remove(s))

        if (this.value !== "" && state !== InputState.active) {
            
            _this.classList.add(s_active)
        }

        const disableAttr = "disabled"
        if (state === InputState.disabled) this.sub.input.setAttribute(disableAttr, disableAttr)
        else this.sub.input.removeAttribute(disableAttr)

        switch (state) {
            case InputState.default:
                break
            case InputState.active:
                _this.classList.add(s_active)
                break
            case InputState.disabled:
                window.getSelection().removeAllRanges()
                _this.classList.add(s_disabled)
                break
            case InputState.error:
                _this.classList.add(s_error)
                break
        }

        this.prop.state = state
    }

    set value(value: string) {
        this.prop.value = value
        this.sub.input.value = this.prop.value
        // if(value !== "") this.setState(InputState.active)
    }

    get value() {
        return this.prop.value
    }

    verify(): boolean {
        if (!this.prop.verify) return true
        const error = this.prop.verify(this.sub.input.value)
        if (error === null) return true
        this.setWithError(error)
    }

    setWithError(error: InputError) {
        this.sub.error.innerText = `${(error.code) ? `[${error.code}]` : ''} ${error.message}`
        this.setState(InputState.error)
    }

    get input() {
        return this.sub.input
    }

    showLoader(show = true) {
        this.prop.loader = show
        if (this.prop.loader) {
            this.sub.loader.style.display = "flex"
            this.nucleus.style.backdropFilter = "blur(1px)"
        }
        else {
            this.sub.loader.style.display = "none"
             this.nucleus.style.backdropFilter = "none"
        }
    }

    setPlaceholder(placeholder = this.prop.placeholder) {
        if (!placeholder) return

        this.prop.placeholder = placeholder
        if (this.value === "") {
            this.sub.placeholder.style.opacity = "1"
            
        } else {
            this.sub.placeholder.style.opacity = "0"
        }
    }
}