import { Atom, IAtomicElement } from "atomicreact-ts"

import { pager, hidden } from "./pager.atom.css"

interface IProp {
    pages?: Array<Atom>,
    currentPageIndex?: number,
    transaction?: {
        effect?: "fade-in" | "none" | "fade-in-out" | "fade-out"
        direction?: "horizontal" | "vertical"
    }
}

export class Pager<TPage extends Atom = Atom> extends Atom<{ prop: IProp }> {

    pages: Array<TPage> = []

    preRender = () => {
        if (this.prop.pages === undefined) this.prop.pages = []
        if (this.prop.currentPageIndex === undefined) this.prop.currentPageIndex = 0
    }

    struct = () => (
        <section class={pager} nucleus>
        </section>
    )

    setPages(pages: Array<Atom>) {
        this.prop.pages = pages
        this.nucleus.innerHTML = ''
        this.onRender()
    }

    addPage(page: TPage, showIt = false) {
        const newPageIndex = this.prop.pages.push(page) - 1
        this.add(page)
        this.pages.push(page)
        this.setCurrent((showIt) ? newPageIndex : this.prop.currentPageIndex)
    }

    onRender(): void {
        for (const page of this.prop.pages) {
            this.add(page)
        }

        this.nucleus.childNodes.forEach((childNode) => {
            const atomicElement = childNode as IAtomicElement
            if (!atomicElement.Atomic) return
            const atom = atomicElement.Atomic.atom as TPage
            this.pages.push(atom)
        })

        this.hideAll()
        //this.setCurrent(this.prop.currentPageIndex)
        // console.log("Pager was rendered")
    }

    setCurrentKey(pageID: Atom["id"]) {
        const index = this.pages.findIndex(page => page.id === pageID)
        if (index < 0) return
        this.setCurrent(index)
    }

    setCurrent(pageIndex: IProp["currentPageIndex"]) {
        if (pageIndex < 0) pageIndex = 0
        if (pageIndex >= this.pages.length) pageIndex = this.pages.length - 1
        for (let i = 0; i < this.pages.length; i++) {
            if (i !== pageIndex) {
                this.pages[i].getElement().classList.add(hidden)
                continue
            }
            this.pages[i].getElement().classList.remove(hidden)
        }
        this.prop.currentPageIndex = pageIndex
    }

    hideAll() {
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].getElement().classList.add(hidden)
        }
    }
}