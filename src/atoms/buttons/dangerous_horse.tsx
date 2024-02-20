
import { Atom } from "atomicreact-ts"

import { btn } from "./dangerous_horse.atom.css"

interface Prop {
    label: string,
    onClick: () => void
}
interface Sub {
    button: HTMLButtonElement
}


export class DangerousHorseButton extends Atom<{ prop: Prop, sub: Sub }> {

    onRender(): void {

        if (this.prop.onClick) {
            this.sub.button.onclick = (ev) => {
                ev.preventDefault()
                this.prop.onClick()
            }
        }
    }

    struct = () => (
        <div>
            <button class={btn} sub={this.sub.button}>{this.prop.label}</button>
        </div>
    )

}