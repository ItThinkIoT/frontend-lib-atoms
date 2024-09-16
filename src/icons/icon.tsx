import { Atom } from "atomicreact-ts";
import { DarkTheme } from "../utils/theme.js";

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
        if (!this.prop.width) {
            if (this.prop.height) {
                this._height = `${this.prop.height}px`
            } else {
                this._width = "25px"
                this._height = "auto"
            }
            this._width = "auto"
        } else {
            this._width = `${this.prop.width}px`
            this._height = "auto"
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