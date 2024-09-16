import { Atom } from "atomicreact-ts"
import { IInputProp, Input, InputError } from "./index.jsx"

interface IProp extends IInputProp {
    invalidError?: InputError
}

interface ISub {
    input: Input
}

export class InputCPF extends Atom<{ prop: IProp, sub: ISub }> {

    struct = () => (
        <div>
            <Input
                sub={this.sub.input}
                label={this.prop.label}
                state={this.prop.state}
                type="text"
                mode="numeric"
                placeholder="000.000.000-00"
                verify={(this.prop.invalidError == undefined) ? null : (value) => {

                    let error: InputError = null

                    if (!this.validateCPF(value)) {
                        error = this.prop.invalidError
                    }

                    if(!error) { 
                        const cpfWithoutMask = value.replace(/[^\d]+/g, '')
                        const cpfWithMask =`${cpfWithoutMask.slice(0,3)}.${cpfWithoutMask.slice(3,6)}.${cpfWithoutMask.slice(6,9)}-${cpfWithoutMask.slice(9)}`
                        if(value !== cpfWithMask) {
                            this.sub.input.value = cpfWithMask
                        } 
                    }

                    return error
                }}
            ></Input>
        </div>
    )

    validateCPF(cpf: string) {
        cpf = cpf.replace(/[^\d]+/g, '')
        if (cpf == '') return false

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false

        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i)
        let rev = 11 - (add % 11)
        if (rev == 10 || rev == 11)
            rev = 0
        if (rev != parseInt(cpf.charAt(9)))
            return false

        add = 0
        for (let i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i)
        rev = 11 - (add % 11)
        if (rev == 10 || rev == 11)
            rev = 0
        if (rev != parseInt(cpf.charAt(10)))
            return false
        return true
    }

    get input() {
        return this.sub.input
    }
}