import { Atom } from "atomicreact-ts"
import { IInputProp, Input, InputError } from "./index.jsx"

interface IProp extends IInputProp {
    invalidError?: InputError
}

interface ISub {
    input: Input
}

export class InputEmail extends Atom<{ prop: IProp, sub: ISub }> {

    struct = () => (
        <div>
            <Input
                sub={this.sub.input}
                class={this.prop.class}
                label={this.prop.label}
                state={this.prop.state}
                type="email"
                mode="email"
                placeholder="name@domain.xyz"
                verify={(this.prop.invalidError == undefined) ? null : (value) => {

                    let error: InputError = null

                    if (!this.validadeEmail(value)) {
                        error = this.prop.invalidError
                    }

                    return error
                }}
            ></Input>
        </div>
    )

    validadeEmail(email: string) {
        return (/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/).test(email.toLocaleLowerCase())
    }

    get input() {
        return this.sub.input
    }
}