import { Atom } from "atomicreact-ts"

import { Symbols } from "./symbols.js"
/* Symbols can be found here: https://fonts.google.com/icons?icon.set=Material+Symbols */
interface IProp {
    symbol: Symbols
    color?: string
    size?: number //Size in px
}

export class MaterialSymbols extends Atom<{ prop: IProp }> {

    public static async load(href: string = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"): Promise<void> {

        const linkElement = document.createElement("link")
        linkElement.setAttribute("href", href)
        linkElement.setAttribute("rel", "stylesheet")
        document.head.appendChild(linkElement)

        return new Promise(async (resolve, reject) => {
            linkElement.onload = () => {
                resolve()
            }
        })
    }

    struct: () => string = () => (<span style={`${this.prop.color ? `color: ${this.prop.color};` : ""}${this.prop.size ? `font-size: ${this.prop.size}px;` : ""}`} class="material-symbols-outlined">{this.prop.symbol}</span>)
}