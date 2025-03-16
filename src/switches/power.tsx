import { Atom } from "atomicreact-ts"

import style from "./power.atom.css"

interface ISub {
    input: HTMLInputElement
}

interface IProp {
    active?: boolean
    size?: number,
    onClick?: (_this: PowerSwitch) => void
}

export class PowerSwitch extends Atom<{ sub: ISub, prop: IProp }> {

    line = `${this.id}_line`
    cicle = `${this.id}_cicle`

    struct: () => string = () => (
        <div class={style.atom}>
            <div class={style.power_switch}>
                <input sub={this.sub.input} type="checkbox" />
                <div class={style.button}>
                    <svg class={style.power_off}>
                        <use xlink:href={`#${this.line}`} class={style.line} />
                        <use xlink:href={`#${this.cicle}`} class={style.circle} />
                    </svg>
                    <svg class={style.power_on}>
                        <use xlink:href={`#${this.line}`} class={style.line} />
                        <use xlink:href={`#${this.cicle}`} class={style.circle} />
                    </svg>
                </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id={this.line}>
                    <line x1="75" y1="34" x2="75" y2="58" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id={this.cicle}>
                    <circle cx="75" cy="80" r="35" />
                </symbol>
            </svg>

        </div>
    )

    preRender: () => void = () => {
        this.prop.active ??= false
        this.prop.size ??= 64
    }

    onRender(): void {
        this.setSize(this.prop.size)
        this.setActive(this.prop.active)
        if (this.prop.onClick) {
            this.getElement().onclick = (e) => {
                e.preventDefault()
                this.prop.onClick(this)
            }
        }
    }

    setSize(size: number) {
        if (size <= 0) size = 64
        this.getElement().style.setProperty("--size", `${size}px`)
        this.prop.size = size
    }

    setActive(active: boolean) {
        this.prop.active = active
        setTimeout(() => {
            this.sub.input.checked = active
        }, 1)
    }
}