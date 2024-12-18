import { Atom, IAtomicElement } from "atomicreact-ts"

import style from "./style.atom.css"

export enum SelectionType {
    OPTION,
    MULTIPLE
}

export interface Item {
    key: string | number
    title?: string,
    description?: string
}

interface IProp {
    selection?: SelectionType,
    items?: Array<Item>,
    onChange?: (item: ItemAtom) => void
}

export class BoxedList extends Atom<{ prop: IProp, sub: { indicator: HTMLDivElement } }> {

    items: Array<ItemAtom> = []

    preRender: () => void = () => {
        this.prop.selection ??= SelectionType.OPTION
        this.prop.items ??= []
    }
    struct: () => string = () => (
        <div class={[style.list]}>
            <div sub={this.sub.indicator} class={style.indicator}></div>
            <ul nucleus>
                {this.prop.items.map(i => (<ItemAtom active={false} selection={this.prop.selection} {...i}
                    onClick={(item) => {
                        this.selectItem(item)
                    }}></ItemAtom>
                ))}
            </ul>
        </div>

    )

    onRender(): void {
        for (const c of this.nucleus.children) this.items.push((c as IAtomicElement).Atomic.atom as ItemAtom)

        //Indicator dots
        let divs = "";
        for (let i = 0; i < 60; i++) {
            let delay = 0.002 * i;
            divs += `<div style="--delay: ${delay.toFixed(3)}"></div>`;
        }
        this.sub.indicator.innerHTML = divs
    }

    moveIndicator(item: ItemAtom) {
        const nucleusBounds = this.nucleus.getBoundingClientRect()
        const itemBounds = item.sub.input.getBoundingClientRect()
        const indicatorX = itemBounds.x - nucleusBounds.x
        const indicatorY = itemBounds.y - nucleusBounds.y
        for (const c of this.sub.indicator.children) (c as HTMLElement).style.transform = `translate(${indicatorX}px,${indicatorY}px)`
    }

    selectItem(item: ItemAtom) {
        if (this.prop.selection === SelectionType.OPTION) {
            if (item.prop.active) return
            this.sub.indicator.style.opacity = "1"
            //desactive all
            for (const i of this.items) {
                i.desactive()
            }

            item.active()
            this.moveIndicator(item)

        } else if (this.prop.selection === SelectionType.MULTIPLE) {
            //toggle active
            if (item.prop.active) item.desactive()
            else item.active()
        }

        if (this.prop.onChange) this.prop.onChange(item)
    }

    getActives(): Array<Item["key"]> {
        return this.items.filter((i) => (i.prop.active === true)).map(i => (i.prop.key))
    }
}


class ItemAtom extends Atom<{
    prop: Item & {
        active: boolean
        selection: SelectionType
        onClick: (item: ItemAtom) => void
    }, sub: { input: HTMLElement }
}> {

    struct: () => string = () => (
        <li class={style.item}>
            <div class={style.input}>
                <div sub={this.sub.input} class={(this.prop.selection === SelectionType.OPTION) ? style.option : style.multiple}></div>
            </div>
            <div class={style.detail}>
                <label>{this.prop.title ?? this.prop.key}</label>
                <p>{this.prop.description}</p>
            </div>
        </li>
    )

    onRender(): void {
        this.getElement().onclick = (e) => {
            e.preventDefault()
            if (this.prop.onClick) this.prop.onClick(this)
        }
    }

    active() {
        if (this.prop.active === true) return
        this.prop.active = true
        this.getElement().classList.add(style.active)
    }
    desactive() {
        if (this.prop.active === false) return
        this.prop.active = false
        this.getElement().classList.remove(style.active)
    }
}