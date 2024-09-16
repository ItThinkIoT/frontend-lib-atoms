import { Atom } from "atomicreact-ts";

interface IProp {
    class?: string
    dx?: number, /* x offset */
    dy?: number, /* y offset */
    blur?: number
}

export class ExtendedLight extends Atom<{ prop: IProp }> {
    preRender = () => {
        if (!this.prop.class) this.prop.class = ""
        if (this.prop.dx == undefined) this.prop.dx = 0
        if (this.prop.dy == undefined) this.prop.dy = 0
        if (this.prop.blur == undefined) this.prop.blur = 50
    }

    struct: () => string = () => (
        <svg class={this.prop.class} width="900" height="322" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient x1="98.284%" y1="37.276%" x2="9.488%" y2="37.276%" id={`${this.id}_a`}><stop stop-color="#6366F1" offset="0%" />
                    <stop stop-color="#6366F1" stop-opacity="0" offset="100%" />
                </linearGradient>
                <linearGradient x1="100%" y1="37.276%" x2="9.488%" y2="37.276%" id={`${this.id}_c`}>
                    <stop stop-color="#6EE7B7" offset="0%" />
                    <stop stop-color="#6EE7B7" stop-opacity="0" offset="100%" />
                </linearGradient>
                <filter x="-17.6%" y="-34.2%" width="135.1%" height="168.4%" filterUnits="objectBoundingBox" id={`${this.id}_b`}>
                    <feGaussianBlur stdDeviation={this.prop.blur} in="SourceGraphic" />
                </filter>
                <filter x="-23.6%" y="-187.5%" width="147.2%" height="475%" filterUnits="objectBoundingBox" id={`${this.id}_d`}>
                    <feGaussianBlur stdDeviation={this.prop.blur} in="SourceGraphic" />
                </filter>
            </defs>
            <g fill="none" fill-rule="evenodd" transform={`translate(${this.prop.dx - 300}, ${this.prop.dy})`} >
                <path fill={`url(#${this.id}_a)`} filter={`url(#${this.id}_b)`} d="M262.114 307.493 253 438.5l844.888-307.493L1107 0z" transform="translate(-.085 -152)" />
                <path fill={`url(#${this.id}_c)`} filter={`url(#${this.id}_d)`} transform="rotate(-20 156.955 105.525)" d="m306.098 141.285-35.583 80h599.417l35.583-80z" />
            </g>
        </svg>
    );
}