import { Atom } from "atomicreact-ts";
import { SimpleButton, IProp } from "./simple.jsx";

import { button } from "./light.atom.css"

export class LightButton extends Atom<{ prop: IProp<LightButton>, sub: { baseButton: SimpleButton } }> {

    struct = () => (
        <div>
            <SimpleButton sub={this.sub.baseButton} class={[button, ...this.prop.class??[]]}
                label={this.prop.label}
                nucleus={this.prop.nucleus}
                onClick={(this.prop.onClick) ? () => { this.prop.onClick(this) } : undefined}
                state={this.prop.state}
                active={this.prop.active}
                nucleusAlign={this.prop.nucleusAlign}
            >
            </SimpleButton>
        </div>
    )

    onRender(): void {
    }

    set onClick(callback: IProp<LightButton>["onClick"]) {
        this.sub.baseButton.prop.onClick = () => {
            callback(this)
        }
    }
}