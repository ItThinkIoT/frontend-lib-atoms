import { AtomicReact, Atom } from "atomicreact-ts"

/* Atoms */

import { demo, panel, widget } from "./demo.atom.css"
import { setGlobalCSSVar } from "./utils/css.js"
import { getTheme } from "./theme/index.js"

import { SimpleButton } from "buttons/simple.jsx"
import { LightButton } from "buttons/light.jsx"
import { ExtendedLight } from "background_lights/extended_light.jsx"
import { SpotLight } from "background_lights/spot_light.jsx"
import { QrCode } from "qrcode/index.jsx"
import { PriceSlider } from "slider/price.jsx"


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
            {/* <Panel title="Background Light">
                <Widget title="Ex">
                    <ExtendedLight blur={40}></ExtendedLight>
                </Widget>

                <Widget title="LightButton">
                    <SpotLight blur={40}></SpotLight>
                </Widget>
            </Panel> */}

            <Panel title="Buttons">
                <Widget title="SimpleButton">
                    <SimpleButton label={"Lorem ipsum"}></SimpleButton>
                </Widget>

                <Widget title="LightButton">
                    <LightButton label={"Lorem Ipsum"}></LightButton>
                </Widget>
            </Panel>

            <Panel title="QrCode">
                <Widget title="QrCode">
                    <QrCode
                        value="lorem ipsum"
                        bgColor={getTheme().BackgroundSecondary}
                        fgColor={getTheme().ActivePrimary}
                      
                        rotationAnimation={true}
                        floatAnimation={false}
                        rotationPeriod={20}
                        floatingZPeriod={3}
                        level="H"
                        padding={5}
                    >
                    </QrCode>
                </Widget>
            </Panel>

            <Panel title="Sliders">
                <Widget title="PriceSlider">
                <PriceSlider
                    sub={this.sub.priceSlider}
                    min={0}
                    max={100}
                    step={1}
                    pipHideFirstLast={true}
                    pipStep={10}
                    start={48.5}
                    prefix="R$"
                    pipPrefix={true}
                    sufix="BRL"
                    pipSufix={false}
                    mark=","
                    decimal={2}
                    pipDecimal={0}
                    priceAlign="center"
                    baseBarColor={getTheme().DarkPrimary}
                    activeBarColor={getTheme().ActivePrimary}
                ></PriceSlider>
                </Widget>
            </Panel>
        </div>
    );
}

AtomicReact.onLoad = () => {
    setGlobalCSSVar(getTheme(), "theme")
    AtomicReact.renderElement(new DemoLibrary(), document.getElementById("demo_library"))
}