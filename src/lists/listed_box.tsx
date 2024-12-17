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
    items?: Array<Item>
}

export class BoxedList extends Atom<{ prop: IProp, sub: { indicator: HTMLDivElement } }> {

    items: Array<ItemAtom> = []

    preRender: () => void = () => {
        this.prop.selection ??= SelectionType.OPTION
        this.prop.items ??= []

        // this.items = this.prop.items.map(i => (<ItemAtom active={false} selection={this.prop.selection} {...i}
        //     onClick={(item) => {
        //         console.log(item, this.items)
        //         if (this.prop.selection === SelectionType.OPTION) {
        //             //desactive all 
        //             for (const i of this.items) {
        //                 if (!i.prop.active) continue
        //                 i.prop.active = false
        //                 i.sub.input.classList.remove(style.active)
        //             }
        //             item.prop.active = true
        //         } else if (this.prop.selection === SelectionType.MULTIPLE) {
        //             //toggle active
        //             item.prop.active = !item.prop.active
        //             return
        //         }

        //         if (item.prop.active) item.sub.input.classList.add(style.active)
        //         else item.sub.input.classList.remove(style.active)

        //     }}></ItemAtom>
        // ))
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
        for (let i = 0; i < 30; i++) {
            let delay = 0.004 * i;
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
            if(item.prop.active) return
            this.sub.indicator.style.opacity = "1"
            //desactive all
            for (const i of this.items) {
                i.desactive()
            }

            item.active()
            this.moveIndicator(item)

            return
        }

        if (this.prop.selection === SelectionType.MULTIPLE) {
            //toggle active
            if (item.prop.active) item.desactive()
            else item.active()

            return
        }

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
                <div sub={this.sub.input} class={style.option}></div>
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