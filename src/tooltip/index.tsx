import { Atom } from "atomicreact-ts"

import { text, tooltip } from "./style.atom.css"

interface IProp {
    text: string
}

export class Tooltip extends Atom<{ prop: IProp }> {

    struct: () => string = () => (
        <span class={tooltip} nucleus>
            <div nucleus></div>
            <span class={text}>{this.prop.text}</span>
        </span>
    )

    preRender: () => void = () => {

    }
}