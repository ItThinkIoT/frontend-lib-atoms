import { Atom } from "atomicreact-ts"

/* Docs: https://refreshless.com/nouislider/ */
import { API, create, PipsMode } from "nouislider"

import * as style from "./slider.atom.css"
import { fromNumberToString, truncateFixedAmount } from "utils/currency.js"

interface ISub {
    slider: HTMLDivElement,
    price: HTMLHeadingElement
    valueInt: HTMLSpanElement
    valueDec: HTMLSpanElement
}

interface IProp {
    min: number,
    max: number,
    step?: number,
    pipStep?: number,
    pipHideFirstLast?: boolean
    start?: number,
    prefix?: string
    pipPrefix?: boolean,
    sufix?: string,
    pipSufix?: boolean,
    mark?: string
    class?: string[],
    decimal?: number,
    pipDecimal?: number,
    priceAlign?: "center" | "start" | "end"
    baseBarColor?: string
    activeBarColor?: string
    onChange?: (number: number) => void
    onUpdate?: (number: number) => boolean | void
}

export class PriceSlider extends Atom<{ sub: ISub, prop: IProp }> {

    slider: API

    public _value: number

    public prefixStyle: string

    preRender = () => {
        if (this.prop.step === undefined) this.prop.step = Math.abs(this.prop.max - this.prop.min) / 10
        if (this.prop.pipStep === undefined) this.prop.pipStep = this.prop.step
        if (this.prop.pipHideFirstLast === undefined) this.prop.pipHideFirstLast = false
        if (this.prop.start === undefined) this.prop.start = ((this.prop.max - this.prop.min) / 2) + this.prop.min

        if (this.prop.min > this.prop.max) throw new Error('Min size must be lower than max size')
        // if (this.prop.step > this.prop.max) throw new Error('Step size must be lower than max size')
        // if (this.prop.pipStep > this.prop.max) throw new Error('Pip step size must be lower than max size')


        if (this.prop.prefix === undefined) this.prop.prefix = ""
        if (this.prop.pipPrefix === undefined) this.prop.pipPrefix = true
        if (this.prop.sufix === undefined) this.prop.sufix = ""
        if (this.prop.pipSufix === undefined) this.prop.pipSufix = false
        if (this.prop.mark === undefined) this.prop.mark = "."
        if (this.prop.decimal === undefined) this.prop.decimal = 2
        if (this.prop.pipDecimal === undefined) this.prop.pipDecimal = this.prop.decimal
        if (this.prop.priceAlign === undefined) this.prop.priceAlign = "center"

        if (this.prop.baseBarColor === undefined) this.prop.baseBarColor = "#FFF"
        if (this.prop.activeBarColor === undefined) this.prop.activeBarColor = "#FFF"

        this.prop.start = this.validValue(this.prop.start)
        this._value = this.prop.start
    }

    struct = () => (
        <div class={this.prop.class}>
            <h2 sub={this.sub.price} class={style.price} style={`text-align: ${this.prop.priceAlign}`}>
                {this.prop.prefix}
                <span sub={this.sub.valueInt}></span>
                <span sub={this.sub.valueDec}></span>
                <span>{this.prop.sufix}</span>
            </h2>
            <div class={style.slider} sub={this.sub.slider}></div>
        </div>
    )


    onRender(): void {
        this.prefixStyle = `${style.slider.split("_")[0]}_noUi-`

        this.slider = create(this.sub.slider, {
            cssPrefix: this.prefixStyle,
            start: [this.prop.start],
            connect: [true, false],
            range: {
                'min': [this.prop.min],
                'max': [this.prop.max]
            },
            pips: {
                mode: PipsMode.Values,
                values: Array.from({ length: (Math.abs((this.prop.max - this.prop.min)) / (this.prop.pipStep)) + 1 }, (_, i) => {
                    if (this.prop.pipHideFirstLast && (i == 0 || i == ((this.prop.max - this.prop.min) / (this.prop.pipStep)))) return null
                    return (this.prop.min + (i * this.prop.pipStep))
                }).filter((n) => (n !== null)),//[20, 30, 40, 50, 60, 70, 80],
                format: {
                    to: (n) => {
                        return this.formatValue(n, this.prop.pipPrefix, this.prop.pipSufix, this.prop.pipDecimal)
                    }
                },
                density: (this.prop.max > this.prop.min) ? this.prop.pipStep * 2 : this.prop.pipStep / 2
            }
        })

        this.slider.on("change", (values, indexHandler) => {
            // this.value = Number(values[indexHandler])
            if (this.prop.onChange) {
                this.prop.onChange(this.value)
            }
            // this.slider.set(this.value)
        })
        this.slider.on("update", (values, indexHandler) => {
            // const value = Number(values[indexHandler])
            // if(value === this.value) return 
            this.value = Number(values[indexHandler])
        })


        /* Mouse Wheel  */
        const onWheelMouse = (event: WheelEvent) => {
            if (event.deltaY < 0) {
                this.prev()
            } else if (event.deltaY > 0) {
                this.next()
            }
            event.preventDefault()
        }
        this.getElement().addEventListener("mouseenter", () => {
            window.addEventListener('wheel', onWheelMouse, { passive: false });
        })
        this.getElement().addEventListener("mouseleave", () => {
            window.removeEventListener('wheel', onWheelMouse);
        })


        /* Styling slider */
        this.getSliderElement("connects").style.backgroundColor = this.prop.baseBarColor
        this.getSliderElement("connect").style.backgroundColor = this.prop.activeBarColor

        this.slider.set(this.prop.start)
    }

    get value() {
        return this._value
    }

    set value(value: number) {
        let newValue = this.validValue(value)

        this.sub.valueInt.innerText = `${truncateFixedAmount(fromNumberToString(newValue), 0)}${this.prop.mark}`
        let decimal = truncateFixedAmount(fromNumberToString(newValue), this.prop.decimal)
        this.sub.valueDec.innerText = decimal.slice(decimal.indexOf(".") + 1)

        let mustContinue = true
        if (this.prop.onUpdate) {
            mustContinue = this.prop.onUpdate(newValue) as boolean ?? true
        }

        if (!mustContinue) {
            // this.slider.set(this.value)
            return
        }

        this._value = newValue
    }

    formatValue(num: number, prefix = true, sufix = true, decimal = this.prop.decimal) {
        return `${(prefix) ? `${this.prop.prefix} ` : ""}${truncateFixedAmount(fromNumberToString(num), decimal).replace(".", this.prop.mark)}${(sufix) ? ` ${this.prop.sufix}` : ""}`
    }

    validValue(value: number) {
        let newValue = value
        const prev = (Math.floor(((value - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min
        const next = prev + this.prop.step

        if (value <= this.prop.min) newValue = this.prop.min
        else if (value >= this.prop.max) newValue = this.prop.max
        /* Snap to closest step (prev or next) */
        else if ((value - prev) <= (next - value)) newValue = prev
        else newValue = next

        return newValue
    }

    /* Go to next step value */
    next() {
        const prev = (Math.floor(((this.value - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min
        const next = prev + this.prop.step
        this.value = next
    }
    /* Back to previus step value */
    prev() {
        const prev = (Math.floor((((this.value - 0.000001) - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min
        this.value = prev
    }

    getSliderElement(className: string): HTMLElement {
        return this.sub.slider.querySelector(`.${this.prefixStyle}${className}`)
    }

}