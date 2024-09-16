import { Atom } from "atomicreact-ts"

import { Page } from "./page/index.jsx"

import { pager, hidden } from "./pager.atom.css"

export { Page } from "./page/index.jsx"

interface IProp {
    pages?: Array<Page>,
    currentPageIndex?: number,
    transaction?: {
        effect?: "fade-in" | "none" | "fade-in-out" | "fade-out"
        direction?: "horizontal" | "vertical"
    }
}

export class Pager extends Atom<{ prop: IProp }> {

    preRender = () => {
        if (this.prop.pages === undefined) this.prop.pages = []
        if (this.prop.currentPageIndex === undefined) this.prop.currentPageIndex = 0
    }

    struct = () => (
        <section class={pager} nucleus>

        </section>
    )

    setPages(pages: Array<Page>) {
        this.prop.pages = pages
        this.getElement().innerHTML = ''
        this.onRender()
    }

    addPage(page: Page, showIt = false) {
        const newPageIndex = this.prop.pages.push(page) - 1
        this.add(page)
        this.setCurrent((showIt) ? newPageIndex : this.prop.currentPageIndex)
    }

    onRender(): void {
        for (const page of this.prop.pages) {
            this.add(page)
        }
        this.setCurrent(this.prop.currentPageIndex)
        console.log("Pager was rendered")
    }

    setCurrentKey(pageKey: Page["prop"]["key"]) {
        const index = this.prop.pages.findIndex(step => step.prop.key === pageKey)
        if(index < 0) return
        this.setCurrent(index)
    }

    setCurrent(pageIndex: IProp["currentPageIndex"]) {
        if (pageIndex < 0) pageIndex = 0
        if (pageIndex >= this.prop.pages.length) pageIndex = this.prop.pages.length - 1
        for (let i = 0; i < this.prop.pages.length; i++) {
            if (i === pageIndex) {
                this.prop.pages[i].getElement().classList.remove(hidden)
            } else {
                this.prop.pages[i].getElement().classList.add(hidden)
            }
        }
        this.prop.currentPageIndex = pageIndex
    }
}