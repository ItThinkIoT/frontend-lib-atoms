import { Atom } from "atomicreact-ts"

import { CircleLoader } from "../loaders/circle.jsx"
import { button, s_error, s_success, s_disabled, nucleus, active, start, show, hide } from "./simple.atom.css"

export enum SimpleButtonState {
    DEFAULT,
    ERROR,
    SUCCESS,
    DISABLED
}

export interface IProp<TButton> {
    label?: string | HTMLElement,
    state?: SimpleButtonState,
    onClick?: (_this: TButton | SimpleButton) => void
    class?: Array<string>,
    active?: boolean
    nucleusAlign?: "start" | "end"
}

interface ISub {
    button: HTMLButtonElement
    label: HTMLSpanElement
    loading: HTMLSpanElement
}


export class SimpleButton<TSimpleButton = SimpleButton<any>> extends Atom<{ prop: IProp<TSimpleButton>, sub: ISub }> {

    private states = [s_error, s_success, s_disabled]

    preRender: () => void = () => {
        if (this.prop.state === undefined) this.prop.state = SimpleButtonState.DEFAULT
        if (this.prop.class === undefined) this.prop.class = []
        if (this.prop.active === undefined) this.prop.active = true
        if (this.prop.nucleusAlign === undefined) this.prop.nucleusAlign = "end"
    }

    struct: () => string = () => (
        <div class={[button, ...this.prop.class]}>
            <button sub={this.sub.button}>
                <span class={show} sub={this.sub.label}>{this.prop.label ?? ""}</span>
                <span sub={this.sub.loading} class={hide}><CircleLoader size={14}></CircleLoader></span>
            </button>
            <div nucleus class={nucleus}></div>
        </div>
    )

    onRender(): void {
        this.setState(this.prop.state)
        this.toggleActive(this.prop.active)

        this.getElement().onclick = (mouseEvent) => {
            mouseEvent.preventDefault()
            if (this.prop.active && this.prop.onClick) this.prop.onClick(this)
        }

        this.fixStyle()
    }

    fixStyle() {
        /* Fix button style */
        const borderRadius = Number(getComputedStyle(this.getElement()).getPropertyValue("--RadiusSize").replace("px", ""))
        this.sub.button.style.paddingRight = `${this.nucleus.clientWidth + borderRadius}px`
        if (this.nucleus.children.length === 0) return
        const maxNucleusChildHeight = (Array.prototype.reduce.call(this.nucleus.children, (prev: HTMLElement, current: HTMLElement) => ((current.clientHeight > prev.clientHeight) ? current : prev)) as HTMLElement).clientHeight
        this.sub.button.style.minHeight = `${Math.max(this.sub.button.clientHeight, maxNucleusChildHeight + 10)}px`

        if (this.prop.nucleusAlign === "start") {
            this.nucleus.classList.add(start)
        } else {
            this.nucleus.classList.remove(start)
        }
    }

    setState(state: SimpleButtonState) {
        const _this = this.getElement()
        this.states.forEach(s => _this.classList.remove(s))

        const disableAttr = "disabled"
        if (state === SimpleButtonState.DISABLED) this.sub.button.setAttribute(disableAttr, disableAttr)
        else this.sub.button.removeAttribute(disableAttr)

        switch (state) {
            case SimpleButtonState.ERROR:
                _this.classList.add(s_error)
                break
            case SimpleButtonState.SUCCESS:
                _this.classList.add(s_success)
                break
            case SimpleButtonState.DISABLED:
                _this.classList.add(s_disabled)
                break
        }

        this.prop.state = state
    }

    toggleActive(toActive?: boolean): boolean {
        if (toActive === undefined) {
            toActive = !this.getElement().classList.contains(active)
        }

        if (toActive) this.getElement().classList.add(active)
        else this.getElement().classList.remove(active)

        this.prop.active = toActive

        return toActive
    }

    startLoading() {
        this.toggleActive(false)
        this.sub.label.classList.replace(show, hide)
        this.sub.loading.classList.replace(hide, show)
    }
    endLoading() {
        this.toggleActive(true)
        this.sub.label.classList.replace(hide, show)
        this.sub.loading.classList.replace(show, hide)
    }

    set onClick(callback: IProp<TSimpleButton>["onClick"]) {
        this.prop.onClick = () => {
            callback(this)
        }
    }
}