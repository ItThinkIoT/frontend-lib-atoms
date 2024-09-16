import { Atom } from "atomicreact-ts"

import * as style from "./pyramid.atom.css"

interface IProp {
    size?: number
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    shadown?: boolean
    shadowColor?: string
}

export class PyramidLoader extends Atom<{ prop: IProp }> {

    DEFAULT_SIZE  = 100;

    struct = () => (
        <div class={style.pyramid_loader}>
            <div class={style.wrapper}>
                <span style={`background: conic-gradient(${this.prop.color1}, ${this.prop.color2}, ${this.prop.color3}, ${this.prop.color4});`} class={[style.side, style.side1]}></span>
                <span style={`background: conic-gradient(${this.prop.color4}, ${this.prop.color3}, ${this.prop.color2}, ${this.prop.color1});`} class={[style.side, style.side2]}>1</span>
                <span style={`background: conic-gradient(${this.prop.color4}, ${this.prop.color3}, ${this.prop.color2}, ${this.prop.color1});`} class={[style.side, style.side3]}></span>
                <span style={`background: conic-gradient(${this.prop.color1}, ${this.prop.color2}, ${this.prop.color3}, ${this.prop.color4});`} class={[style.side, style.side4]}></span>
            </div>
            <span style={(this.prop.shadown) ? `background: ${this.prop.shadowColor};` : ""} class={style.shadow}></span>
        </div>
    )

    preRender = () => {
        if (!this.prop.size) this.prop.size = this.DEFAULT_SIZE
        if (!this.prop.color1) this.prop.color1 = "#2BDEAC"
        if (!this.prop.color2) this.prop.color2 = "#F028FD"
        if (!this.prop.color3) this.prop.color3 = "#D8CCE6"
        if (!this.prop.color4) this.prop.color4 = "#2F2585"
        if (this.prop.shadown === undefined) this.prop.shadown = true
        if (!this.prop.shadowColor) this.prop.shadowColor = "#8B5AD5"
    }

    onRender(): void {
        this.setSize()
    }

    setSize() {
        this.getElement().style.width = `${this.prop.size}px`
        this.getElement().style.height = `${this.prop.size}px`
        this.getElement().style.scale = `${((this.prop.size-30)/this.DEFAULT_SIZE)}`
    }

}