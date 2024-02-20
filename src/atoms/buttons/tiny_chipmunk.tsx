import { Atom } from "atomicreact-ts"

import { buttons, container, start } from "./tiny_chipmunk.atom.css"

interface Prop {
    label: string,
    action: string,
    started?: string,
    onClick: (_this: TinyChipmunkButton) => void
}
interface Sub {
    button: HTMLButtonElement
}


export class TinyChipmunkButton extends Atom<{ prop: Prop, sub: Sub }> {

    preRender = () => {
        console.log("TinyChipmunkButton pre render")
        if(!this.prop.started) this.prop.started = "Started"
    }

    onRender(): void {
        console.log("TinyChipmunkButton on render")

        if (this.prop.onClick) {
            this.sub.button.onclick = (ev) => {
                ev.preventDefault()
                this.prop.onClick(this)
            }
        }

        // this.start()
    }

    struct = () => (
        <div class={container}>
            <div class={buttons}>
                <button sub={this.sub.button}>
                    <span></span>
                    <p data-start={this.prop.started} data-action={this.prop.action} data-label={this.prop.label}></p>
                </button>
            </div>
        </div>
    )

    start() {
        this.sub.button.classList.add(start)
    }

    stop() {
        this.sub.button.classList.remove(start)
    }

    toogle() {
        this.sub.button.classList.toggle(start)
    }

    isStarted() {
        return this.sub.button.classList.contains(start)
    }


}