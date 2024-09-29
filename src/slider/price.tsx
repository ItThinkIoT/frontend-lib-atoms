import { Atom } from "atomicreact-ts"

/* Docs: https://refreshless.com/nouislider/ */
import { API, create, PipsMode, Options } from "nouislider"

import * as style from "./slider.atom.css"
import { fromNumberToString, truncateFixedAmount } from "utils/currency.js"
import { getTheme } from "utils/theme.js"

interface ISub {
    slider: HTMLDivElement,
    price: HTMLHeadingElement
    prefix: HTMLSpanElement
    valueInt: HTMLSpanElement
    valueDec: HTMLSpanElement
    sufix: HTMLSpanElement
}

interface IProp {
    min?: number,
    max?: number,
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
    enabled?: boolean
    onEnd?: (number: number, _this: PriceSlider) => void
    onChange?: (number: number, _this: PriceSlider, ) => void
    onUpdate?: (number: number, _this: PriceSlider) => boolean | void
}

export class PriceSlider extends Atom<{ sub: ISub, prop: IProp }> {

    slider: API

    public _value: number

    public prefixStyle: string

    preRender = () => {
        if (this.prop.min === undefined) this.prop.min = 0
        if (this.prop.max === undefined) this.prop.max = 0
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
        if (this.prop.class === undefined) this.prop.class = []
        if (this.prop.decimal === undefined) this.prop.decimal = 2
        if (this.prop.pipDecimal === undefined) this.prop.pipDecimal = 0
        if (this.prop.priceAlign === undefined) this.prop.priceAlign = "center"

        if (this.prop.baseBarColor === undefined) this.prop.baseBarColor = "#FFF"
        if (this.prop.activeBarColor === undefined) this.prop.activeBarColor = "#FFF"
        if (this.prop.enabled === undefined) this.prop.enabled = true

        this.prop.start = this.validValue(this.prop.start)
        this._value = this.prop.start
    }

    struct = () => (
        <div class={[...this.prop.class, style.atom]}>
            <h2 sub={this.sub.price} class={style.price} style={`text-align: ${this.prop.priceAlign}`}>
                <span sub={this.sub.prefix} class={style.prefix}>{this.prop.prefix}</span>
                <span sub={this.sub.valueInt} class={style.int}></span>
                <span sub={this.sub.valueDec} class={style.dec}></span>
                <span sub={this.sub.sufix} class={style.sufix}>{this.prop.sufix}</span>
            </h2>
            <div class={style.slider} sub={this.sub.slider}></div>
        </div>
    )

    getSliderOptions(): Options {
        return {
            cssPrefix: this.prefixStyle,
            start: [this.prop.start],
            connect: [true, false],
            step: this.prop.step,
            range: {
                'min': [this.prop.min],
                'max': [this.prop.max]
            },
            pips: {
                mode: PipsMode.Values,
                values: Array.from({ length: Math.ceil(Math.abs((this.prop.max - this.prop.min)) / (this.prop.pipStep)) + 1 }, (_, i) => {
                    if (this.prop.pipHideFirstLast && (i == 0 || i == ((this.prop.max - this.prop.min) / (this.prop.pipStep)))) return null
                    let valuePipStep = (this.prop.min + (i * this.prop.pipStep))
                    if (valuePipStep > this.prop.max) valuePipStep = this.prop.max
                    return valuePipStep
                }).filter((n) => (n !== null)),//[20, 30, 40, 50, 60, 70, 80],
                format: {
                    to: (n) => {
                        return this.formatValue(n, this.prop.pipPrefix, this.prop.pipSufix, this.prop.pipDecimal)
                    }
                },
                density: (this.prop.max > this.prop.min) ? this.prop.pipStep * 2 : this.prop.pipStep / 2
            }
        }
    }
    onRender(): void {
        this.prefixStyle = `${style.slider.split("_")[0]}_noUi-`

        this.slider = create(this.sub.slider, this.getSliderOptions())

        // this.slider.on("change", (values, indexHandler) => {
        //     // const value = this.validValue(Number(values[indexHandler]))
        //     // console.log(value, this.value)
        //     // if (value === this.value) return
        //     // this.onChange()
        // })
        this.slider.on("set", (values, indexHandler)=>{
            if(this.prop.onEnd) this.prop.onEnd(this.value, this)
        })
        this.slider.on("update", (values, indexHandler) => {
            this.value = Number(values[indexHandler])
        })

        /* Styling slider */
        this.getSliderElement("connects").style.backgroundColor = this.prop.baseBarColor
        this.getSliderElement("connect").style.backgroundColor = this.prop.activeBarColor

        /* Mouse Wheel  */
        const onWheelMouse = (event: WheelEvent) => {
            if (event.deltaY < 0) {
                this.next()
            } else if (event.deltaY > 0) {
                this.prev()
            }
            event.preventDefault()
        }
        this.getElement().addEventListener("mouseenter", () => {
            window.addEventListener('wheel', onWheelMouse, { passive: false });
        })
        this.getElement().addEventListener("mouseleave", () => {
            window.removeEventListener('wheel', onWheelMouse);
        })

        this.updateStyles()
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
            mustContinue = this.prop.onUpdate(newValue, this) as boolean ?? true
        }

        if (!mustContinue) {
            if (this.value !== newValue) this.set(this.value)
            return
        }

        if (this.prop.onChange && this.value !== newValue) {
            this.prop.onChange(newValue, this)
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
        this.set(next)
    }
    /* Back to previus step value */
    prev() {
        const prev = (Math.floor((((this.value - 0.000001) - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min
        this.set(prev)
    }
    set(value: number) {
        if (!this.prop.enabled) return
        this.slider.set(value, false)
    }

    getSliderElement(className: string): HTMLElement {
        return this.sub.slider.querySelector(`.${this.prefixStyle}${className}`)
    }

    reRender() {
        this.preRender()
        this.sub.prefix.innerText = this.prop.prefix
        this.sub.sufix.innerText = this.prop.sufix
        this.slider.updateOptions(this.getSliderOptions(), false)
        this.updateStyles()
        this.slider.set(this.prop.start)
    }

    updateStyles(baseColor = this.prop.baseBarColor, activeBarColor = this.prop.activeBarColor) {
        if (!this.prop.enabled) {
            baseColor = getTheme().OffDisabled
            activeBarColor = getTheme().Off
            this.slider.disable()
            this.getSliderElement("base").classList.add(style.disabled)
        } else {
            this.slider.enable()
            this.getSliderElement("base").classList.remove(style.disabled)
        }

        /* Styling slider */
        this.getSliderElement("connects").style.backgroundColor = baseColor
        this.getSliderElement("connect").style.backgroundColor = activeBarColor
        this.getSliderElement("handle").style.backgroundColor = activeBarColor
        // this.getSliderElement("value").style.border = "1px solid yellow"

    }

    toggle(enable?: boolean) {
        this.prop.enabled = (enable !== undefined) ? enable : !this.prop.enabled
        this.updateStyles()
    }

}