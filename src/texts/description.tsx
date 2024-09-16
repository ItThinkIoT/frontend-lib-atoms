import { Atom } from "atomicreact-ts"

import { description } from "./description.atom.css"

interface IProp {
    padding?: string
    style?: string
    class?: string[] | string
}
export class DescriptionText extends Atom<{ prop: IProp }> {

    preRender = () => {
        if (!this.prop.class) this.prop.class = []
        if (typeof this.prop.class === "string") this.prop.class = [this.prop.class]

        if (!this.prop.style) this.prop.style = ""
        if (this.prop.padding) this.prop.style = `${this.prop.style}padding: ${this.prop.padding}`
    }
    struct = () => (
        <p class={[description, ...this.prop.class]} style={this.prop.style} nucleus></p>
    )
}