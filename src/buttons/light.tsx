import { Atom } from "atomicreact-ts";
import { SimpleButton, IProp } from "./simple.jsx";

import { button } from "./light.atom.css"

export class LightButton extends Atom<{ prop: IProp<LightButton>, sub: {baseButton: SimpleButton} }> {
    
    struct = () => (
        <div>
            <SimpleButton sub={this.sub.baseButton} style={button}
                label={this.prop.label}
                nucleus={this.prop.nucleus}
                onClick={(this.prop.onClick) ? ()=>{this.prop.onClick(this)} : undefined}
                state={this.prop.state}
            >
            </SimpleButton>
        </div>
    )
}