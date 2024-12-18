import { Atom } from "atomicreact-ts"

import { error, input, placeholder, s_active, s_disabled, s_error } from "./input.atom.css"

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
    max?: number
}

interface ISub {
    input: HTMLInputElement,
    error: HTMLSpanElement,
    placeholder: HTMLSpanElement,
}

export class Input extends Atom<{ prop: IInputProp, sub: ISub }> {

    private states = [s_active, s_disabled, s_error]

    preRender: () => void = () => {
        if (this.prop.state == undefined) this.prop.state = InputState.default
        if (this.prop.value == undefined) this.prop.value = ""
        if (this.prop.type == undefined) this.prop.type = "text"
        this.prop.class ??= []
    }

    struct: () => string = () => (
        <div class={[input, ...this.prop.class]}>
            <label htmlFor={`${this.id}_input`}>{this.prop.label}</label>
            <input
                sub={this.sub.input}
                id={`${this.id}_input`}
                type={this.prop.type}
                {...(this.prop.mask) ? { ["data-mask"]: this.prop.mask } : {}}
                {...(this.prop.mode) ? { inputmode: this.prop.mode } : {}}
            ></input>
            {(this.prop.placeholder !== undefined) ? <span sub={this.sub.placeholder} class={placeholder}>{this.prop.placeholder}</span> : ''}

            <span class={error} sub={this.sub.error}>Some error</span>
        </div>
    )

    onRender(): void {
        this.setState(this.prop.state)

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

            if (this.prop.placeholder) {
                if (this.value === "") {
                    this.sub.placeholder.style.opacity = "1"
                } else {
                    this.sub.placeholder.style.opacity = "0"
                }
            }
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
    }

    get value() {
        return this.prop.value
    }

    verify() {
        if (!this.prop.verify) return
        const error = this.prop.verify(this.sub.input.value)
        if (error === null) return
        this.setWithError(error)
    }

    setWithError(error: InputError) {
        this.sub.error.innerText = `${(error.code) ? `[${error.code}]` : ''} ${error.message}`
        this.setState(InputState.error)
    }

    get input() {
        return this.sub.input
    }
}