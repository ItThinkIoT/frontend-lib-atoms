import { Atom } from "atomicreact-ts";
import { DarkTheme } from "../theme/default.js";

export interface IPropIcon {
    width?: number,
    height?: number
    color?: string

}
export class Icon extends Atom<{
    prop: {
        setColor?: (color: string) => void
    } & IPropIcon
}> {

    _width: string
    _height: string

    preRender = () => {

        if (!this.prop.width) this._width = "auto"
        else this._width = `${this.prop.width}px`

        if (!this.prop.height) this._height = "auto"
        else this._height = `${this.prop.height}px`

        if (this._width == "auto" && this._height == "auto") {
            this._height = `32px`
        }

        if (!this.prop.color) this.prop.color = DarkTheme.LabelSecondary
    }

    struct = () => (
        <div style={`width: ${this._width}; height: ${this._height}; margin: auto;`}>
            <div nucleus></div>
        </div>
    )

    onRender(): void {
        if (this.prop.setColor) this.prop.setColor(this.prop.color)
    }

}