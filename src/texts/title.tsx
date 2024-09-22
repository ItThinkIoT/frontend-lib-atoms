import { Atom } from "atomicreact-ts"

export class TitleText extends Atom {

    struct = () => (
        <h1 nucleus></h1>
    )

    set text(text: string) {
        this.nucleus.innerText = text
    }
}