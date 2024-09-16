import { Atom } from "atomicreact-ts"

import { step, use, using, used, bar, title } from "./step.atom.css"

export enum StepState {
    USE,
    USING,
    USED
}

export interface IProp {
    state?: StepState,
    title?: string,
    width?: number,
    key?: string | number
}

interface ISub {
    bar: HTMLSpanElement
    title: HTMLParagraphElement
    /* Viscente e Solange */
}


export class Step extends Atom<{ prop: IProp, sub: ISub }> {

    preRender: () => void = () => {
        if (this.prop.state == undefined) this.prop.state = StepState.USE
        if (this.prop.title == undefined) this.prop.title = ""
        if (this.prop.width == undefined) this.prop.width = 186
    }

    struct: () => string = () => (
        <div  class={step} style={`min-width: ${this.prop.width}px`}>
            <span class={bar} sub={this.sub.bar}></span>
            <p class={title} sub={this.sub.title}></p>
        </div>
    )

    onRender(): void {
        console.log(`on render step`)
        this.setState(this.prop.state)
        this.setTitle(this.prop.title)
    }

    setState(state: StepState) {

        const _this = this.getElement()
        _this.classList.remove(use)
        _this.classList.remove(using)
        _this.classList.remove(used)

        switch (state) {
            case StepState.USE:
                _this.classList.add(use)
                break
            case StepState.USING:
                _this.classList.add(using)
                break
            case StepState.USED:
                _this.classList.add(used)
                break
        }
    }

    setTitle(title: IProp["title"]) {
        this.prop.title = title
        this.sub.title.innerText = title
    }
}