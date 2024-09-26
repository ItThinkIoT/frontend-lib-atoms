import { AtomicReact, Atom } from "atomicreact-ts"

interface ISub {
    widgetElement: HTMLDivElement
}

interface IProp {
    /* https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#configurations */
    id?: string,
    useByPassToken?: string
    siteKey: string,
    onToken: (token: string) => void
    autoRender?: boolean
    action?: string,
    theme?: "light" | "dark" | "auto",
    size?: "normal" | "flexible" | "compact"
}

export class TurnstileCaptcha extends Atom<{ sub: ISub, prop: IProp }> {

    public get GLOBAL_VAR() {
        return window["turnstile"]
    }

    public widgetID = null

    preRender = () => {
        if (this.prop.autoRender === undefined) this.prop.autoRender = true
        if (this.prop.action !== undefined) this.prop.action = this.prop.action.slice(0, 32)
        if (this.prop.theme === undefined) this.prop.theme = "auto"
        if (this.prop.size === undefined) this.prop.size = "normal"

        if(this.prop.id === undefined) this.prop.id = this.id

        if(!document.querySelector(`script[data-id="${this.prop.id}"]`)) {
            const globalCallbackName = `onloadTurnstile_${this.prop.id}_Callback`
            /* Load script element */
            const scriptElement = document.createElement("script")
            scriptElement.setAttribute("src", `https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${globalCallbackName}`)
            scriptElement.setAttribute("data-id", `${this.prop.id}`)
            document.head.appendChild(scriptElement)
    
            window[globalCallbackName] = this.onWidgetLoaded.bind(this)
        }
       
    }

    struct = () => (
        <div>
            <div sub={this.sub.widgetElement}></div>
        </div>
    )

    onRender(): void {
        // console.log('on render TurnstileCaptcha ')

        /* ByPass */
        if(this.prop.useByPassToken && this.prop.onToken) {
            setTimeout(()=>{
                this.prop.onToken(this.prop.useByPassToken)
            }, 2000)
        }
    }

    onWidgetLoaded() {
        if (this.prop.autoRender) this.renderWidget()
    }

    renderWidget() {
        if (this.widgetID) return
        this.widgetID = this.GLOBAL_VAR.render(this.sub.widgetElement, {
            sitekey: this.prop.siteKey,
            action: this.prop.action,
            theme: this.prop.theme,
            size: this.prop.size,
            callback: (token: string) => {
                if (this.prop.onToken) this.prop.onToken(token)
            }
        })

        // console.log("this.widgetID", this.widgetID)
    }

    resetWidget() {
        if (!this.widgetID) {
            this.renderWidget()
            return
        }
        this.GLOBAL_VAR.reset(this.widgetID)
    }

    removeWidget() {
        if (!this.widgetID) return
        this.GLOBAL_VAR.remove(this.widgetID)
        this.widgetID = null
    }

    get token() {
        if (!this.widgetID) {
            this.renderWidget()
            return null
        }

        if (this.GLOBAL_VAR.isExpired(this.widgetID)) {
            this.resetWidget()
            return null
        }
        
        return this.GLOBAL_VAR.getResponse(this.widgetID)
    }
}