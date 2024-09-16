import { Atom } from "atomicreact-ts"

interface IProp {
    child: Atom,
    key?: string | number
}

export class Page extends Atom<{ prop: IProp }> {

    struct = () => (
        <div nucleus></div>
    )

    onRender(): void {
        if (this.prop.child) this.add(this.prop.child)
    }
}