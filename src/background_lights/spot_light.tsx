import { Atom } from "atomicreact-ts";

interface IProp {
    class?: string
    dx?: number, /* x offset */
    dy?: number, /* y offset */
    blur?: number
}

export class SpotLight extends Atom<{ prop: IProp }> {
    preRender = () => {
        if (!this.prop.class) this.prop.class = ""
        if (this.prop.dx == undefined) this.prop.dx = 0
        if (this.prop.dy == undefined) this.prop.dy = 0
        if (this.prop.blur == undefined) this.prop.blur = 50
    }

    struct: () => string = () => (
        <svg style={`filter: blur(${this.prop.blur}px);`} class={this.prop.class} width="700" height="450" xmlns="http://www.w3.org/2000/svg"><defs>
            <linearGradient id={`${this.id}_a`} x1="19.609%" x2="50%" y1="14.544%" y2="100%">
                <stop offset="0%" stop-color="#6366F1" />
                <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
            </linearGradient>
            <linearGradient id={`${this.id}_b`} x1="50%" x2="19.609%" y1="100%" y2="14.544%">
                <stop offset="0%" stop-color="#A855F7" />
                <stop offset="100%" stop-color="#6366F1" stop-opacity="0" />
            </linearGradient>
        </defs>
            <g fill="none">
                <path fill={`url(#${this.id}_a)`} d={`m${214 + this.prop.dx} ${23 + this.prop.dy} 461 369-284 58z`} />
                <path fill={`url(#${this.id}_b)`} d={`m${this.prop.dx} ${this.prop.dy} 461 369-284 58z`} />
            </g>
        </svg>
    );
}