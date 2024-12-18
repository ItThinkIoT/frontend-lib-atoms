import { Atom } from "atomicreact-ts"

import { loader } from "./circle.atom.css"
export class CircleLoader extends Atom<{ prop: { size?: number, color?: string } }> {

    struct: () => string = () => (
        <div class={loader} style={`width: ${this.prop.size ?? 20}px; background: ${this.prop.color ?? "var(--ActivePrimary)"}`}></div>
    )

}