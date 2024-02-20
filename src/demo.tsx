import { AtomicReact, Atom } from "atomicreact-ts"

/* Atoms */
import { DangerousHorseButton } from "./atoms/buttons/dangerous_horse.jsx";


import { demo, panel, widget } from "./demo.atom.css"
import { TinyChipmunkButton } from "./atoms/buttons/tiny_chipmunk.jsx";
export class Panel extends Atom<{ prop: { title: string } }> {

    struct = () => (<div class={panel}>
        <h3>{this.prop.title}</h3>
        <section nucleus ></section>
    </div>)
}

export class Widget extends Atom<{ prop: { title: string } }> {

    struct = () => (<div class={widget}>
        <h4>{this.prop.title}</h4>
        <section nucleus ></section>
    </div>)
}

export class DemoLibrary extends Atom {
    struct: () => string = () => (
        <div class={demo}>
            <Panel title="Buttons">
                <Widget title="Dangerous Horse">
                    <DangerousHorseButton
                        label={"Demo Button"}
                        onClick={() => {
                            console.log("Clicked on button")
                        }}
                    ></DangerousHorseButton>
                </Widget>
                <Widget title="Tiny Chipmunk">
                    <TinyChipmunkButton
                        label={"Demo Button"}
                        action={"My Action"}
                        // started={"Is Active"}
                        onClick={(btn) => {
                            btn.toogle()
                            console.log("Clicked on button Tiny Chipmunk. Is Started? ", btn.isStarted())
                        }}
                    ></TinyChipmunkButton>
                </Widget>
            </Panel>
        </div>
    );
}

AtomicReact.onLoad = () => {
    AtomicReact.renderElement(new DemoLibrary(), document.getElementById("demo_library"))
}