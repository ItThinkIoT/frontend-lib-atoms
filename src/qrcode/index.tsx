import { Atom } from "atomicreact-ts"

import { square } from "./qrcode.atom.css"

import { gradientBorder, withRotation, floatingZ } from "../utils/animations.atom.css"

import { QRCodeSVG } from "@akamfoad/qrcode"

interface IProp {
    value: string,
    bgColor?: string,
    fgColor?: string,
    glowColorOne?: string,
    glowColorTwo?: string,
    level?: "L" | "M" | "Q" | "H",
    padding?: number,
    image?: {
        source?: string | typeof Image | HTMLCanvasElement | Promise<unknown>,
        svgSource?: string,
        width?: number | string
        height?: number | string
        border?: number
        x?: number | string
        y?: number | string
    },
    rotationAnimation?: boolean,
    floatAnimation?: boolean,
    rotationPeriod?: number,
    floatingZPeriod?: number
}

interface ISub {

}

export class QrCode extends Atom<{ prop: IProp }> {

    qrcodeSVG: QRCodeSVG

    svgElement: SVGElement

    preRender = () => {
        if (!this.prop.bgColor) this.prop.bgColor = "#FFF"
        if (!this.prop.fgColor) this.prop.fgColor = "#000"
        if (!this.prop.glowColorOne) this.prop.glowColorOne = this.prop.bgColor
        if (!this.prop.glowColorTwo) this.prop.glowColorTwo = this.prop.fgColor

        if (!this.prop.level) this.prop.level = "L"
        if (!this.prop.padding) this.prop.padding = 3
        if (this.prop.image) {
            if (!this.prop.image.height) this.prop.image.height = "20%"
            if (!this.prop.image.width) this.prop.image.width = "20%"
            if (!this.prop.image.x) this.prop.image.x = "center"
            if (!this.prop.image.y) this.prop.image.y = "center"
        }

        if (this.prop.rotationAnimation === undefined) this.prop.rotationAnimation = true
        if (this.prop.floatAnimation === undefined) this.prop.floatAnimation = true
        if (!this.prop.rotationPeriod) this.prop.rotationPeriod = 10
        if (!this.prop.floatingZPeriod) this.prop.floatingZPeriod = 20
    }

    struct = () => (
        <div class={[square, gradientBorder]}>

        </div>
    )

    onRender(): void {

        /* Glow Colors */
        this.getElement().style.setProperty(`--glowColorOne`, this.prop.glowColorOne)
        this.getElement().style.setProperty(`--glowColorTwo`, this.prop.glowColorTwo)

        /* Animations */
        if (this.prop.rotationAnimation) this.getElement().classList.add(withRotation)
        if (this.prop.floatAnimation) this.getElement().classList.add(floatingZ)
        this.getElement().style.setProperty(`--rotationPeriod`, `${this.prop.rotationPeriod}s`)
        this.getElement().style.setProperty(`--floatingZPeriod`, `${this.prop.floatingZPeriod}s`)

        this.renderQRCode()
    }

    setData(value: IProp["value"]) {
        this.prop.value = value
        this.renderQRCode()
    }

    renderQRCode() {
        if (!this.prop.value) return
        
        this.qrcodeSVG = new QRCodeSVG(this.prop.value, {
            bgColor: this.prop.bgColor,
            fgColor: this.prop.fgColor,
            level: this.prop.level,
            padding: this.prop.padding,
            image: this.prop.image ? {
                source: (this.prop.image.source ? this.prop.image.source : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY/iPAwwpif//Aboev0GEdLc5AAAAAElFTkSuQmCC"),
                height: this.prop.image.height,
                width: this.prop.image.width,
                x: this.prop.image.x,
                y: this.prop.image.y,

            } : undefined

        })
        this.getElement().innerHTML = this.qrcodeSVG.toString()

        this.svgElement = this.getElement().querySelector("svg");


        /* Replace image source by custom element */
        if (this.prop.image && this.prop.image.svgSource) {
            const imgSVG = this.svgElement.querySelector("image")
            const propsKeys = ["width", "height", "x", "y"]
            const propsSVG = {}
            propsKeys.forEach(key => propsSVG[key] = imgSVG.getAttribute(key))
            imgSVG.outerHTML = this.prop.image.svgSource
            const svg = this.svgElement.querySelector("svg")
            propsKeys.forEach(key => svg.setAttribute(key, propsSVG[key]))
        }

    }

}