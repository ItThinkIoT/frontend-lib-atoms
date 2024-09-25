import { Atom } from "atomicreact-ts"

import { Step, StepState, IProp as IPropStep } from "./step/index.jsx"

import { steps as stepsStyle } from "./steps.atom.css"

interface IProp {
    classes?: Array<string> | string
    titles?: Array<IPropStep["title"]>
    currentIndex?: number,
    onStepClick?: (step: Step, index: number) => void
    parentWidth?: number
}


export class Steps extends Atom<{ prop: IProp }> {

    steps: Array<Step> = []

    isEnabled = true

    preRender: () => void = () => {
        if (this.prop.titles == undefined) this.prop.titles = []
        if (this.prop.currentIndex == undefined) this.prop.currentIndex = 0
        if (this.prop.parentWidth == undefined) this.prop.parentWidth = window.innerWidth

        if (!this.prop.classes) this.prop.classes = []
        if (typeof this.prop.classes == "string") this.prop.classes = this.prop.classes.split(" ")
        this.prop.classes.push(stepsStyle)
    }

    setSteps(steps: Array<Step>) {
        this.steps = steps
        this.getElement().innerHTML = ''
        this.onRender()
    }

    addStep(step: Step, showIt = false) {
        const newStepIndex = this.steps.push(step) - 1
        this.add(step)
        step.getElement().onclick = () => {
            if (this.isEnabled && this.prop.onStepClick) this.prop.onStepClick(step, newStepIndex)
        }
        this.setCurrent((showIt) ? newStepIndex : this.prop.currentIndex)
    }

    struct: () => string = () => (
        <div class={(this.prop.classes as Array<string>).join(" ")} nucleus>
        </div>
    )

    onRender(): void {
        // console.log(`steps on render `)

        for (const title of this.prop.titles) {
            this.addStep(new Step({ title }))
        }

        this.getElement().ontouchstart = (e) => {
            e.preventDefault()
            if (e.target) {
                (e.target as unknown as any).click()
            }
        }

        window.addEventListener("resize", () => {
            this.setCurrent(this.prop.currentIndex)
        })
        this.setCurrent(this.prop.currentIndex)
    }
    setCurrentKey(stepKey?: Step["prop"]["key"]) {
        const index = this.steps.findIndex(step => step.prop.key === stepKey)
        if (index < 0) return
        this.setCurrent(index)
    }

    setCurrent(newCurrentIndex: IProp["currentIndex"]) {
        this.isEnabled = true
        if (newCurrentIndex < 0) newCurrentIndex = 0
        if (newCurrentIndex >= this.steps.length) newCurrentIndex = this.steps.length - 1
        for (let i = 0; i < this.steps.length; i++) {
            let stepState = StepState.USING
            if (i === newCurrentIndex) {
                const stepWidth = this.steps[0].getElement().clientWidth
                const stepMiddle = ((i) + 0.5) * stepWidth
                const translateX = (this.prop.parentWidth / 2) - this.getElement().offsetLeft - stepMiddle
                this.getElement().style.transform = `translateX(${translateX}px)`
            } else {
                stepState = (i < newCurrentIndex) ? StepState.USED : StepState.USE
            }

            this.steps[i].setState(stepState)
        }
        this.prop.currentIndex = newCurrentIndex
    }

    setParent(element: HTMLElement) {
        setTimeout(()=>{
            this.prop.parentWidth = element.offsetWidth
            this.setCurrent(this.prop.currentIndex)
        }, 10)
    }
    next() {
        this.setCurrent(this.prop.currentIndex + 1)
    }
    previous() {
        this.setCurrent(this.prop.currentIndex - 1)
    }

    disable() {
        this.isEnabled = false
        for (let i = 0; i < this.steps.length; i++) {
            this.steps[i].setState(StepState.USED)
        }
    }
}