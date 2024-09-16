function t(t,e,i=this,n,c={}){null==this[t]&&Object.defineProperty(i,t,{value:e,...c}),n&&n()}t("ATOMIC_REACT","atomicreact"),t("ATOMIC_REACT_ALIAS",[ATOMIC_REACT,"atomicreact-ts"]),t("DEFINES","defines"),t("BASE_ATOMS","baseAtoms"),t("ATOMS","atoms"),t("MODULES","modules"),t("LIB","lib"),t("LOAD","load"),t(ATOMIC_REACT,{}),t(DEFINES,{},this[ATOMIC_REACT]),t(BASE_ATOMS,"the_pkg_here",this[ATOMIC_REACT],null,{writable:!0}),t(ATOMS,{},this[ATOMIC_REACT]),t(LOAD,(()=>{window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED,(function(t){window.addEventListener("load",(function(t){this[ATOMIC_REACT][LIB].AtomicReact.load()}))})),0==Object.keys(this[ATOMIC_REACT][DEFINES]).length&&window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED))}),this[ATOMIC_REACT]),t("gotoEndOfPath",(function(t,e,i,n=""){return null==t[e]&&Object.defineProperty(t,e,{value:{},configurable:!0}),1==i.length?{context:t[e],path:i[0],contextPath:n}:(t=t[e],e=i[0],i.shift(),n+=`${""==n?"":"/"}${e}`,gotoEndOfPath(t,e,i,n))})),t("getValueOfPath",(function t(e,i){if(1==i.length)return e[i[0]]||null;const n=i[0];return null==e[n]?null:(i.shift(),t(e[n],i))})),t("normalizeModuleName",(function(t){return t.replaceAll("../","").replaceAll("./","").replaceAll(".tsx","").replaceAll(".jsx","").replaceAll(".ts","").replaceAll(".js","").replaceAll(".mjs","")})),t("isLocalModule",(function(t){return 0==t.indexOf("./")&&-1==t.indexOf("../")})),t("sumPath",(function(t,e){let i=t.split("/");const n=e.split("../").length-1;return i.length<=n?normalizeModuleName(e):(i.splice(i.length-n),normalizeModuleName(`${i.join("/")}${""==t?"":"/"}${e}`))})),t("require",(function(t,e=""){const i=t.split("/");if(ATOMIC_REACT_ALIAS.includes(i[0]))return 1==i.length?this[ATOMIC_REACT][LIB]||this[ATOMIC_REACT]:getValueOfPath(this,i);let n="";return t.startsWith(".")?n=sumPath(e,t):(n=sumPath(ATOMS,`${this[ATOMIC_REACT][BASE_ATOMS]}/${t}`),getValueOfPath(this[ATOMIC_REACT],n.split("/"))||(n=sumPath(ATOMS,t))),new Proxy({path:n},{get:(t,e)=>getValueOfPath(window[ATOMIC_REACT],t.path.split("/"))[e]})})),t("define",(function(e,i,n){let c={__esModule:!0};if(ATOMIC_REACT_ALIAS.includes(e)&&!ATOMIC_REACT[e])return n(require,c,...i.slice(2).map((t=>require(t)))),t("lib",c,this[ATOMIC_REACT]),t("AtomicReact",this[ATOMIC_REACT].lib.AtomicReact),t("global",this[ATOMIC_REACT],AtomicReact),void t("JSX",this[ATOMIC_REACT].lib.JSX);const r=e.split("/"),o=gotoEndOfPath(this,ATOMIC_REACT,r);let a=o.context,l=o.path,s=o.contextPath;const u=[require,c,...i.slice(2).map((t=>require(t,s)))];let A=!1;for(let t=0;t<u.length;t++){if(null!==u[t])continue;A=!0;let c=sumPath(s,i[t]);null==this[ATOMIC_REACT][DEFINES][c]&&Object.defineProperty(this[ATOMIC_REACT][DEFINES],c,{value:{},configurable:!0}),Object.defineProperty(this[ATOMIC_REACT][DEFINES][c],e,{value:()=>{define(e,i,n,!0)},configurable:!0})}if(!A){try{n(...u)}catch(t){return}if(Object.defineProperty(a,l,{value:c,configurable:!0}),Object.getOwnPropertyNames(c).forEach((t=>{[this[ATOMIC_REACT][LIB].Atom.name].includes(Object.getPrototypeOf(c[t]).name)&&Object.defineProperty(c[t].prototype,"__factory",{value:`${e}`,configurable:!0})})),null!=this[ATOMIC_REACT][DEFINES][e]){let t=Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][e]);for(let i=0;i<t.length;i++){let n=t[i];this[ATOMIC_REACT][DEFINES][e][n]()}delete this[ATOMIC_REACT][DEFINES][e]}}}),this),t("dA",(function(t,e,i){return define(`${ATOMS}/${t}`,e,i)})),t("dM",(function(t,e,i){return define(`${MODULES}/${t}`,e,i)})),t("dS",(function(t,e,i){dA(t,["require","exports",ATOMIC_REACT],(function(t,n,c){Object.defineProperties(n,{__esModule:{value:!0},default:{value:{}}}),i.forEach((t=>{n.default[t]=`${e}_${t}`,Object.defineProperty(n,t,{get:function(){return n.default[t]}})}))}))})),define("atomicreact",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JSX=e.Atom=e.AtomicReact=e.EAtomicEvent=void 0,(e.EAtomicEvent||(e.EAtomicEvent={})).LOADED="<ATOMIC.LOADED>";class AtomicReact{static hotReload;static onLoads=[];static set onLoad(t){AtomicReact.onLoads.push(t)}static load(){for(let t=0;t<AtomicReact.onLoads.length;t++)try{AtomicReact.onLoads[t]()}catch(t){}}static ClientVariables={Id:"a-i",Nucleus:"a-n",Sub:"a-s",SubOf:"a-sof"};static AtomicVariables={Nucleus:"nucleus",Sub:"sub"};static AtomicEvents={LOADED:e.EAtomicEvent.LOADED};static global;static env={};static setEnv(t){this.env="string"==typeof t?JSON.parse(t):t}static makeID(t=6){let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(65+Math.floor(25*Math.random()));return AtomicReact.getElement(e)?AtomicReact.makeID(t):e}static render(t,i={[AtomicReact.ClientVariables.Id]:t.id}){if(t.preRender)try{t.preRender()}catch(t){console.error(t)}if(!t.struct)return"";const n=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom={atom:t};let c=t.struct(),r="";Object.getOwnPropertyNames(i).forEach((t=>{r+=` ${t}="${i[t]}"`}));const o=c.trim();if(o.startsWith("<")&&o.endsWith(">")){const t="/"==o.charAt(o.length-2)?o.length-2:o.indexOf(">");c=`${o.slice(0,t)}${r}${o.slice(t,o.length)}`}return e.JSX["jsx-runtime"].atom=Object.assign({},n),c}static renderElement(t,i,n,c){if(n)if("replace"===n){if(!i.parentNode)throw new Error("Can't replace element. Element don't have parent node");i.innerHTML="";const e=document.createElement("div");e.innerHTML=AtomicReact.render(t,c),i.parentElement.replaceChild(e.firstChild,i)}else i.insertAdjacentHTML(n,AtomicReact.render(t,c));else i.innerHTML=AtomicReact.render(t,c);const r=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t.id}"]`);if(r.Atomic={atom:t},function t(){if(0===e.JSX["jsx-runtime"].queue.length)return;const i=e.JSX["jsx-runtime"].queue[e.JSX["jsx-runtime"].queue.length-1];let n=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${i.atom.id}"]`);if(n){if(n.Atomic={atom:i.atom},e.JSX["jsx-runtime"].queue.pop(),n.Atomic.atom.onRender)try{n.Atomic.atom.onRender()}catch(t){console.error(t)}t()}}(),r.Atomic.atom.onRender)try{r.Atomic.atom.onRender()}catch(t){console.error(t)}return r}static getSub(t,e){return document.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${t.id}"][${AtomicReact.ClientVariables.Sub}="${e}"]`)}static getAtomicSub(t,e){return AtomicReact.getAtom(AtomicReact.getSub(t,e))}static getNucleus(t){return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${t.id}"]`)}static getElement(t){return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t}"]`)}static getAtom(t){return t&&t.Atomic&&t.Atomic.atom?t.Atomic.atom:null}static add(t,e,i){i=i||"beforeend",AtomicReact.renderElement(e,t.nucleus,i),t.onAdded&&t.onAdded(e)}}e.AtomicReact=AtomicReact;class Atom{prop;id;struct=null;preRender;sub;constructor(t,e){this.prop=t,this.id=e,this.prop||(this.prop={}),this.id||(this.id=AtomicReact.makeID()),this.prop.children&&delete this.prop.children,this.sub=new Proxy({},{get:(t,e)=>AtomicReact.getAtomicSub(this,e)||AtomicReact.getSub(this,e)||e})}getElement(){return AtomicReact.getElement(this.id)}add(t,e){AtomicReact.add(this,t,e)}get nucleus(){return AtomicReact.getNucleus(this)}onRender(){}onAdded(t){}}e.Atom=Atom,e.JSX={"jsx-runtime":{atom:null,queue:[],jsxs(t,i){i=i||{};let n=null;if("function"==typeof t){if(n={atom:null},Object.getPrototypeOf(t).name&&Object.getPrototypeOf(t).name===Atom.name){let c=new t(Object.assign({},i));if(e.JSX["jsx-runtime"].queue.unshift({atom:c}),n.atom=c,c.preRender)try{c.preRender()}catch(t){console.error(t)}t=c.struct?c.struct:()=>""}let c=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom=Object.assign({},n),t=t.call(this),e.JSX["jsx-runtime"].atom=Object.assign({},c)}void 0===i.children&&(i.children=[]),"string"==typeof i.children&&(i.children=[i.children]);let c=Object.keys(i).map((t=>{if("children"===t)return null;if(t===AtomicReact.AtomicVariables.Nucleus)return`${AtomicReact.ClientVariables.Nucleus}="${e.JSX["jsx-runtime"].atom.atom.id}"`;const c=i[t];return t===AtomicReact.AtomicVariables.Sub?`${AtomicReact.ClientVariables.SubOf}="${e.JSX["jsx-runtime"].atom.atom.id}" ${AtomicReact.ClientVariables.Sub}="${c}"`:n||void 0===c?null:`${t}="${Array.isArray(c)?c.join(" "):c}"`})).filter((t=>null!=t));if(n&&(c.push(`${AtomicReact.ClientVariables.Id}="${n.atom.id}"`),i.children&&i.children.length>0)){Object.defineProperty(n.atom,"__nucleus_children",{value:i.children.join("")});let e=new RegExp("<(.)*"+AtomicReact.ClientVariables.Nucleus+"[^>]*","gi"),c=-1;for(;e.exec(t);)c=e.lastIndex+1;-1!=c&&(t=`${t.slice(0,c)}${i.children.join("")}${t.slice(c,t.length)}`)}const r=c.join(" "),o=t.trim();if(o.startsWith("<")&&o.endsWith(">")){const e="/"==o.charAt(o.length-2)?o.length-2:o.indexOf(">");t=`${o.slice(0,e)} ${r}${o.slice(e,o.length)}`}else t=`<${t} ${r}> ${i.children.join?i.children.join(""):i.children}</${t}>`;return t},jsx:(t,i)=>e.JSX["jsx-runtime"].jsxs(t,i)}}}));dM("HotReload/lib", ["require", "exports", "../../lib.js"], function (require, exports, lib_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = exports.CommandType = exports.__config = void 0;
    exports.__config = {
        host: "127.0.0.1",
        port: 1337,
        verbose: false
    };
    (function (CommandType) {
        CommandType[CommandType["STYLE"] = 0] = "STYLE";
        CommandType[CommandType["SCRIPT"] = 1] = "SCRIPT";
        CommandType[CommandType["EVAL"] = 2] = "EVAL";
        CommandType[CommandType["REFRESH_BUNDLE"] = 3] = "REFRESH_BUNDLE";
    })(exports.CommandType || (exports.CommandType = {}));
    class Client {
        static client;
        static connect(host = exports.__config.host, port = exports.__config.port) {
            const wsServerURL = `${(location.protocol === "https:") ? "wss" : "ws"}://${host}:${port}`;
            if (!this.client || this.client.readyState !== WebSocket.OPEN) {
                this.client = new WebSocket(wsServerURL);
            }
            else if (this.client.url.indexOf(wsServerURL) === -1) {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client will change connection to ${wsServerURL}`);
                this.client.close(4000, `Closed. Connection changed to ${wsServerURL}`);
                return this.connect(host, port);
            }
            else {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client already connected on ${wsServerURL}`);
            }
            this.client.onopen = (e) => {
                if (exports.__config.verbose)
                    console.log(`[LiveReload] Client connected on ${wsServerURL}`);
            };
            this.client.onmessage = (e) => {
                try {
                    const msgData = JSON.parse(e.data);
                    if (exports.__config.verbose)
                        console.log("[LiveReload] on message:", msgData);
                    switch (msgData.command.type) {
                        case exports.CommandType.STYLE:
                            this.redefineCSS(msgData.uid, msgData.command.content);
                            break;
                        case exports.CommandType.SCRIPT:
                            this.redefineScript(msgData.command.content);
                            break;
                        case exports.CommandType.EVAL:
                            eval(msgData.command.content.js);
                            break;
                        case exports.CommandType.REFRESH_BUNDLE:
                            this.refreshBundle(msgData.command.content);
                            break;
                        default:
                            break;
                    }
                }
                catch (e) {
                    console.error(`[LiveReload] Client onmessage error`, e);
                }
            };
        }
        static redefineScript({ js, moduleName }) {
            eval(js);
            const context = getValueOfPath(lib_js_1.AtomicReact.global, moduleName.split("/"));
            document.querySelectorAll(`[a-i]`).forEach((atomEl) => {
                if (!atomEl || !atomEl.Atomic || !atomEl.Atomic.atom || !atomEl.Atomic.atom.getElement())
                    return;
                const oldAtom = atomEl.Atomic.atom;
                const factory = Object.getPrototypeOf(oldAtom).__factory;
                if (factory !== moduleName)
                    return;
                const atomKey = oldAtom.constructor.name;
                if (context[atomKey] === undefined)
                    return;
                const newAtom = new context[atomKey](oldAtom.prop, oldAtom.id);
                if (oldAtom.__nucleus_children)
                    Object.defineProperty(newAtom, "__nucleus_children", { value: oldAtom.__nucleus_children });
                let attrs = {};
                Object.values(lib_js_1.AtomicReact.ClientVariables).forEach((attrName) => {
                    const attrValue = oldAtom.getElement().attributes.getNamedItem(attrName);
                    if (attrValue) {
                        attrs[attrName] = attrValue.value;
                    }
                });
                lib_js_1.AtomicReact.renderElement(newAtom, oldAtom.getElement(), "replace", attrs);
                if (oldAtom.__nucleus_children)
                    newAtom.nucleus.innerHTML = newAtom.__nucleus_children;
            });
        }
        static redefineCSS(uid, { css, js }) {
            let style = document.querySelector(`style[for="${uid}"]`);
            if (!style) {
                style = document.createElement("style");
                style.setAttribute("for", uid);
                document.head.appendChild(style);
            }
            style.innerHTML = css;
            if (js) {
                eval(js);
            }
        }
        static refreshBundle({ version }) {
            function addRandomParam(url) {
                const _url = (new URL(url));
                _url.searchParams.append("atomic_react", version);
                return _url.toString();
            }
            document.head.querySelectorAll("link").forEach(linkElement => {
                linkElement.href = addRandomParam(linkElement.href);
            });
            document.head.querySelectorAll("script").forEach(linkElement => {
                linkElement.src = addRandomParam(linkElement.src);
            });
        }
    }
    exports.Client = Client;
    lib_js_1.AtomicReact.onLoad = () => {
        Client.connect();
    };
    exports.__config = Object.assign((exports.__config) ? exports.__config : {}, { "host": "127.0.0.1", "port": 1718, "verbose": true });
});
atomicreact.baseAtoms="@itthink/frontend-lib-atoms";dS("@itthink/frontend-lib-atoms/demo.atom.css","a730fc3e",["demo","panel","widget"]);dA("@itthink/frontend-lib-atoms/utils/css", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGlobalCSSVar = getGlobalCSSVar;
    exports.setGlobalCSSVar = setGlobalCSSVar;
    function getGlobalCSSVar(key) {
        return getComputedStyle(document.body).getPropertyValue(`--${key}`);
    }
    function setGlobalCSSVar(keyValuePair, reason) {
        let styleTag = document.querySelector(`style[for="${reason}"]`) || document.createElement("style");
        styleTag.setAttribute("for", reason);
        let rootVars = '';
        for (const key of Object.keys(keyValuePair)) {
            rootVars += `--${key}: ${keyValuePair[key]};`;
        }
        styleTag.innerHTML = `:root {${rootVars}}`;
        document.getElementsByTagName('head')[0].appendChild(styleTag);
    }
});
dA("@itthink/frontend-lib-atoms/utils/theme", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightTheme = exports.DarkTheme = void 0;
    exports.getTheme = getTheme;
    function getTheme() {
        return exports.DarkTheme;
    }
    exports.DarkTheme = {
        DarkPrimary: "#4B2A7B",
        ActivePrimary: "#A855F7",
        ActiveSecondary: "#9333EA",
        Off: "#D5BAE5",
        OffDisabled: "#d5bae54d",
        BackgroundPrimary: "#0F172A",
        BackgroundSecondary: "#1E293B",
        LabelPrimary: "#FFFFFF",
        LabelSecondary: "#CBD5FF",
        LabelTertiary: "#9198b6",
        ShadowPrimary: "#a955f799",
        SuccessPrimary: "#60E47D",
        SuccessDark: "#397D48",
        ErrorPrimary: "#C68F8F",
        ErrorDark: "#C75D5D",
        Highlight: "#4BB8A9"
    };
    exports.LightTheme = {
        DarkPrimary: "#9956fe",
        ActivePrimary: "#A855F7",
        ActiveSecondary: "#9333EA",
        Off: "#D5BAE5",
        OffDisabled: "#d5bae54d",
        BackgroundPrimary: "#a3bfff",
        BackgroundSecondary: "#a6c5f7",
        LabelPrimary: "#FFFFFF",
        LabelSecondary: "#767b93",
        LabelTertiary: "#bac2e8",
        ShadowPrimary: "#bc7bfa99",
        SuccessPrimary: "#60E47D",
        SuccessDark: "#397D48",
        ErrorPrimary: "#C68F8F",
        ErrorDark: "#C75D5D",
        Highlight: "#0c9986"
    };
});
dS("@itthink/frontend-lib-atoms/buttons/simple.atom.css","aa4a5ad4",["button","s_error","s_success","s_disabled","children","active"]);dA("@itthink/frontend-lib-atoms/buttons/simple", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./simple.atom.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, simple_atom_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleButton = exports.SimpleButtonState = void 0;
    var SimpleButtonState;
    (function (SimpleButtonState) {
        SimpleButtonState[SimpleButtonState["DEFAULT"] = 0] = "DEFAULT";
        SimpleButtonState[SimpleButtonState["ERROR"] = 1] = "ERROR";
        SimpleButtonState[SimpleButtonState["SUCCESS"] = 2] = "SUCCESS";
        SimpleButtonState[SimpleButtonState["DISABLED"] = 3] = "DISABLED";
    })(SimpleButtonState || (exports.SimpleButtonState = SimpleButtonState = {}));
    class SimpleButton extends atomicreact_ts_1.Atom {
        states = [simple_atom_css_1.s_error, simple_atom_css_1.s_success, simple_atom_css_1.s_disabled];
        preRender = () => {
            if (this.prop.state === undefined)
                this.prop.state = SimpleButtonState.DEFAULT;
            if (this.prop.style === undefined)
                this.prop.style = "";
            if (this.prop.active === undefined)
                this.prop.active = false;
        };
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: [simple_atom_css_1.button, this.prop.style], children: [(0, jsx_runtime_1.jsx)("button", { sub: this.sub.button, children: this.prop.label }), (0, jsx_runtime_1.jsx)("div", { nucleus: true, class: simple_atom_css_1.children })] }));
        onRender() {
            this.setState(this.prop.state);
            this.toggleActive(this.prop.active);
            this.getElement().onclick = (mouseEvent) => {
                mouseEvent.preventDefault();
                if (this.prop.onClick)
                    this.prop.onClick(this);
            };
            this.fixStyle();
        }
        fixStyle() {
            const borderRadius = Number(getComputedStyle(this.getElement()).getPropertyValue("--RadiusSize").replace("px", ""));
            this.sub.button.style.paddingRight = `${this.nucleus.clientWidth + borderRadius}px`;
            if (this.nucleus.children.length === 0)
                return;
            const maxNucleusChildHeight = Array.prototype.reduce.call(this.nucleus.children, (prev, current) => ((current.clientHeight > prev.clientHeight) ? current : prev)).clientHeight;
            this.sub.button.style.minHeight = `${Math.max(this.sub.button.clientHeight, maxNucleusChildHeight + 10)}px`;
        }
        setState(state) {
            const _this = this.getElement();
            this.states.forEach(s => _this.classList.remove(s));
            const disableAttr = "disabled";
            if (state === SimpleButtonState.DISABLED)
                this.sub.button.setAttribute(disableAttr, disableAttr);
            else
                this.sub.button.removeAttribute(disableAttr);
            switch (state) {
                case SimpleButtonState.ERROR:
                    _this.classList.add(simple_atom_css_1.s_error);
                    break;
                case SimpleButtonState.SUCCESS:
                    _this.classList.add(simple_atom_css_1.s_success);
                    break;
                case SimpleButtonState.DISABLED:
                    _this.classList.add(simple_atom_css_1.s_disabled);
                    break;
            }
            this.prop.state = state;
        }
        toggleActive(toActive) {
            if (toActive === undefined) {
                toActive = !this.getElement().classList.contains(simple_atom_css_1.active);
            }
            if (toActive)
                this.getElement().classList.add(simple_atom_css_1.active);
            else
                this.getElement().classList.remove(simple_atom_css_1.active);
            this.prop.active = toActive;
            return toActive;
        }
    }
    exports.SimpleButton = SimpleButton;
});
dS("@itthink/frontend-lib-atoms/buttons/light.atom.css","a7a36fab",["button"]);dA("@itthink/frontend-lib-atoms/buttons/light", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./simple.jsx", "./light.atom.css"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, simple_jsx_1, light_atom_css_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LightButton = void 0;
    class LightButton extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(simple_jsx_1.SimpleButton, { sub: this.sub.baseButton, style: light_atom_css_1.button, label: this.prop.label, nucleus: this.prop.nucleus, onClick: (this.prop.onClick) ? () => { this.prop.onClick(this); } : undefined, state: this.prop.state }) }));
    }
    exports.LightButton = LightButton;
});
dA("@itthink/frontend-lib-atoms/background_lights/extended_light", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts"], function (require, exports, jsx_runtime_1, atomicreact_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExtendedLight = void 0;
    class ExtendedLight extends atomicreact_ts_1.Atom {
        preRender = () => {
            if (!this.prop.class)
                this.prop.class = "";
            if (this.prop.dx == undefined)
                this.prop.dx = 0;
            if (this.prop.dy == undefined)
                this.prop.dy = 0;
            if (this.prop.blur == undefined)
                this.prop.blur = 50;
        };
        struct = () => ((0, jsx_runtime_1.jsxs)("svg", { class: this.prop.class, width: "900", height: "322", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", { x1: "98.284%", y1: "37.276%", x2: "9.488%", y2: "37.276%", id: `${this.id}_a`, children: [(0, jsx_runtime_1.jsx)("stop", { "stop-color": "#6366F1", offset: "0%" }), (0, jsx_runtime_1.jsx)("stop", { "stop-color": "#6366F1", "stop-opacity": "0", offset: "100%" })] }), (0, jsx_runtime_1.jsxs)("linearGradient", { x1: "100%", y1: "37.276%", x2: "9.488%", y2: "37.276%", id: `${this.id}_c`, children: [(0, jsx_runtime_1.jsx)("stop", { "stop-color": "#6EE7B7", offset: "0%" }), (0, jsx_runtime_1.jsx)("stop", { "stop-color": "#6EE7B7", "stop-opacity": "0", offset: "100%" })] }), (0, jsx_runtime_1.jsx)("filter", { x: "-17.6%", y: "-34.2%", width: "135.1%", height: "168.4%", filterUnits: "objectBoundingBox", id: `${this.id}_b`, children: (0, jsx_runtime_1.jsx)("feGaussianBlur", { stdDeviation: this.prop.blur, in: "SourceGraphic" }) }), (0, jsx_runtime_1.jsx)("filter", { x: "-23.6%", y: "-187.5%", width: "147.2%", height: "475%", filterUnits: "objectBoundingBox", id: `${this.id}_d`, children: (0, jsx_runtime_1.jsx)("feGaussianBlur", { stdDeviation: this.prop.blur, in: "SourceGraphic" }) })] }), (0, jsx_runtime_1.jsxs)("g", { fill: "none", "fill-rule": "evenodd", transform: `translate(${this.prop.dx - 300}, ${this.prop.dy})`, children: [(0, jsx_runtime_1.jsx)("path", { fill: `url(#${this.id}_a)`, filter: `url(#${this.id}_b)`, d: "M262.114 307.493 253 438.5l844.888-307.493L1107 0z", transform: "translate(-.085 -152)" }), (0, jsx_runtime_1.jsx)("path", { fill: `url(#${this.id}_c)`, filter: `url(#${this.id}_d)`, transform: "rotate(-20 156.955 105.525)", d: "m306.098 141.285-35.583 80h599.417l35.583-80z" })] })] }));
    }
    exports.ExtendedLight = ExtendedLight;
});
dA("@itthink/frontend-lib-atoms/background_lights/spot_light", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts"], function (require, exports, jsx_runtime_1, atomicreact_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SpotLight = void 0;
    class SpotLight extends atomicreact_ts_1.Atom {
        preRender = () => {
            if (!this.prop.class)
                this.prop.class = "";
            if (this.prop.dx == undefined)
                this.prop.dx = 0;
            if (this.prop.dy == undefined)
                this.prop.dy = 0;
            if (this.prop.blur == undefined)
                this.prop.blur = 50;
        };
        struct = () => ((0, jsx_runtime_1.jsxs)("svg", { style: `filter: blur(${this.prop.blur}px);`, class: this.prop.class, width: "700", height: "450", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", { id: `${this.id}_a`, x1: "19.609%", x2: "50%", y1: "14.544%", y2: "100%", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", "stop-color": "#6366F1" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", "stop-color": "#6366F1", "stop-opacity": "0" })] }), (0, jsx_runtime_1.jsxs)("linearGradient", { id: `${this.id}_b`, x1: "50%", x2: "19.609%", y1: "100%", y2: "14.544%", children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0%", "stop-color": "#A855F7" }), (0, jsx_runtime_1.jsx)("stop", { offset: "100%", "stop-color": "#6366F1", "stop-opacity": "0" })] })] }), (0, jsx_runtime_1.jsxs)("g", { fill: "none", children: [(0, jsx_runtime_1.jsx)("path", { fill: `url(#${this.id}_a)`, d: `m${214 + this.prop.dx} ${23 + this.prop.dy} 461 369-284 58z` }), (0, jsx_runtime_1.jsx)("path", { fill: `url(#${this.id}_b)`, d: `m${this.prop.dx} ${this.prop.dy} 461 369-284 58z` })] })] }));
    }
    exports.SpotLight = SpotLight;
});
dS("@itthink/frontend-lib-atoms/qrcode/qrcode.atom.css","a1294d3f",["square"]);dS("@itthink/frontend-lib-atoms/utils/animations.atom.css","a7989e24",["floatingZ","gradientBorder","withRotation"]);dA("@akamfoad/qr", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.qrcode = exports.QRCode = exports.ErrorCorrectLevel = void 0;
    var mode_default = {
        MODE_NUMBER: 1 << 0,
        MODE_ALPHA_NUM: 1 << 1,
        MODE_8BIT_BYTE: 1 << 2,
        MODE_KANJI: 1 << 3
    };
    var QR8bitByte = class {
        mode;
        data;
        constructor(data) {
            this.mode = mode_default.MODE_8BIT_BYTE;
            this.data = data;
        }
        getLength() {
            return this.data.length;
        }
        write(buffer) {
            for (let i = 0; i < this.data.length; i++) {
                buffer.put(this.data.charCodeAt(i), 8);
            }
        }
    };
    var ErrorCorrectLevel = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    };
    exports.ErrorCorrectLevel = ErrorCorrectLevel;
    var QRRSBlock = class _QRRSBlock {
        totalCount;
        dataCount;
        constructor(totalCount, dataCount) {
            this.totalCount = totalCount;
            this.dataCount = dataCount;
        }
        static RS_BLOCK_TABLE = [
            [1, 26, 19],
            [1, 26, 16],
            [1, 26, 13],
            [1, 26, 9],
            [1, 44, 34],
            [1, 44, 28],
            [1, 44, 22],
            [1, 44, 16],
            [1, 70, 55],
            [1, 70, 44],
            [2, 35, 17],
            [2, 35, 13],
            [1, 100, 80],
            [2, 50, 32],
            [2, 50, 24],
            [4, 25, 9],
            [1, 134, 108],
            [2, 67, 43],
            [2, 33, 15, 2, 34, 16],
            [2, 33, 11, 2, 34, 12],
            [2, 86, 68],
            [4, 43, 27],
            [4, 43, 19],
            [4, 43, 15],
            [2, 98, 78],
            [4, 49, 31],
            [2, 32, 14, 4, 33, 15],
            [4, 39, 13, 1, 40, 14],
            [2, 121, 97],
            [2, 60, 38, 2, 61, 39],
            [4, 40, 18, 2, 41, 19],
            [4, 40, 14, 2, 41, 15],
            [2, 146, 116],
            [3, 58, 36, 2, 59, 37],
            [4, 36, 16, 4, 37, 17],
            [4, 36, 12, 4, 37, 13],
            [2, 86, 68, 2, 87, 69],
            [4, 69, 43, 1, 70, 44],
            [6, 43, 19, 2, 44, 20],
            [6, 43, 15, 2, 44, 16],
            [4, 101, 81],
            [1, 80, 50, 4, 81, 51],
            [4, 50, 22, 4, 51, 23],
            [3, 36, 12, 8, 37, 13],
            [2, 116, 92, 2, 117, 93],
            [6, 58, 36, 2, 59, 37],
            [4, 46, 20, 6, 47, 21],
            [7, 42, 14, 4, 43, 15],
            [4, 133, 107],
            [8, 59, 37, 1, 60, 38],
            [8, 44, 20, 4, 45, 21],
            [12, 33, 11, 4, 34, 12],
            [3, 145, 115, 1, 146, 116],
            [4, 64, 40, 5, 65, 41],
            [11, 36, 16, 5, 37, 17],
            [11, 36, 12, 5, 37, 13],
            [5, 109, 87, 1, 110, 88],
            [5, 65, 41, 5, 66, 42],
            [5, 54, 24, 7, 55, 25],
            [11, 36, 12],
            [5, 122, 98, 1, 123, 99],
            [7, 73, 45, 3, 74, 46],
            [15, 43, 19, 2, 44, 20],
            [3, 45, 15, 13, 46, 16],
            [1, 135, 107, 5, 136, 108],
            [10, 74, 46, 1, 75, 47],
            [1, 50, 22, 15, 51, 23],
            [2, 42, 14, 17, 43, 15],
            [5, 150, 120, 1, 151, 121],
            [9, 69, 43, 4, 70, 44],
            [17, 50, 22, 1, 51, 23],
            [2, 42, 14, 19, 43, 15],
            [3, 141, 113, 4, 142, 114],
            [3, 70, 44, 11, 71, 45],
            [17, 47, 21, 4, 48, 22],
            [9, 39, 13, 16, 40, 14],
            [3, 135, 107, 5, 136, 108],
            [3, 67, 41, 13, 68, 42],
            [15, 54, 24, 5, 55, 25],
            [15, 43, 15, 10, 44, 16],
            [4, 144, 116, 4, 145, 117],
            [17, 68, 42],
            [17, 50, 22, 6, 51, 23],
            [19, 46, 16, 6, 47, 17],
            [2, 139, 111, 7, 140, 112],
            [17, 74, 46],
            [7, 54, 24, 16, 55, 25],
            [34, 37, 13],
            [4, 151, 121, 5, 152, 122],
            [4, 75, 47, 14, 76, 48],
            [11, 54, 24, 14, 55, 25],
            [16, 45, 15, 14, 46, 16],
            [6, 147, 117, 4, 148, 118],
            [6, 73, 45, 14, 74, 46],
            [11, 54, 24, 16, 55, 25],
            [30, 46, 16, 2, 47, 17],
            [8, 132, 106, 4, 133, 107],
            [8, 75, 47, 13, 76, 48],
            [7, 54, 24, 22, 55, 25],
            [22, 45, 15, 13, 46, 16],
            [10, 142, 114, 2, 143, 115],
            [19, 74, 46, 4, 75, 47],
            [28, 50, 22, 6, 51, 23],
            [33, 46, 16, 4, 47, 17],
            [8, 152, 122, 4, 153, 123],
            [22, 73, 45, 3, 74, 46],
            [8, 53, 23, 26, 54, 24],
            [12, 45, 15, 28, 46, 16],
            [3, 147, 117, 10, 148, 118],
            [3, 73, 45, 23, 74, 46],
            [4, 54, 24, 31, 55, 25],
            [11, 45, 15, 31, 46, 16],
            [7, 146, 116, 7, 147, 117],
            [21, 73, 45, 7, 74, 46],
            [1, 53, 23, 37, 54, 24],
            [19, 45, 15, 26, 46, 16],
            [5, 145, 115, 10, 146, 116],
            [19, 75, 47, 10, 76, 48],
            [15, 54, 24, 25, 55, 25],
            [23, 45, 15, 25, 46, 16],
            [13, 145, 115, 3, 146, 116],
            [2, 74, 46, 29, 75, 47],
            [42, 54, 24, 1, 55, 25],
            [23, 45, 15, 28, 46, 16],
            [17, 145, 115],
            [10, 74, 46, 23, 75, 47],
            [10, 54, 24, 35, 55, 25],
            [19, 45, 15, 35, 46, 16],
            [17, 145, 115, 1, 146, 116],
            [14, 74, 46, 21, 75, 47],
            [29, 54, 24, 19, 55, 25],
            [11, 45, 15, 46, 46, 16],
            [13, 145, 115, 6, 146, 116],
            [14, 74, 46, 23, 75, 47],
            [44, 54, 24, 7, 55, 25],
            [59, 46, 16, 1, 47, 17],
            [12, 151, 121, 7, 152, 122],
            [12, 75, 47, 26, 76, 48],
            [39, 54, 24, 14, 55, 25],
            [22, 45, 15, 41, 46, 16],
            [6, 151, 121, 14, 152, 122],
            [6, 75, 47, 34, 76, 48],
            [46, 54, 24, 10, 55, 25],
            [2, 45, 15, 64, 46, 16],
            [17, 152, 122, 4, 153, 123],
            [29, 74, 46, 14, 75, 47],
            [49, 54, 24, 10, 55, 25],
            [24, 45, 15, 46, 46, 16],
            [4, 152, 122, 18, 153, 123],
            [13, 74, 46, 32, 75, 47],
            [48, 54, 24, 14, 55, 25],
            [42, 45, 15, 32, 46, 16],
            [20, 147, 117, 4, 148, 118],
            [40, 75, 47, 7, 76, 48],
            [43, 54, 24, 22, 55, 25],
            [10, 45, 15, 67, 46, 16],
            [19, 148, 118, 6, 149, 119],
            [18, 75, 47, 31, 76, 48],
            [34, 54, 24, 34, 55, 25],
            [20, 45, 15, 61, 46, 16]
        ];
        static getRSBlocks(typeNumber, errorCorrectLevel) {
            const rsBlock = _QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
            if (rsBlock == void 0) {
                throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
            }
            const length = rsBlock.length / 3;
            const list = [];
            for (let i = 0; i < length; i++) {
                const count = rsBlock[i * 3 + 0];
                const totalCount = rsBlock[i * 3 + 1];
                const dataCount = rsBlock[i * 3 + 2];
                for (let j = 0; j < count; j++) {
                    list.push(new _QRRSBlock(totalCount, dataCount));
                }
            }
            return list;
        }
        static getRsBlockTable(typeNumber, errorCorrectLevel) {
            switch (errorCorrectLevel) {
                case ErrorCorrectLevel.L:
                    return _QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
                case ErrorCorrectLevel.M:
                    return _QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
                case ErrorCorrectLevel.Q:
                    return _QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
                case ErrorCorrectLevel.H:
                    return _QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
                default:
                    return void 0;
            }
        }
    };
    var QRBitBuffer = class {
        buffer;
        length;
        constructor() {
            this.buffer = [];
            this.length = 0;
        }
        get(index) {
            const bufIndex = Math.floor(index / 8);
            return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
        }
        put(num, length) {
            for (let i = 0; i < length; i++) {
                this.putBit((num >>> length - i - 1 & 1) == 1);
            }
        }
        getLengthInBits() {
            return this.length;
        }
        putBit(bit) {
            const bufIndex = Math.floor(this.length / 8);
            if (this.buffer.length <= bufIndex) {
                this.buffer.push(0);
            }
            if (bit) {
                this.buffer[bufIndex] |= 128 >>> this.length % 8;
            }
            this.length++;
        }
    };
    var QRMath = {
        glog: function (n) {
            if (n < 1) {
                throw new Error("glog(" + n + ")");
            }
            return QRMath.LOG_TABLE[n];
        },
        gexp: function (n) {
            while (n < 0) {
                n += 255;
            }
            while (n >= 256) {
                n -= 255;
            }
            return QRMath.EXP_TABLE[n];
        },
        EXP_TABLE: new Array(256),
        LOG_TABLE: new Array(256)
    };
    for (let i = 0; i < 8; i++) {
        QRMath.EXP_TABLE[i] = 1 << i;
    }
    for (let i = 8; i < 256; i++) {
        QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
    }
    for (let i = 0; i < 255; i++) {
        QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
    }
    var math_default = QRMath;
    var QRPolynomial = class _QRPolynomial {
        num;
        constructor(num, shift) {
            if (num.length == void 0) {
                throw new Error(num.length + "/" + shift);
            }
            let offset = 0;
            while (offset < num.length && num[offset] == 0) {
                offset++;
            }
            this.num = new Array(num.length - offset + shift);
            for (let i = 0; i < num.length - offset; i++) {
                this.num[i] = num[i + offset];
            }
        }
        get(index) {
            return this.num[index];
        }
        getLength() {
            return this.num.length;
        }
        multiply(e) {
            const num = new Array(this.getLength() + e.getLength() - 1);
            for (let i = 0; i < this.getLength(); i++) {
                for (let j = 0; j < e.getLength(); j++) {
                    num[i + j] ^= math_default.gexp(math_default.glog(this.get(i)) + math_default.glog(e.get(j)));
                }
            }
            return new _QRPolynomial(num, 0);
        }
        mod(e) {
            if (this.getLength() - e.getLength() < 0) {
                return this;
            }
            const ratio = math_default.glog(this.get(0)) - math_default.glog(e.get(0));
            const num = new Array(this.getLength());
            for (let i = 0; i < this.getLength(); i++) {
                num[i] = this.get(i);
            }
            for (let i = 0; i < e.getLength(); i++) {
                num[i] ^= math_default.gexp(math_default.glog(e.get(i)) + ratio);
            }
            return new _QRPolynomial(num, 0).mod(e);
        }
    };
    var QRMaskPattern = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7
    };
    var QRUtil = {
        PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170]
        ],
        G15: 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0,
        G18: 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0,
        G15_MASK: 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1,
        getBCHTypeInfo: function (data) {
            let d = data << 10;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
                d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
            }
            return (data << 10 | d) ^ QRUtil.G15_MASK;
        },
        getBCHTypeNumber: function (data) {
            let d = data << 12;
            while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
                d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
            }
            return data << 12 | d;
        },
        getBCHDigit: function (data) {
            let digit = 0;
            while (data != 0) {
                digit++;
                data >>>= 1;
            }
            return digit;
        },
        getPatternPosition: function (typeNumber) {
            return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
        },
        getMask: function (maskPattern, i, j) {
            switch (maskPattern) {
                case QRMaskPattern.PATTERN000:
                    return (i + j) % 2 == 0;
                case QRMaskPattern.PATTERN001:
                    return i % 2 == 0;
                case QRMaskPattern.PATTERN010:
                    return j % 3 == 0;
                case QRMaskPattern.PATTERN011:
                    return (i + j) % 3 == 0;
                case QRMaskPattern.PATTERN100:
                    return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
                case QRMaskPattern.PATTERN101:
                    return i * j % 2 + i * j % 3 == 0;
                case QRMaskPattern.PATTERN110:
                    return (i * j % 2 + i * j % 3) % 2 == 0;
                case QRMaskPattern.PATTERN111:
                    return (i * j % 3 + (i + j) % 2) % 2 == 0;
                default:
                    throw new Error("bad maskPattern:" + maskPattern);
            }
        },
        getErrorCorrectPolynomial: function (errorCorrectLength) {
            let a = new QRPolynomial([1], 0);
            for (let i = 0; i < errorCorrectLength; i++) {
                a = a.multiply(new QRPolynomial([1, math_default.gexp(i)], 0));
            }
            return a;
        },
        getLengthInBits: function (mode, type) {
            if (1 <= type && type < 10) {
                switch (mode) {
                    case mode_default.MODE_NUMBER:
                        return 10;
                    case mode_default.MODE_ALPHA_NUM:
                        return 9;
                    case mode_default.MODE_8BIT_BYTE:
                        return 8;
                    case mode_default.MODE_KANJI:
                        return 8;
                    default:
                        throw new Error("mode:" + mode);
                }
            }
            else if (type < 27) {
                switch (mode) {
                    case mode_default.MODE_NUMBER:
                        return 12;
                    case mode_default.MODE_ALPHA_NUM:
                        return 11;
                    case mode_default.MODE_8BIT_BYTE:
                        return 16;
                    case mode_default.MODE_KANJI:
                        return 10;
                    default:
                        throw new Error("mode:" + mode);
                }
            }
            else if (type < 41) {
                switch (mode) {
                    case mode_default.MODE_NUMBER:
                        return 14;
                    case mode_default.MODE_ALPHA_NUM:
                        return 13;
                    case mode_default.MODE_8BIT_BYTE:
                        return 16;
                    case mode_default.MODE_KANJI:
                        return 12;
                    default:
                        throw new Error("mode:" + mode);
                }
            }
            else {
                throw new Error("type:" + type);
            }
        },
        getLostPoint: function (qrCode) {
            const moduleCount = qrCode.getModuleCount();
            let lostPoint = 0;
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount; col++) {
                    let sameCount = 0;
                    const dark = qrCode.isDark(row, col);
                    for (let r = -1; r <= 1; r++) {
                        if (row + r < 0 || moduleCount <= row + r) {
                            continue;
                        }
                        for (let c = -1; c <= 1; c++) {
                            if (col + c < 0 || moduleCount <= col + c) {
                                continue;
                            }
                            if (r == 0 && c == 0) {
                                continue;
                            }
                            if (dark == qrCode.isDark(row + r, col + c)) {
                                sameCount++;
                            }
                        }
                    }
                    if (sameCount > 5) {
                        lostPoint += 3 + sameCount - 5;
                    }
                }
            }
            for (let row = 0; row < moduleCount - 1; row++) {
                for (let col = 0; col < moduleCount - 1; col++) {
                    let count = 0;
                    if (qrCode.isDark(row, col))
                        count++;
                    if (qrCode.isDark(row + 1, col))
                        count++;
                    if (qrCode.isDark(row, col + 1))
                        count++;
                    if (qrCode.isDark(row + 1, col + 1))
                        count++;
                    if (count == 0 || count == 4) {
                        lostPoint += 3;
                    }
                }
            }
            for (let row = 0; row < moduleCount; row++) {
                for (let col = 0; col < moduleCount - 6; col++) {
                    if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) {
                        lostPoint += 40;
                    }
                }
            }
            for (let col = 0; col < moduleCount; col++) {
                for (let row = 0; row < moduleCount - 6; row++) {
                    if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) {
                        lostPoint += 40;
                    }
                }
            }
            let darkCount = 0;
            for (let col = 0; col < moduleCount; col++) {
                for (let row = 0; row < moduleCount; row++) {
                    if (qrCode.isDark(row, col)) {
                        darkCount++;
                    }
                }
            }
            const ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
            lostPoint += ratio * 10;
            return lostPoint;
        }
    };
    var util_default = QRUtil;
    var QRCode = class _QRCode {
        typeNumber;
        errorCorrectLevel;
        modules;
        moduleCount;
        dataCache;
        dataList;
        constructor(typeNumber, errorCorrectLevel) {
            this.typeNumber = typeNumber;
            this.errorCorrectLevel = errorCorrectLevel;
            this.modules = null;
            this.moduleCount = 0;
            this.dataCache = null;
            this.dataList = [];
        }
        addData(data) {
            const newData = new QR8bitByte(data);
            this.dataList.push(newData);
            this.dataCache = null;
        }
        isDark(row, col) {
            if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
                throw new Error(row + "," + col);
            }
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            return this.modules[row][col];
        }
        getModuleCount() {
            return this.moduleCount;
        }
        make() {
            if (this.typeNumber < 1) {
                let typeNumber = 1;
                for (typeNumber = 1; typeNumber < 40; typeNumber++) {
                    const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);
                    const buffer = new QRBitBuffer();
                    let totalDataCount = 0;
                    for (let i = 0; i < rsBlocks.length; i++) {
                        totalDataCount += rsBlocks[i].dataCount;
                    }
                    for (let i = 0; i < this.dataList.length; i++) {
                        const data = this.dataList[i];
                        buffer.put(data.mode, 4);
                        buffer.put(data.getLength(), util_default.getLengthInBits(data.mode, typeNumber));
                        data.write(buffer);
                    }
                    if (buffer.getLengthInBits() <= totalDataCount * 8)
                        break;
                }
                this.typeNumber = typeNumber;
            }
            this.makeImpl(false, this.getBestMaskPattern());
        }
        makeImpl(test, maskPattern) {
            this.moduleCount = this.typeNumber * 4 + 17;
            this.modules = new Array(this.moduleCount);
            for (let row = 0; row < this.moduleCount; row++) {
                this.modules[row] = new Array(this.moduleCount);
                for (let col = 0; col < this.moduleCount; col++) {
                    this.modules[row][col] = null;
                }
            }
            this.setupPositionProbePattern(0, 0);
            this.setupPositionProbePattern(this.moduleCount - 7, 0);
            this.setupPositionProbePattern(0, this.moduleCount - 7);
            this.setupPositionAdjustPattern();
            this.setupTimingPattern();
            this.setupTypeInfo(test, maskPattern);
            if (this.typeNumber >= 7) {
                this.setupTypeNumber(test);
            }
            if (this.dataCache == null) {
                this.dataCache = _QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
            }
            this.mapData(this.dataCache, maskPattern);
        }
        setupPositionProbePattern(row, col) {
            for (let r = -1; r <= 7; r++) {
                if (row + r <= -1 || this.moduleCount <= row + r)
                    continue;
                for (let c = -1; c <= 7; c++) {
                    if (col + c <= -1 || this.moduleCount <= col + c)
                        continue;
                    if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) {
                        if (this.modules === null) {
                            throw new Error("this.modules is null");
                        }
                        this.modules[row + r][col + c] = true;
                    }
                    else {
                        if (this.modules === null) {
                            throw new Error("this.modules is null");
                        }
                        this.modules[row + r][col + c] = false;
                    }
                }
            }
        }
        getBestMaskPattern() {
            let minLostPoint = 0;
            let pattern = 0;
            for (let i = 0; i < 8; i++) {
                this.makeImpl(true, i);
                const lostPoint = util_default.getLostPoint(this);
                if (i == 0 || minLostPoint > lostPoint) {
                    minLostPoint = lostPoint;
                    pattern = i;
                }
            }
            return pattern;
        }
        setupTimingPattern() {
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            for (let r = 8; r < this.moduleCount - 8; r++) {
                if (this.modules[r][6] != null) {
                    continue;
                }
                this.modules[r][6] = r % 2 == 0;
            }
            for (let c = 8; c < this.moduleCount - 8; c++) {
                if (this.modules[6][c] != null) {
                    continue;
                }
                this.modules[6][c] = c % 2 == 0;
            }
        }
        setupPositionAdjustPattern() {
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            const pos = util_default.getPatternPosition(this.typeNumber);
            for (let i = 0; i < pos.length; i++) {
                for (let j = 0; j < pos.length; j++) {
                    const row = pos[i];
                    const col = pos[j];
                    if (this.modules[row][col] != null) {
                        continue;
                    }
                    for (let r = -2; r <= 2; r++) {
                        for (let c = -2; c <= 2; c++) {
                            if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) {
                                this.modules[row + r][col + c] = true;
                            }
                            else {
                                this.modules[row + r][col + c] = false;
                            }
                        }
                    }
                }
            }
        }
        setupTypeNumber(test) {
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            const bits = util_default.getBCHTypeNumber(this.typeNumber);
            for (let i = 0; i < 18; i++) {
                const mod = !test && (bits >> i & 1) == 1;
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
            }
            for (let i = 0; i < 18; i++) {
                const mod = !test && (bits >> i & 1) == 1;
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
            }
        }
        setupTypeInfo(test, maskPattern) {
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            const data = this.errorCorrectLevel << 3 | maskPattern;
            const bits = util_default.getBCHTypeInfo(data);
            for (let i = 0; i < 15; i++) {
                const mod = !test && (bits >> i & 1) == 1;
                if (i < 6) {
                    this.modules[i][8] = mod;
                }
                else if (i < 8) {
                    this.modules[i + 1][8] = mod;
                }
                else {
                    this.modules[this.moduleCount - 15 + i][8] = mod;
                }
            }
            for (let i = 0; i < 15; i++) {
                const mod = !test && (bits >> i & 1) == 1;
                if (i < 8) {
                    this.modules[8][this.moduleCount - i - 1] = mod;
                }
                else if (i < 9) {
                    this.modules[8][15 - i - 1 + 1] = mod;
                }
                else {
                    this.modules[8][15 - i - 1] = mod;
                }
            }
            this.modules[this.moduleCount - 8][8] = !test;
        }
        mapData(data, maskPattern) {
            if (this.modules === null) {
                throw new Error("this.modules is null");
            }
            let inc = -1;
            let row = this.moduleCount - 1;
            let bitIndex = 7;
            let byteIndex = 0;
            for (let col = this.moduleCount - 1; col > 0; col -= 2) {
                if (col == 6)
                    col--;
                while (true) {
                    for (let c = 0; c < 2; c++) {
                        if (this.modules[row][col - c] == null) {
                            let dark = false;
                            if (byteIndex < data.length) {
                                dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                            }
                            const mask = util_default.getMask(maskPattern, row, col - c);
                            if (mask) {
                                dark = !dark;
                            }
                            this.modules[row][col - c] = dark;
                            bitIndex--;
                            if (bitIndex == -1) {
                                byteIndex++;
                                bitIndex = 7;
                            }
                        }
                    }
                    row += inc;
                    if (row < 0 || this.moduleCount <= row) {
                        row -= inc;
                        inc = -inc;
                        break;
                    }
                }
            }
        }
        static PAD0 = 236;
        static PAD1 = 17;
        static createData(typeNumber, errorCorrectLevel, dataList) {
            const rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
            const buffer = new QRBitBuffer();
            for (let i = 0; i < dataList.length; i++) {
                const data = dataList[i];
                buffer.put(data.mode, 4);
                buffer.put(data.getLength(), util_default.getLengthInBits(data.mode, typeNumber));
                data.write(buffer);
            }
            let totalDataCount = 0;
            for (let i = 0; i < rsBlocks.length; i++) {
                totalDataCount += rsBlocks[i].dataCount;
            }
            if (buffer.getLengthInBits() > totalDataCount * 8) {
                throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
            }
            if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
                buffer.put(0, 4);
            }
            while (buffer.getLengthInBits() % 8 != 0) {
                buffer.putBit(false);
            }
            while (true) {
                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(_QRCode.PAD0, 8);
                if (buffer.getLengthInBits() >= totalDataCount * 8) {
                    break;
                }
                buffer.put(_QRCode.PAD1, 8);
            }
            return _QRCode.createBytes(buffer, rsBlocks);
        }
        static createBytes(buffer, rsBlocks) {
            let offset = 0;
            let maxDcCount = 0;
            let maxEcCount = 0;
            const dcdata = new Array(rsBlocks.length);
            const ecdata = new Array(rsBlocks.length);
            for (let r = 0; r < rsBlocks.length; r++) {
                const dcCount = rsBlocks[r].dataCount;
                const ecCount = rsBlocks[r].totalCount - dcCount;
                maxDcCount = Math.max(maxDcCount, dcCount);
                maxEcCount = Math.max(maxEcCount, ecCount);
                dcdata[r] = new Array(dcCount);
                for (let i = 0; i < dcdata[r].length; i++) {
                    dcdata[r][i] = 255 & buffer.buffer[i + offset];
                }
                offset += dcCount;
                const rsPoly = util_default.getErrorCorrectPolynomial(ecCount);
                const rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
                const modPoly = rawPoly.mod(rsPoly);
                ecdata[r] = new Array(rsPoly.getLength() - 1);
                for (let i = 0; i < ecdata[r].length; i++) {
                    const modIndex = i + modPoly.getLength() - ecdata[r].length;
                    ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
                }
            }
            let totalCodeCount = 0;
            for (let i = 0; i < rsBlocks.length; i++) {
                totalCodeCount += rsBlocks[i].totalCount;
            }
            const data = new Array(totalCodeCount);
            let index = 0;
            for (let i = 0; i < maxDcCount; i++) {
                for (let r = 0; r < rsBlocks.length; r++) {
                    if (i < dcdata[r].length) {
                        data[index++] = dcdata[r][i];
                    }
                }
            }
            for (let i = 0; i < maxEcCount; i++) {
                for (let r = 0; r < rsBlocks.length; r++) {
                    if (i < ecdata[r].length) {
                        data[index++] = ecdata[r][i];
                    }
                }
            }
            return data;
        }
    };
    exports.QRCode = QRCode;
    var qrcode = (data, opt) => {
        opt = opt || {};
        const qr = new QRCode(opt.typeNumber || -1, opt.errorCorrectLevel || ErrorCorrectLevel.H);
        qr.addData(data);
        qr.make();
        return qr;
    };
    exports.qrcode = qrcode;
});
dA("@akamfoad/qrcode", ["require", "exports", "@akamfoad/qr"], function (require, exports, qr_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QRCodeText = exports.QRCodeSVG = exports.QRCodeRaw = exports.QRCodeCanvas = exports.AbstractQRCodeWithImage = void 0;
    function invariant(condition, message) {
        if (condition)
            return;
        throw new Error(message);
    }
    var ColorUtils = class {
        static convertHexColorToBytes(hexColor) {
            invariant(typeof hexColor === "string", `Expected hexColor param to be a string instead got ${typeof hexColor}`);
            let hex = hexColor.replace("#", "");
            const isHexColor = /^([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(hex);
            invariant(isHexColor, `Expected hexColor to be of length 3, 4, 6 or 8 with 0-9 A-F characters, instead got ${hex} with length ${hex.length}`);
            const bytes = [];
            if (hex.length === 3) {
                hex += "F";
            }
            else if (hex.length === 6) {
                hex += "FF";
            }
            if (hex.length === 4) {
                bytes.push(...hex.split("").map((h) => parseInt(h.repeat(2), 16)));
            }
            else if (hex.length === 8) {
                bytes.push(parseInt(hex.substring(0, 2), 16));
                bytes.push(parseInt(hex.substring(2, 4), 16));
                bytes.push(parseInt(hex.substring(4, 6), 16));
                bytes.push(parseInt(hex.substring(6, 8), 16));
            }
            return bytes;
        }
    };
    var ERROR_CORRECTION_LEVEL_LOW = "L";
    var DEFAULT_CONSTRUCTOR_PARAMS = {
        level: ERROR_CORRECTION_LEVEL_LOW,
        padding: 1,
        invert: false,
        typeNumber: 0,
        errorsEnabled: false
    };
    var QRCodeRaw = class {
        value;
        level;
        typeNumber;
        padding;
        errorsEnabled;
        invert;
        qrCodeData;
        constructor(value, options = {}) {
            const params = { ...DEFAULT_CONSTRUCTOR_PARAMS, ...options };
            this.value = value;
            this.level = params.level;
            this.typeNumber = params.typeNumber;
            this.padding = params.padding;
            this.invert = params.invert;
            this.errorsEnabled = params.errorsEnabled;
        }
        setValue(value) {
            this.value = value;
            this._clearCache();
        }
        getDataSize() {
            const data = this.getData();
            return data ? data.length : 0;
        }
        _clearCache() {
            this.qrCodeData = null;
        }
        _getQrCodeData(modules) {
            const qrCodeData = [];
            const padding = this.padding;
            const invert = this.invert;
            const rowPadding = Array(padding * 2 + modules.length).fill(invert);
            const rowsPadding = Array(padding).fill(rowPadding);
            const columnPadding = Array(padding).fill(invert);
            if (padding) {
                qrCodeData.push(...rowsPadding);
            }
            modules.forEach((row) => {
                const qrCodeRow = [];
                qrCodeRow.push(...columnPadding, ...row.map((isBlack) => invert ? !isBlack : isBlack), ...columnPadding);
                qrCodeData.push(qrCodeRow);
            });
            if (padding) {
                qrCodeData.push(...rowsPadding);
            }
            return qrCodeData;
        }
        getData() {
            if (!this.qrCodeData) {
                try {
                    const qrcode = new qr_1.QRCode(this.typeNumber, qr_1.ErrorCorrectLevel[this.level]);
                    qrcode.addData(this.value);
                    qrcode.make();
                    if (!qrcode.modules) {
                        return null;
                    }
                    this.qrCodeData = this._getQrCodeData(qrcode.modules);
                    Object.freeze(this.qrCodeData);
                }
                catch (error) {
                    if (this.errorsEnabled) {
                        throw error;
                    }
                    return null;
                }
            }
            return this.qrCodeData;
        }
    };
    exports.QRCodeRaw = QRCodeRaw;
    var DimensionUtils = class {
        static calculateDimension(value, canvasSize) {
            const isNumber = typeof value === "number";
            const isString = typeof value === "string";
            invariant(isNumber || isString, `value must be either string or number, instead got ${typeof value}`);
            if (isNumber) {
                return value;
            }
            if (value.indexOf("%") > 0) {
                return Math.round(parseFloat(value) / 100 * canvasSize) || 0;
            }
            return parseFloat(value) || 0;
        }
        static calculatePosition(value, size, canvasSize) {
            const isNumber = typeof value === "number";
            const isString = typeof value === "string";
            invariant(isNumber || isString, `value must be either string or number, instead got ${typeof value}`);
            if (isNumber)
                return value;
            if (value === "left" || value === "top") {
                return 0;
            }
            if (value === "right" || value === "bottom") {
                return canvasSize - size;
            }
            if (value === "center") {
                return Math.round((canvasSize - size) / 2);
            }
            const match = value.match(/^(?:(right|bottom|left|top)\s+)?(-?[0-9.]+)(%)?$/);
            invariant(!!match, `Expected position with number, instead got ${value}`);
            const isRight = match[1] === "right" || match[1] === "bottom";
            const isPercent = !!match[3];
            let val = parseFloat(match[2]) || 0;
            if (isPercent) {
                val = Math.round(val / 100 * canvasSize);
            }
            if (isRight) {
                val = canvasSize - val - size;
            }
            return Math.round(val);
        }
    };
    var DEFAULT_OPTIONS = {
        image: null
    };
    var DEFAULT_IMAGE_BORDER = 1;
    var AbstractQRCodeWithImage = class extends QRCodeRaw {
        image = null;
        imageConfig = null;
        constructor(value, options = {}) {
            super(value, options);
            const params = { ...DEFAULT_OPTIONS, ...options };
            this.image = params.image;
        }
        _clearCache() {
            super._clearCache();
            this.imageConfig = null;
        }
        _getImageSource(imageConfig) {
            const source = imageConfig.source;
            if (typeof source === "string") {
                return source;
            }
            if (source instanceof Image) {
                return source.src;
            }
            if (source instanceof HTMLCanvasElement) {
                return source.toDataURL();
            }
            return null;
        }
        _getImageConfig() {
            if (this.imageConfig) {
                return this.imageConfig;
            }
            if (!this.image || !this.image.source || !this.image.width || !this.image.height) {
                return null;
            }
            const dataSize = this.getDataSize();
            if (!dataSize) {
                return null;
            }
            const source = this._getImageSource(this.image);
            if (!source) {
                return null;
            }
            const dataSizeWithoutPadding = dataSize - this.padding * 2;
            const width = DimensionUtils.calculateDimension(this.image.width, dataSizeWithoutPadding);
            const height = DimensionUtils.calculateDimension(this.image.height, dataSizeWithoutPadding);
            const x = DimensionUtils.calculatePosition(this.image.x, width, dataSizeWithoutPadding) + this.padding;
            const y = DimensionUtils.calculatePosition(this.image.y, height, dataSizeWithoutPadding) + this.padding;
            let border = DEFAULT_IMAGE_BORDER;
            if (typeof this.image.border === "number" || this.image.border === null) {
                border = this.image.border;
            }
            this.imageConfig = { source, border, x, y, width, height };
            return this.imageConfig;
        }
        getData() {
            if (this.qrCodeData) {
                return this.qrCodeData;
            }
            const data = super.getData();
            if (!data) {
                return data;
            }
            const imageConfig = this._getImageConfig();
            if (imageConfig !== null && imageConfig.width && imageConfig.height) {
                if (typeof imageConfig.border === "number") {
                    const begX = Math.max(imageConfig.x - imageConfig.border, 0);
                    const begY = Math.max(imageConfig.y - imageConfig.border, 0);
                    const endX = Math.min(begX + imageConfig.width + imageConfig.border * 2, data.length);
                    const endY = Math.min(begY + imageConfig.height + imageConfig.border * 2, data.length);
                    for (let y = begY; y < endY; y += 1) {
                        for (let x = begX; x < endX; x += 1) {
                            data[y][x] = this.invert ? true : false;
                        }
                    }
                }
            }
            return data;
        }
    };
    exports.AbstractQRCodeWithImage = AbstractQRCodeWithImage;
    var loadImage = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = () => reject(img);
            img.src = url;
        });
    };
    var DEFAULT_OPTIONS2 = {
        fgColor: "#000",
        bgColor: "#FFF",
        scale: 10,
        size: null
    };
    var QRCodeCanvas = class extends AbstractQRCodeWithImage {
        fgColor;
        bgColor;
        scale;
        size;
        canvas;
        canvasContext;
        constructor(value, options = {}) {
            super(value, options);
            const params = { ...DEFAULT_OPTIONS2, ...options };
            this.fgColor = params.fgColor;
            this.bgColor = params.bgColor;
            this.scale = params.scale;
            this.size = params.size;
            this.canvas = document.createElement("canvas");
            const canvasContext = this.canvas.getContext("2d");
            if (canvasContext === null) {
                throw new Error("canvas context is null");
            }
            this.canvasContext = canvasContext;
        }
        _clearCache() {
            super._clearCache();
            this.canvas.width = 0;
        }
        _getCanvasSize() {
            const dataSize = this.getDataSize();
            if (!dataSize) {
                return null;
            }
            if (this.size) {
                return this.size;
            }
            if (this.scale) {
                return this.scale * dataSize;
            }
            return dataSize;
        }
        draw(canvas = null) {
            const dataSize = this.getDataSize();
            if (!dataSize) {
                return null;
            }
            const data = this.getData();
            if (!data) {
                return null;
            }
            const fgColor = ColorUtils.convertHexColorToBytes(this.fgColor);
            const bgColor = ColorUtils.convertHexColorToBytes(this.bgColor);
            let index = 0;
            const bytes = new Uint8ClampedArray(dataSize ** 2 * 4);
            data.forEach((row) => {
                row.forEach((isBlack) => {
                    if (isBlack) {
                        bytes.set(fgColor, index);
                    }
                    else {
                        bytes.set(bgColor, index);
                    }
                    index += 4;
                });
            });
            const imageData = new ImageData(bytes, dataSize, dataSize);
            this.canvas.width = dataSize;
            this.canvas.height = dataSize;
            this.canvasContext.putImageData(imageData, 0, 0);
            const canvasSize = this._getCanvasSize();
            const qrCodeCanvas = canvas || document.createElement("canvas");
            qrCodeCanvas.width = canvasSize;
            qrCodeCanvas.height = canvasSize;
            const qrCodeCanvasContext = qrCodeCanvas.getContext("2d");
            qrCodeCanvasContext.imageSmoothingEnabled = false;
            qrCodeCanvasContext.drawImage(this.canvas, 0, 0, canvasSize, canvasSize);
            const drawImageResult = this._drawImage(qrCodeCanvasContext, canvasSize / dataSize);
            if (drawImageResult instanceof Promise) {
                return drawImageResult.then(() => {
                    return qrCodeCanvas;
                });
            }
            return qrCodeCanvas;
        }
        _getImageSource(imageConfig) {
            const source = imageConfig.source;
            if (typeof source === "string") {
                return loadImage(source).then((image) => {
                    this.image.source = image;
                    imageConfig.source = image;
                    return image;
                });
            }
            if (source instanceof Image) {
                return source;
            }
            if (source instanceof HTMLCanvasElement) {
                return source;
            }
            return null;
        }
        _drawImage(qrCodeCanvasContext, pixelSize) {
            const imageConfig = this._getImageConfig();
            if (!imageConfig) {
                return null;
            }
            if (imageConfig.source instanceof Promise) {
                return imageConfig.source.then((image) => {
                    qrCodeCanvasContext.drawImage(image, imageConfig.x * pixelSize, imageConfig.y * pixelSize, imageConfig.width * pixelSize, imageConfig.height * pixelSize);
                });
            }
            qrCodeCanvasContext.drawImage(imageConfig.source, imageConfig.x * pixelSize, imageConfig.y * pixelSize, imageConfig.width * pixelSize, imageConfig.height * pixelSize);
            return true;
        }
        getCanvas() {
            return this.draw();
        }
        toDataUrl(type = "image/png", encoderOptions = 0.92) {
            const canvasOrPromise = this.draw();
            if (!canvasOrPromise) {
                return null;
            }
            if (canvasOrPromise instanceof Promise) {
                return canvasOrPromise.then((qrCodeCanvas) => {
                    return qrCodeCanvas.toDataURL(type, encoderOptions);
                });
            }
            return canvasOrPromise.toDataURL(type, encoderOptions);
        }
    };
    exports.QRCodeCanvas = QRCodeCanvas;
    var TYPE_INT_WHITE = 0;
    var TYPE_INT_BLACK = 1;
    var TYPE_INT_PROCESSED = 2;
    var DEFAULT_OPTIONS3 = {
        fgColor: "#000",
        bgColor: "#FFF"
    };
    var QRCodeSVG = class extends AbstractQRCodeWithImage {
        fgColor;
        bgColor;
        qrCodeSVG = null;
        height;
        width;
        qrCodeDataUrl = null;
        constructor(value, options = {}) {
            super(value, options);
            const params = { ...DEFAULT_OPTIONS3, ...options };
            this.fgColor = params.fgColor;
            this.bgColor = params.bgColor;
            this.width = params.width;
            this.height = params.height;
        }
        _clearCache() {
            super._clearCache();
            this.qrCodeSVG = null;
            this.qrCodeDataUrl = null;
        }
        _getDataInt() {
            const data = this.getData();
            if (!data) {
                return null;
            }
            return data.map((row) => {
                return row.map((isBlack) => {
                    return isBlack ? TYPE_INT_BLACK : TYPE_INT_WHITE;
                });
            });
        }
        _getRects() {
            const dataInt = this._getDataInt();
            if (!dataInt) {
                return null;
            }
            const rects = [];
            const count = dataInt.length - 1;
            for (let y = 0; y <= count; y += 1) {
                let begX = -1;
                for (let x = 0; x <= count; x += 1) {
                    const intType = dataInt[y][x];
                    const isLast = x === count;
                    const isBlack = intType === TYPE_INT_BLACK;
                    if (isBlack && begX === -1) {
                        begX = x;
                    }
                    if (begX !== -1 && (isLast || !isBlack)) {
                        const endX = x - (isBlack ? 0 : 1);
                        const rect = this._processRect(dataInt, begX, endX, y);
                        if (rect) {
                            rects.push(rect);
                        }
                        begX = -1;
                    }
                }
            }
            return rects;
        }
        _processRect(dataInt, begX, endX, begY) {
            const count = dataInt.length - 1;
            let isNewRect = false;
            let isStopped = false;
            let height = 0;
            for (let y = begY; y <= count; y += 1) {
                for (let x = begX; x <= endX; x += 1) {
                    const intType = dataInt[y][x];
                    if (intType === TYPE_INT_WHITE) {
                        isStopped = true;
                        break;
                    }
                }
                if (isStopped) {
                    break;
                }
                for (let x = begX; x <= endX; x += 1) {
                    if (dataInt[y][x] === TYPE_INT_BLACK) {
                        isNewRect = true;
                        dataInt[y][x] = TYPE_INT_PROCESSED;
                    }
                }
                height += 1;
            }
            if (!isNewRect) {
                return null;
            }
            return {
                x: begX,
                y: begY,
                width: endX - begX + 1,
                height
            };
        }
        _getRelativeRects() {
            const rects = this._getRects();
            if (!rects) {
                return null;
            }
            const relativeRects = [];
            const rectsMap = {};
            let seqRectId = 0;
            rects.forEach((rect) => {
                const key = `${rect.width}:${rect.height}`;
                if (rectsMap[key]) {
                    rectsMap[key].count += 1;
                    if (!rectsMap[key].id) {
                        rectsMap[key].id = `i${seqRectId.toString(32)}`;
                        seqRectId += 1;
                    }
                }
                else {
                    rectsMap[key] = { count: 1, rect, relative: false, id: null };
                }
            });
            rects.forEach((rect) => {
                const key = `${rect.width}:${rect.height}`;
                const rectsMapItem = rectsMap[key];
                if (rectsMapItem.relative) {
                    relativeRects.push({
                        id: rectsMapItem.id,
                        x: rect.x - rectsMapItem.rect.x,
                        y: rect.y - rectsMapItem.rect.y
                    });
                }
                else {
                    if (rectsMapItem.id) {
                        rect.id = rectsMapItem.id;
                        rectsMapItem.relative = true;
                    }
                    relativeRects.push(rect);
                }
            });
            return relativeRects;
        }
        _buildSVG(rects) {
            const size = this.getDataSize();
            const tags = [
                `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" shape-rendering="crispEdges" viewBox="0 0 ${size} ${size}"${this.width ? ` width=${this.width}` : ""}${this.height ? ` height=${this.height}` : ""} >`
            ];
            if (this.bgColor) {
                tags.push(`<rect x="0" y="0" height="${size}" width="${size}" fill="${this.bgColor}"/>`);
            }
            rects.forEach((rect) => {
                if (rect.width && rect.height) {
                    const rectId = rect.id ? `id="${rect.id}" ` : "";
                    tags.push(`<rect ${rectId}x="${rect.x}" y="${rect.y}" height="${rect.height}" width="${rect.width}" fill="${this.fgColor}"/>`);
                }
                else {
                    tags.push(`<use xlink:href="#${rect.id}" x="${rect.x}" y="${rect.y}"/>`);
                }
            });
            const imageConfig = this._getImageConfig();
            if (imageConfig && imageConfig.width && imageConfig.height) {
                tags.push(`<image xlink:href="${imageConfig.source}" x="${imageConfig.x}" y="${imageConfig.y}" width="${imageConfig.width}" height="${imageConfig.height}"/>`);
            }
            tags.push("</svg>");
            return tags.join("");
        }
        toString() {
            if (!this.qrCodeSVG) {
                const dataSize = this.getDataSize();
                if (!dataSize) {
                    return null;
                }
                const rects = this._getRects();
                if (!rects) {
                    return null;
                }
                this.qrCodeSVG = this._buildSVG(rects);
            }
            return this.qrCodeSVG;
        }
        toDataUrl() {
            if (!this.qrCodeDataUrl) {
                const dataSize = this.getDataSize();
                if (!dataSize) {
                    return null;
                }
                const relativeRects = this._getRelativeRects();
                if (!relativeRects) {
                    return null;
                }
                const svg = this._buildSVG(relativeRects);
                this.qrCodeDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`;
            }
            return this.qrCodeDataUrl;
        }
    };
    exports.QRCodeSVG = QRCodeSVG;
    var DEFAULT_OPTIONS4 = {
        blackSymbol: "\u2593\u2593",
        whiteSymbol: "  "
    };
    var QRCodeText = class extends QRCodeRaw {
        blackSymbol;
        whiteSymbol;
        qrCodeText;
        constructor(value, options = {}) {
            super(value, options);
            const params = { ...DEFAULT_OPTIONS4, ...options };
            this.blackSymbol = params.blackSymbol;
            this.whiteSymbol = params.whiteSymbol;
        }
        _clearCache() {
            super._clearCache();
            this.qrCodeText = null;
        }
        toString() {
            if (this.qrCodeText) {
                return this.qrCodeText;
            }
            const dataSize = this.getDataSize();
            if (!dataSize) {
                return null;
            }
            const data = this.getData();
            if (data === null) {
                return null;
            }
            const symbols = [];
            for (let y = 0; y < dataSize; y += 1) {
                for (let x = 0; x < dataSize; x += 1) {
                    const isBlack = data[y][x];
                    symbols.push(isBlack ? this.blackSymbol : this.whiteSymbol);
                }
                symbols.push("\n");
            }
            this.qrCodeText = symbols.join("");
            return this.qrCodeText;
        }
    };
    exports.QRCodeText = QRCodeText;
});
dA("@itthink/frontend-lib-atoms/qrcode/index", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./qrcode.atom.css", "../utils/animations.atom.css", "@akamfoad/qrcode"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, qrcode_atom_css_1, animations_atom_css_1, qrcode_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QrCode = void 0;
    class QrCode extends atomicreact_ts_1.Atom {
        qrcodeSVG;
        svgElement;
        preRender = () => {
            if (!this.prop.bgColor)
                this.prop.bgColor = "#FFF";
            if (!this.prop.fgColor)
                this.prop.fgColor = "#000";
            if (!this.prop.glowColorOne)
                this.prop.glowColorOne = this.prop.bgColor;
            if (!this.prop.glowColorTwo)
                this.prop.glowColorTwo = this.prop.fgColor;
            if (!this.prop.level)
                this.prop.level = "L";
            if (!this.prop.padding)
                this.prop.padding = 3;
            if (this.prop.image) {
                if (!this.prop.image.height)
                    this.prop.image.height = "20%";
                if (!this.prop.image.width)
                    this.prop.image.width = "20%";
                if (!this.prop.image.x)
                    this.prop.image.x = "center";
                if (!this.prop.image.y)
                    this.prop.image.y = "center";
            }
            if (this.prop.rotationAnimation === undefined)
                this.prop.rotationAnimation = true;
            if (this.prop.floatAnimation === undefined)
                this.prop.floatAnimation = true;
            if (!this.prop.rotationPeriod)
                this.prop.rotationPeriod = 10;
            if (!this.prop.floatingZPeriod)
                this.prop.floatingZPeriod = 20;
        };
        struct = () => ((0, jsx_runtime_1.jsx)("div", { class: [qrcode_atom_css_1.square, animations_atom_css_1.gradientBorder] }));
        onRender() {
            this.getElement().style.setProperty(`--glowColorOne`, this.prop.glowColorOne);
            this.getElement().style.setProperty(`--glowColorTwo`, this.prop.glowColorTwo);
            if (this.prop.rotationAnimation)
                this.getElement().classList.add(animations_atom_css_1.withRotation);
            if (this.prop.floatAnimation)
                this.getElement().classList.add(animations_atom_css_1.floatingZ);
            this.getElement().style.setProperty(`--rotationPeriod`, `${this.prop.rotationPeriod}s`);
            this.getElement().style.setProperty(`--floatingZPeriod`, `${this.prop.floatingZPeriod}s`);
            this.renderQRCode();
        }
        setData(value) {
            this.prop.value = value;
            this.renderQRCode();
        }
        renderQRCode() {
            if (!this.prop.value)
                return;
            this.qrcodeSVG = new qrcode_1.QRCodeSVG(this.prop.value, {
                bgColor: this.prop.bgColor,
                fgColor: this.prop.fgColor,
                level: this.prop.level,
                padding: this.prop.padding,
                image: this.prop.image ? {
                    source: (this.prop.image.source ? this.prop.image.source : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAQSURBVBhXY/iPAwwpif//Aboev0GEdLc5AAAAAElFTkSuQmCC"),
                    height: this.prop.image.height,
                    width: this.prop.image.width,
                    x: this.prop.image.x,
                    y: this.prop.image.y,
                } : undefined
            });
            this.getElement().innerHTML = this.qrcodeSVG.toString();
            this.svgElement = this.getElement().querySelector("svg");
            if (this.prop.image && this.prop.image.svgSource) {
                const imgSVG = this.svgElement.querySelector("image");
                const propsKeys = ["width", "height", "x", "y"];
                const propsSVG = {};
                propsKeys.forEach(key => propsSVG[key] = imgSVG.getAttribute(key));
                imgSVG.outerHTML = this.prop.image.svgSource;
                const svg = this.svgElement.querySelector("svg");
                propsKeys.forEach(key => svg.setAttribute(key, propsSVG[key]));
            }
        }
    }
    exports.QrCode = QrCode;
});
dA("nouislider", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.cssClasses = exports.PipsType = exports.PipsMode = void 0;
    exports.create = initialize;
    (function (PipsMode) {
        PipsMode["Range"] = "range";
        PipsMode["Steps"] = "steps";
        PipsMode["Positions"] = "positions";
        PipsMode["Count"] = "count";
        PipsMode["Values"] = "values";
    })(exports.PipsMode || (exports.PipsMode = {}));
    (function (PipsType) {
        PipsType[PipsType["None"] = -1] = "None";
        PipsType[PipsType["NoValue"] = 0] = "NoValue";
        PipsType[PipsType["LargeValue"] = 1] = "LargeValue";
        PipsType[PipsType["SmallValue"] = 2] = "SmallValue";
    })(exports.PipsType || (exports.PipsType = {}));
    function isValidFormatter(entry) {
        return isValidPartialFormatter(entry) && typeof entry.from === "function";
    }
    function isValidPartialFormatter(entry) {
        return typeof entry === "object" && typeof entry.to === "function";
    }
    function removeElement(el) {
        el.parentElement.removeChild(el);
    }
    function isSet(value) {
        return value !== null && value !== undefined;
    }
    function preventDefault(e) {
        e.preventDefault();
    }
    function unique(array) {
        return array.filter(function (a) {
            return !this[a] ? (this[a] = true) : false;
        }, {});
    }
    function closest(value, to) {
        return Math.round(value / to) * to;
    }
    function offset(elem, orientation) {
        var rect = elem.getBoundingClientRect();
        var doc = elem.ownerDocument;
        var docElem = doc.documentElement;
        var pageOffset = getPageOffset(doc);
        if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
            pageOffset.x = 0;
        }
        return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    }
    function isNumeric(a) {
        return typeof a === "number" && !isNaN(a) && isFinite(a);
    }
    function addClassFor(element, className, duration) {
        if (duration > 0) {
            addClass(element, className);
            setTimeout(function () {
                removeClass(element, className);
            }, duration);
        }
    }
    function limit(a) {
        return Math.max(Math.min(a, 100), 0);
    }
    function asArray(a) {
        return Array.isArray(a) ? a : [a];
    }
    function countDecimals(numStr) {
        numStr = String(numStr);
        var pieces = numStr.split(".");
        return pieces.length > 1 ? pieces[1].length : 0;
    }
    function addClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.add(className);
        }
        else {
            el.className += " " + className;
        }
    }
    function removeClass(el, className) {
        if (el.classList && !/\s/.test(className)) {
            el.classList.remove(className);
        }
        else {
            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }
    function hasClass(el, className) {
        return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    }
    function getPageOffset(doc) {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
        var x = supportPageOffset
            ? window.pageXOffset
            : isCSS1Compat
                ? doc.documentElement.scrollLeft
                : doc.body.scrollLeft;
        var y = supportPageOffset
            ? window.pageYOffset
            : isCSS1Compat
                ? doc.documentElement.scrollTop
                : doc.body.scrollTop;
        return {
            x: x,
            y: y,
        };
    }
    function getActions() {
        return window.navigator.pointerEnabled
            ? {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
            }
            : window.navigator.msPointerEnabled
                ? {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp",
                }
                : {
                    start: "mousedown touchstart",
                    move: "mousemove touchmove",
                    end: "mouseup touchend",
                };
    }
    function getSupportsPassive() {
        var supportsPassive = false;
        try {
            var opts = Object.defineProperty({}, "passive", {
                get: function () {
                    supportsPassive = true;
                },
            });
            window.addEventListener("test", null, opts);
        }
        catch (e) { }
        return supportsPassive;
    }
    function getSupportsTouchActionNone() {
        return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    }
    function subRangeRatio(pa, pb) {
        return 100 / (pb - pa);
    }
    function fromPercentage(range, value, startRange) {
        return (value * 100) / (range[startRange + 1] - range[startRange]);
    }
    function toPercentage(range, value) {
        return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    }
    function isPercentage(range, value) {
        return (value * (range[1] - range[0])) / 100 + range[0];
    }
    function getJ(value, arr) {
        var j = 1;
        while (value >= arr[j]) {
            j += 1;
        }
        return j;
    }
    function toStepping(xVal, xPct, value) {
        if (value >= xVal.slice(-1)[0]) {
            return 100;
        }
        var j = getJ(value, xVal);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    }
    function fromStepping(xVal, xPct, value) {
        if (value >= 100) {
            return xVal.slice(-1)[0];
        }
        var j = getJ(value, xPct);
        var va = xVal[j - 1];
        var vb = xVal[j];
        var pa = xPct[j - 1];
        var pb = xPct[j];
        return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    }
    function getStep(xPct, xSteps, snap, value) {
        if (value === 100) {
            return value;
        }
        var j = getJ(value, xPct);
        var a = xPct[j - 1];
        var b = xPct[j];
        if (snap) {
            if (value - a > (b - a) / 2) {
                return b;
            }
            return a;
        }
        if (!xSteps[j - 1]) {
            return value;
        }
        return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }
    var Spectrum = (function () {
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [];
            this.xNumSteps = [];
            this.xHighestCompleteStep = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.snap = snap;
            var index;
            var ordered = [];
            Object.keys(entry).forEach(function (index) {
                ordered.push([asArray(entry[index]), index]);
            });
            ordered.sort(function (a, b) {
                return a[0][0] - b[0][0];
            });
            for (index = 0; index < ordered.length; index++) {
                this.handleEntryPoint(ordered[index][1], ordered[index][0]);
            }
            this.xNumSteps = this.xSteps.slice(0);
            for (index = 0; index < this.xNumSteps.length; index++) {
                this.handleStepPoint(index, this.xNumSteps[index]);
            }
        }
        Spectrum.prototype.getDistance = function (value) {
            var distances = [];
            for (var index = 0; index < this.xNumSteps.length - 1; index++) {
                distances[index] = fromPercentage(this.xVal, value, index);
            }
            return distances;
        };
        Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
            var xPct_index = 0;
            if (value < this.xPct[this.xPct.length - 1]) {
                while (value > this.xPct[xPct_index + 1]) {
                    xPct_index++;
                }
            }
            else if (value === this.xPct[this.xPct.length - 1]) {
                xPct_index = this.xPct.length - 2;
            }
            if (!direction && value === this.xPct[xPct_index + 1]) {
                xPct_index++;
            }
            if (distances === null) {
                distances = [];
            }
            var start_factor;
            var rest_factor = 1;
            var rest_rel_distance = distances[xPct_index];
            var range_pct = 0;
            var rel_range_distance = 0;
            var abs_distance_counter = 0;
            var range_counter = 0;
            if (direction) {
                start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            else {
                start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
            }
            while (rest_rel_distance > 0) {
                range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter];
                if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
                    rel_range_distance = range_pct * start_factor;
                    rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter];
                    start_factor = 1;
                }
                else {
                    rel_range_distance = ((distances[xPct_index + range_counter] * range_pct) / 100) * rest_factor;
                    rest_factor = 0;
                }
                if (direction) {
                    abs_distance_counter = abs_distance_counter - rel_range_distance;
                    if (this.xPct.length + range_counter >= 1) {
                        range_counter--;
                    }
                }
                else {
                    abs_distance_counter = abs_distance_counter + rel_range_distance;
                    if (this.xPct.length - range_counter >= 1) {
                        range_counter++;
                    }
                }
                rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
            }
            return value + abs_distance_counter;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2],
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1],
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j],
                },
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        Spectrum.prototype.hasNoSize = function () {
            return this.xVal[0] === this.xVal[this.xVal.length - 1];
        };
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        Spectrum.prototype.handleEntryPoint = function (index, value) {
            var percentage;
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider: 'range' value isn't numeric.");
            }
            this.xPct.push(percentage);
            this.xVal.push(value[0]);
            var value1 = Number(value[1]);
            if (!percentage) {
                if (!isNaN(value1)) {
                    this.xSteps[0] = value1;
                }
            }
            else {
                this.xSteps.push(isNaN(value1) ? false : value1);
            }
            this.xHighestCompleteStep.push(0);
        };
        Spectrum.prototype.handleStepPoint = function (i, n) {
            if (!n) {
                return;
            }
            if (this.xVal[i] === this.xVal[i + 1]) {
                this.xSteps[i] = this.xHighestCompleteStep[i] = this.xVal[i];
                return;
            }
            this.xSteps[i] =
                fromPercentage([this.xVal[i], this.xVal[i + 1]], n, 0) / subRangeRatio(this.xPct[i], this.xPct[i + 1]);
            var totalSteps = (this.xVal[i + 1] - this.xVal[i]) / this.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = this.xVal[i] + this.xNumSteps[i] * highestStep;
            this.xHighestCompleteStep[i] = step;
        };
        return Spectrum;
    }());
    var defaultFormatter = {
        to: function (value) {
            return value === undefined ? "" : value.toFixed(2);
        },
        from: Number,
    };
    var cssClasses = {
        target: "target",
        base: "base",
        origin: "origin",
        handle: "handle",
        handleLower: "handle-lower",
        handleUpper: "handle-upper",
        touchArea: "touch-area",
        horizontal: "horizontal",
        vertical: "vertical",
        background: "background",
        connect: "connect",
        connects: "connects",
        ltr: "ltr",
        rtl: "rtl",
        textDirectionLtr: "txt-dir-ltr",
        textDirectionRtl: "txt-dir-rtl",
        draggable: "draggable",
        drag: "state-drag",
        tap: "state-tap",
        active: "active",
        tooltip: "tooltip",
        pips: "pips",
        pipsHorizontal: "pips-horizontal",
        pipsVertical: "pips-vertical",
        marker: "marker",
        markerHorizontal: "marker-horizontal",
        markerVertical: "marker-vertical",
        markerNormal: "marker-normal",
        markerLarge: "marker-large",
        markerSub: "marker-sub",
        value: "value",
        valueHorizontal: "value-horizontal",
        valueVertical: "value-vertical",
        valueNormal: "value-normal",
        valueLarge: "value-large",
        valueSub: "value-sub",
    };
    exports.cssClasses = cssClasses;
    var INTERNAL_EVENT_NS = {
        tooltips: ".__tooltips",
        aria: ".__aria",
    };
    function testStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'step' is not numeric.");
        }
        parsed.singleStep = entry;
    }
    function testKeyboardPageMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");
        }
        parsed.keyboardPageMultiplier = entry;
    }
    function testKeyboardMultiplier(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");
        }
        parsed.keyboardMultiplier = entry;
    }
    function testKeyboardDefaultStep(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");
        }
        parsed.keyboardDefaultStep = entry;
    }
    function testRange(parsed, entry) {
        if (typeof entry !== "object" || Array.isArray(entry)) {
            throw new Error("noUiSlider: 'range' is not an object.");
        }
        if (entry.min === undefined || entry.max === undefined) {
            throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
        }
        parsed.spectrum = new Spectrum(entry, parsed.snap || false, parsed.singleStep);
    }
    function testStart(parsed, entry) {
        entry = asArray(entry);
        if (!Array.isArray(entry) || !entry.length) {
            throw new Error("noUiSlider: 'start' option is incorrect.");
        }
        parsed.handles = entry.length;
        parsed.start = entry;
    }
    function testSnap(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'snap' option must be a boolean.");
        }
        parsed.snap = entry;
    }
    function testAnimate(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'animate' option must be a boolean.");
        }
        parsed.animate = entry;
    }
    function testAnimationDuration(parsed, entry) {
        if (typeof entry !== "number") {
            throw new Error("noUiSlider: 'animationDuration' option must be a number.");
        }
        parsed.animationDuration = entry;
    }
    function testConnect(parsed, entry) {
        var connect = [false];
        var i;
        if (entry === "lower") {
            entry = [true, false];
        }
        else if (entry === "upper") {
            entry = [false, true];
        }
        if (entry === true || entry === false) {
            for (i = 1; i < parsed.handles; i++) {
                connect.push(entry);
            }
            connect.push(false);
        }
        else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
            throw new Error("noUiSlider: 'connect' option doesn't match handle count.");
        }
        else {
            connect = entry;
        }
        parsed.connect = connect;
    }
    function testOrientation(parsed, entry) {
        switch (entry) {
            case "horizontal":
                parsed.ort = 0;
                break;
            case "vertical":
                parsed.ort = 1;
                break;
            default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
        }
    }
    function testMargin(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'margin' option must be numeric.");
        }
        if (entry === 0) {
            return;
        }
        parsed.margin = parsed.spectrum.getDistance(entry);
    }
    function testLimit(parsed, entry) {
        if (!isNumeric(entry)) {
            throw new Error("noUiSlider: 'limit' option must be numeric.");
        }
        parsed.limit = parsed.spectrum.getDistance(entry);
        if (!parsed.limit || parsed.handles < 2) {
            throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.");
        }
    }
    function testPadding(parsed, entry) {
        var index;
        if (!isNumeric(entry) && !Array.isArray(entry)) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
            throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");
        }
        if (entry === 0) {
            return;
        }
        if (!Array.isArray(entry)) {
            entry = [entry, entry];
        }
        parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];
        for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
            if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
                throw new Error("noUiSlider: 'padding' option must be a positive number(s).");
            }
        }
        var totalPadding = entry[0] + entry[1];
        var firstValue = parsed.spectrum.xVal[0];
        var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];
        if (totalPadding / (lastValue - firstValue) > 1) {
            throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.");
        }
    }
    function testDirection(parsed, entry) {
        switch (entry) {
            case "ltr":
                parsed.dir = 0;
                break;
            case "rtl":
                parsed.dir = 1;
                break;
            default:
                throw new Error("noUiSlider: 'direction' option was not recognized.");
        }
    }
    function testBehaviour(parsed, entry) {
        if (typeof entry !== "string") {
            throw new Error("noUiSlider: 'behaviour' must be a string containing options.");
        }
        var tap = entry.indexOf("tap") >= 0;
        var drag = entry.indexOf("drag") >= 0;
        var fixed = entry.indexOf("fixed") >= 0;
        var snap = entry.indexOf("snap") >= 0;
        var hover = entry.indexOf("hover") >= 0;
        var unconstrained = entry.indexOf("unconstrained") >= 0;
        var invertConnects = entry.indexOf("invert-connects") >= 0;
        var dragAll = entry.indexOf("drag-all") >= 0;
        var smoothSteps = entry.indexOf("smooth-steps") >= 0;
        if (fixed) {
            if (parsed.handles !== 2) {
                throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");
            }
            testMargin(parsed, parsed.start[1] - parsed.start[0]);
        }
        if (invertConnects && parsed.handles !== 2) {
            throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");
        }
        if (unconstrained && (parsed.margin || parsed.limit)) {
            throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");
        }
        parsed.events = {
            tap: tap || snap,
            drag: drag,
            dragAll: dragAll,
            smoothSteps: smoothSteps,
            fixed: fixed,
            snap: snap,
            hover: hover,
            unconstrained: unconstrained,
            invertConnects: invertConnects,
        };
    }
    function testTooltips(parsed, entry) {
        if (entry === false) {
            return;
        }
        if (entry === true || isValidPartialFormatter(entry)) {
            parsed.tooltips = [];
            for (var i = 0; i < parsed.handles; i++) {
                parsed.tooltips.push(entry);
            }
        }
        else {
            entry = asArray(entry);
            if (entry.length !== parsed.handles) {
                throw new Error("noUiSlider: must pass a formatter for all handles.");
            }
            entry.forEach(function (formatter) {
                if (typeof formatter !== "boolean" && !isValidPartialFormatter(formatter)) {
                    throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.");
                }
            });
            parsed.tooltips = entry;
        }
    }
    function testHandleAttributes(parsed, entry) {
        if (entry.length !== parsed.handles) {
            throw new Error("noUiSlider: must pass a attributes for all handles.");
        }
        parsed.handleAttributes = entry;
    }
    function testAriaFormat(parsed, entry) {
        if (!isValidPartialFormatter(entry)) {
            throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
        }
        parsed.ariaFormat = entry;
    }
    function testFormat(parsed, entry) {
        if (!isValidFormatter(entry)) {
            throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");
        }
        parsed.format = entry;
    }
    function testKeyboardSupport(parsed, entry) {
        if (typeof entry !== "boolean") {
            throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");
        }
        parsed.keyboardSupport = entry;
    }
    function testDocumentElement(parsed, entry) {
        parsed.documentElement = entry;
    }
    function testCssPrefix(parsed, entry) {
        if (typeof entry !== "string" && entry !== false) {
            throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
        }
        parsed.cssPrefix = entry;
    }
    function testCssClasses(parsed, entry) {
        if (typeof entry !== "object") {
            throw new Error("noUiSlider: 'cssClasses' must be an object.");
        }
        if (typeof parsed.cssPrefix === "string") {
            parsed.cssClasses = {};
            Object.keys(entry).forEach(function (key) {
                parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
            });
        }
        else {
            parsed.cssClasses = entry;
        }
    }
    function testOptions(options) {
        var parsed = {
            margin: null,
            limit: null,
            padding: null,
            animate: true,
            animationDuration: 300,
            ariaFormat: defaultFormatter,
            format: defaultFormatter,
        };
        var tests = {
            step: { r: false, t: testStep },
            keyboardPageMultiplier: { r: false, t: testKeyboardPageMultiplier },
            keyboardMultiplier: { r: false, t: testKeyboardMultiplier },
            keyboardDefaultStep: { r: false, t: testKeyboardDefaultStep },
            start: { r: true, t: testStart },
            connect: { r: true, t: testConnect },
            direction: { r: true, t: testDirection },
            snap: { r: false, t: testSnap },
            animate: { r: false, t: testAnimate },
            animationDuration: { r: false, t: testAnimationDuration },
            range: { r: true, t: testRange },
            orientation: { r: false, t: testOrientation },
            margin: { r: false, t: testMargin },
            limit: { r: false, t: testLimit },
            padding: { r: false, t: testPadding },
            behaviour: { r: true, t: testBehaviour },
            ariaFormat: { r: false, t: testAriaFormat },
            format: { r: false, t: testFormat },
            tooltips: { r: false, t: testTooltips },
            keyboardSupport: { r: true, t: testKeyboardSupport },
            documentElement: { r: false, t: testDocumentElement },
            cssPrefix: { r: true, t: testCssPrefix },
            cssClasses: { r: true, t: testCssClasses },
            handleAttributes: { r: false, t: testHandleAttributes },
        };
        var defaults = {
            connect: false,
            direction: "ltr",
            behaviour: "tap",
            orientation: "horizontal",
            keyboardSupport: true,
            cssPrefix: "noUi-",
            cssClasses: cssClasses,
            keyboardPageMultiplier: 5,
            keyboardMultiplier: 1,
            keyboardDefaultStep: 10,
        };
        if (options.format && !options.ariaFormat) {
            options.ariaFormat = options.format;
        }
        Object.keys(tests).forEach(function (name) {
            if (!isSet(options[name]) && defaults[name] === undefined) {
                if (tests[name].r) {
                    throw new Error("noUiSlider: '" + name + "' is required.");
                }
                return;
            }
            tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
        });
        parsed.pips = options.pips;
        var d = document.createElement("div");
        var msPrefix = d.style.msTransform !== undefined;
        var noPrefix = d.style.transform !== undefined;
        parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
        var styles = [
            ["left", "top"],
            ["right", "bottom"],
        ];
        parsed.style = styles[parsed.dir][parsed.ort];
        return parsed;
    }
    function scope(target, options, originalOptions) {
        var actions = getActions();
        var supportsTouchActionNone = getSupportsTouchActionNone();
        var supportsPassive = supportsTouchActionNone && getSupportsPassive();
        var scope_Target = target;
        var scope_Base;
        var scope_ConnectBase;
        var scope_Handles;
        var scope_Connects;
        var scope_Pips;
        var scope_Tooltips;
        var scope_Spectrum = options.spectrum;
        var scope_Values = [];
        var scope_Locations = [];
        var scope_HandleNumbers = [];
        var scope_ActiveHandlesCount = 0;
        var scope_Events = {};
        var scope_ConnectsInverted = false;
        var scope_Document = target.ownerDocument;
        var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
        var scope_Body = scope_Document.body;
        var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
        function addNodeTo(addTarget, className) {
            var div = scope_Document.createElement("div");
            if (className) {
                addClass(div, className);
            }
            addTarget.appendChild(div);
            return div;
        }
        function addOrigin(base, handleNumber) {
            var origin = addNodeTo(base, options.cssClasses.origin);
            var handle = addNodeTo(origin, options.cssClasses.handle);
            addNodeTo(handle, options.cssClasses.touchArea);
            handle.setAttribute("data-handle", String(handleNumber));
            if (options.keyboardSupport) {
                handle.setAttribute("tabindex", "0");
                handle.addEventListener("keydown", function (event) {
                    return eventKeydown(event, handleNumber);
                });
            }
            if (options.handleAttributes !== undefined) {
                var attributes_1 = options.handleAttributes[handleNumber];
                Object.keys(attributes_1).forEach(function (attribute) {
                    handle.setAttribute(attribute, attributes_1[attribute]);
                });
            }
            handle.setAttribute("role", "slider");
            handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
            if (handleNumber === 0) {
                addClass(handle, options.cssClasses.handleLower);
            }
            else if (handleNumber === options.handles - 1) {
                addClass(handle, options.cssClasses.handleUpper);
            }
            origin.handle = handle;
            return origin;
        }
        function addConnect(base, add) {
            if (!add) {
                return false;
            }
            return addNodeTo(base, options.cssClasses.connect);
        }
        function addElements(connectOptions, base) {
            scope_ConnectBase = addNodeTo(base, options.cssClasses.connects);
            scope_Handles = [];
            scope_Connects = [];
            scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[0]));
            for (var i = 0; i < options.handles; i++) {
                scope_Handles.push(addOrigin(base, i));
                scope_HandleNumbers[i] = i;
                scope_Connects.push(addConnect(scope_ConnectBase, connectOptions[i + 1]));
            }
        }
        function addSlider(addTarget) {
            addClass(addTarget, options.cssClasses.target);
            if (options.dir === 0) {
                addClass(addTarget, options.cssClasses.ltr);
            }
            else {
                addClass(addTarget, options.cssClasses.rtl);
            }
            if (options.ort === 0) {
                addClass(addTarget, options.cssClasses.horizontal);
            }
            else {
                addClass(addTarget, options.cssClasses.vertical);
            }
            var textDirection = getComputedStyle(addTarget).direction;
            if (textDirection === "rtl") {
                addClass(addTarget, options.cssClasses.textDirectionRtl);
            }
            else {
                addClass(addTarget, options.cssClasses.textDirectionLtr);
            }
            return addNodeTo(addTarget, options.cssClasses.base);
        }
        function addTooltip(handle, handleNumber) {
            if (!options.tooltips || !options.tooltips[handleNumber]) {
                return false;
            }
            return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
        }
        function isSliderDisabled() {
            return scope_Target.hasAttribute("disabled");
        }
        function isHandleDisabled(handleNumber) {
            var handleOrigin = scope_Handles[handleNumber];
            return handleOrigin.hasAttribute("disabled");
        }
        function disable(handleNumber) {
            if (handleNumber !== null && handleNumber !== undefined) {
                scope_Handles[handleNumber].setAttribute("disabled", "");
                scope_Handles[handleNumber].handle.removeAttribute("tabindex");
            }
            else {
                scope_Target.setAttribute("disabled", "");
                scope_Handles.forEach(function (handle) {
                    handle.handle.removeAttribute("tabindex");
                });
            }
        }
        function enable(handleNumber) {
            if (handleNumber !== null && handleNumber !== undefined) {
                scope_Handles[handleNumber].removeAttribute("disabled");
                scope_Handles[handleNumber].handle.setAttribute("tabindex", "0");
            }
            else {
                scope_Target.removeAttribute("disabled");
                scope_Handles.forEach(function (handle) {
                    handle.removeAttribute("disabled");
                    handle.handle.setAttribute("tabindex", "0");
                });
            }
        }
        function removeTooltips() {
            if (scope_Tooltips) {
                removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
                scope_Tooltips.forEach(function (tooltip) {
                    if (tooltip) {
                        removeElement(tooltip);
                    }
                });
                scope_Tooltips = null;
            }
        }
        function tooltips() {
            removeTooltips();
            scope_Tooltips = scope_Handles.map(addTooltip);
            bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
                if (!scope_Tooltips || !options.tooltips) {
                    return;
                }
                if (scope_Tooltips[handleNumber] === false) {
                    return;
                }
                var formattedValue = values[handleNumber];
                if (options.tooltips[handleNumber] !== true) {
                    formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                }
                scope_Tooltips[handleNumber].innerHTML = formattedValue;
            });
        }
        function aria() {
            removeEvent("update" + INTERNAL_EVENT_NS.aria);
            bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
                scope_HandleNumbers.forEach(function (index) {
                    var handle = scope_Handles[index];
                    var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                    var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                    var now = positions[index];
                    var text = String(options.ariaFormat.to(unencoded[index]));
                    min = scope_Spectrum.fromStepping(min).toFixed(1);
                    max = scope_Spectrum.fromStepping(max).toFixed(1);
                    now = scope_Spectrum.fromStepping(now).toFixed(1);
                    handle.children[0].setAttribute("aria-valuemin", min);
                    handle.children[0].setAttribute("aria-valuemax", max);
                    handle.children[0].setAttribute("aria-valuenow", now);
                    handle.children[0].setAttribute("aria-valuetext", text);
                });
            });
        }
        function getGroup(pips) {
            if (pips.mode === exports.PipsMode.Range || pips.mode === exports.PipsMode.Steps) {
                return scope_Spectrum.xVal;
            }
            if (pips.mode === exports.PipsMode.Count) {
                if (pips.values < 2) {
                    throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");
                }
                var interval = pips.values - 1;
                var spread = 100 / interval;
                var values = [];
                while (interval--) {
                    values[interval] = interval * spread;
                }
                values.push(100);
                return mapToRange(values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Positions) {
                return mapToRange(pips.values, pips.stepped);
            }
            if (pips.mode === exports.PipsMode.Values) {
                if (pips.stepped) {
                    return pips.values.map(function (value) {
                        return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                    });
                }
                return pips.values;
            }
            return [];
        }
        function mapToRange(values, stepped) {
            return values.map(function (value) {
                return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
            });
        }
        function generateSpread(pips) {
            function safeIncrement(value, increment) {
                return Number((value + increment).toFixed(7));
            }
            var group = getGroup(pips);
            var indexes = {};
            var firstInRange = scope_Spectrum.xVal[0];
            var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
            var ignoreFirst = false;
            var ignoreLast = false;
            var prevPct = 0;
            group = unique(group.slice().sort(function (a, b) {
                return a - b;
            }));
            if (group[0] !== firstInRange) {
                group.unshift(firstInRange);
                ignoreFirst = true;
            }
            if (group[group.length - 1] !== lastInRange) {
                group.push(lastInRange);
                ignoreLast = true;
            }
            group.forEach(function (current, index) {
                var step;
                var i;
                var q;
                var low = current;
                var high = group[index + 1];
                var newPct;
                var pctDifference;
                var pctPos;
                var type;
                var steps;
                var realSteps;
                var stepSize;
                var isSteps = pips.mode === exports.PipsMode.Steps;
                if (isSteps) {
                    step = scope_Spectrum.xNumSteps[index];
                }
                if (!step) {
                    step = high - low;
                }
                if (high === undefined) {
                    high = low;
                }
                step = Math.max(step, 0.0000001);
                for (i = low; i <= high; i = safeIncrement(i, step)) {
                    newPct = scope_Spectrum.toStepping(i);
                    pctDifference = newPct - prevPct;
                    steps = pctDifference / (pips.density || 1);
                    realSteps = Math.round(steps);
                    stepSize = pctDifference / realSteps;
                    for (q = 1; q <= realSteps; q += 1) {
                        pctPos = prevPct + q * stepSize;
                        indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                    }
                    type = group.indexOf(i) > -1 ? exports.PipsType.LargeValue : isSteps ? exports.PipsType.SmallValue : exports.PipsType.NoValue;
                    if (!index && ignoreFirst && i !== high) {
                        type = 0;
                    }
                    if (!(i === high && ignoreLast)) {
                        indexes[newPct.toFixed(5)] = [i, type];
                    }
                    prevPct = newPct;
                }
            });
            return indexes;
        }
        function addMarking(spread, filterFunc, formatter) {
            var _a, _b;
            var element = scope_Document.createElement("div");
            var valueSizeClasses = (_a = {},
                _a[exports.PipsType.None] = "",
                _a[exports.PipsType.NoValue] = options.cssClasses.valueNormal,
                _a[exports.PipsType.LargeValue] = options.cssClasses.valueLarge,
                _a[exports.PipsType.SmallValue] = options.cssClasses.valueSub,
                _a);
            var markerSizeClasses = (_b = {},
                _b[exports.PipsType.None] = "",
                _b[exports.PipsType.NoValue] = options.cssClasses.markerNormal,
                _b[exports.PipsType.LargeValue] = options.cssClasses.markerLarge,
                _b[exports.PipsType.SmallValue] = options.cssClasses.markerSub,
                _b);
            var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
            var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
            addClass(element, options.cssClasses.pips);
            addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
            function getClasses(type, source) {
                var a = source === options.cssClasses.value;
                var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
            }
            function addSpread(offset, value, type) {
                type = filterFunc ? filterFunc(value, type) : type;
                if (type === exports.PipsType.None) {
                    return;
                }
                var node = addNodeTo(element, false);
                node.className = getClasses(type, options.cssClasses.marker);
                node.style[options.style] = offset + "%";
                if (type > exports.PipsType.NoValue) {
                    node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.value);
                    node.setAttribute("data-value", String(value));
                    node.style[options.style] = offset + "%";
                    node.innerHTML = String(formatter.to(value));
                }
            }
            Object.keys(spread).forEach(function (offset) {
                addSpread(offset, spread[offset][0], spread[offset][1]);
            });
            return element;
        }
        function removePips() {
            if (scope_Pips) {
                removeElement(scope_Pips);
                scope_Pips = null;
            }
        }
        function pips(pips) {
            removePips();
            var spread = generateSpread(pips);
            var filter = pips.filter;
            var format = pips.format || {
                to: function (value) {
                    return String(Math.round(value));
                },
            };
            scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
            return scope_Pips;
        }
        function baseSize() {
            var rect = scope_Base.getBoundingClientRect();
            var alt = ("offset" + ["Width", "Height"][options.ort]);
            return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
        }
        function attachEvent(events, element, callback, data) {
            var method = function (event) {
                var e = fixEvent(event, data.pageOffset, data.target || element);
                if (!e) {
                    return false;
                }
                if (isSliderDisabled() && !data.doNotReject) {
                    return false;
                }
                if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                    return false;
                }
                if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                    return false;
                }
                if (data.hover && e.buttons) {
                    return false;
                }
                if (!supportsPassive) {
                    e.preventDefault();
                }
                e.calcPoint = e.points[options.ort];
                callback(e, data);
                return;
            };
            var methods = [];
            events.split(" ").forEach(function (eventName) {
                element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                methods.push([eventName, method]);
            });
            return methods;
        }
        function fixEvent(e, pageOffset, eventTarget) {
            var touch = e.type.indexOf("touch") === 0;
            var mouse = e.type.indexOf("mouse") === 0;
            var pointer = e.type.indexOf("pointer") === 0;
            var x = 0;
            var y = 0;
            if (e.type.indexOf("MSPointer") === 0) {
                pointer = true;
            }
            if (e.type === "mousedown" && !e.buttons && !e.touches) {
                return false;
            }
            if (touch) {
                var isTouchOnTarget = function (checkTouch) {
                    var target = checkTouch.target;
                    return (target === eventTarget ||
                        eventTarget.contains(target) ||
                        (e.composed && e.composedPath().shift() === eventTarget));
                };
                if (e.type === "touchstart") {
                    var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                    if (targetTouches.length > 1) {
                        return false;
                    }
                    x = targetTouches[0].pageX;
                    y = targetTouches[0].pageY;
                }
                else {
                    var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                    if (!targetTouch) {
                        return false;
                    }
                    x = targetTouch.pageX;
                    y = targetTouch.pageY;
                }
            }
            pageOffset = pageOffset || getPageOffset(scope_Document);
            if (mouse || pointer) {
                x = e.clientX + pageOffset.x;
                y = e.clientY + pageOffset.y;
            }
            e.pageOffset = pageOffset;
            e.points = [x, y];
            e.cursor = mouse || pointer;
            return e;
        }
        function calcPointToPercentage(calcPoint) {
            var location = calcPoint - offset(scope_Base, options.ort);
            var proposal = (location * 100) / baseSize();
            proposal = limit(proposal);
            return options.dir ? 100 - proposal : proposal;
        }
        function getClosestHandle(clickedPosition) {
            var smallestDifference = 100;
            var handleNumber = false;
            scope_Handles.forEach(function (handle, index) {
                if (isHandleDisabled(index)) {
                    return;
                }
                var handlePosition = scope_Locations[index];
                var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                var isCloser = differenceWithThisHandle < smallestDifference;
                var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                if (isCloser || isCloserAfter || clickAtEdge) {
                    handleNumber = index;
                    smallestDifference = differenceWithThisHandle;
                }
            });
            return handleNumber;
        }
        function documentLeave(event, data) {
            if (event.type === "mouseout" &&
                event.target.nodeName === "HTML" &&
                event.relatedTarget === null) {
                eventEnd(event, data);
            }
        }
        function eventMove(event, data) {
            if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                return eventEnd(event, data);
            }
            var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
            var proposal = (movement * 100) / data.baseSize;
            moveHandles(movement > 0, proposal, data.locations, data.handleNumbers, data.connect);
        }
        function eventEnd(event, data) {
            if (data.handle) {
                removeClass(data.handle, options.cssClasses.active);
                scope_ActiveHandlesCount -= 1;
            }
            data.listeners.forEach(function (c) {
                scope_DocumentElement.removeEventListener(c[0], c[1]);
            });
            if (scope_ActiveHandlesCount === 0) {
                removeClass(scope_Target, options.cssClasses.drag);
                setZindex();
                if (event.cursor) {
                    scope_Body.style.cursor = "";
                    scope_Body.removeEventListener("selectstart", preventDefault);
                }
            }
            if (options.events.smoothSteps) {
                data.handleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, false, false);
                });
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                });
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                fireEvent("end", handleNumber);
            });
        }
        function eventStart(event, data) {
            if (data.handleNumbers.some(isHandleDisabled)) {
                return;
            }
            var handle;
            if (data.handleNumbers.length === 1) {
                var handleOrigin = scope_Handles[data.handleNumbers[0]];
                handle = handleOrigin.children[0];
                scope_ActiveHandlesCount += 1;
                addClass(handle, options.cssClasses.active);
            }
            event.stopPropagation();
            var listeners = [];
            var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                target: event.target,
                handle: handle,
                connect: data.connect,
                listeners: listeners,
                startCalcPoint: event.calcPoint,
                baseSize: baseSize(),
                pageOffset: event.pageOffset,
                handleNumbers: data.handleNumbers,
                buttonsProperty: event.buttons,
                locations: scope_Locations.slice(),
            });
            var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                target: event.target,
                handle: handle,
                listeners: listeners,
                doNotReject: true,
                handleNumbers: data.handleNumbers,
            });
            listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
            if (event.cursor) {
                scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                if (scope_Handles.length > 1) {
                    addClass(scope_Target, options.cssClasses.drag);
                }
                scope_Body.addEventListener("selectstart", preventDefault, false);
            }
            data.handleNumbers.forEach(function (handleNumber) {
                fireEvent("start", handleNumber);
            });
        }
        function eventTap(event) {
            event.stopPropagation();
            var proposal = calcPointToPercentage(event.calcPoint);
            var handleNumber = getClosestHandle(proposal);
            if (handleNumber === false) {
                return;
            }
            if (!options.events.snap) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            setHandle(handleNumber, proposal, true, true);
            setZindex();
            fireEvent("slide", handleNumber, true);
            fireEvent("update", handleNumber, true);
            if (!options.events.snap) {
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
            }
            else {
                eventStart(event, { handleNumbers: [handleNumber] });
            }
        }
        function eventHover(event) {
            var proposal = calcPointToPercentage(event.calcPoint);
            var to = scope_Spectrum.getStep(proposal);
            var value = scope_Spectrum.fromStepping(to);
            Object.keys(scope_Events).forEach(function (targetEvent) {
                if ("hover" === targetEvent.split(".")[0]) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, value);
                    });
                }
            });
        }
        function eventKeydown(event, handleNumber) {
            if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                return false;
            }
            var horizontalKeys = ["Left", "Right"];
            var verticalKeys = ["Down", "Up"];
            var largeStepKeys = ["PageDown", "PageUp"];
            var edgeKeys = ["Home", "End"];
            if (options.dir && !options.ort) {
                horizontalKeys.reverse();
            }
            else if (options.ort && !options.dir) {
                verticalKeys.reverse();
                largeStepKeys.reverse();
            }
            var key = event.key.replace("Arrow", "");
            var isLargeDown = key === largeStepKeys[0];
            var isLargeUp = key === largeStepKeys[1];
            var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
            var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
            var isMin = key === edgeKeys[0];
            var isMax = key === edgeKeys[1];
            if (!isDown && !isUp && !isMin && !isMax) {
                return true;
            }
            event.preventDefault();
            var to;
            if (isUp || isDown) {
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                if (step === null) {
                    return false;
                }
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
                }
                if (isLargeUp || isLargeDown) {
                    step *= options.keyboardPageMultiplier;
                }
                else {
                    step *= options.keyboardMultiplier;
                }
                step = Math.max(step, 0.0000001);
                step = (isDown ? -1 : 1) * step;
                to = scope_Values[handleNumber] + step;
            }
            else if (isMax) {
                to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
            }
            else {
                to = options.spectrum.xVal[0];
            }
            setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
            fireEvent("slide", handleNumber);
            fireEvent("update", handleNumber);
            fireEvent("change", handleNumber);
            fireEvent("set", handleNumber);
            return false;
        }
        function bindSliderEvents(behaviour) {
            if (!behaviour.fixed) {
                scope_Handles.forEach(function (handle, index) {
                    attachEvent(actions.start, handle.children[0], eventStart, {
                        handleNumbers: [index],
                    });
                });
            }
            if (behaviour.tap) {
                attachEvent(actions.start, scope_Base, eventTap, {});
            }
            if (behaviour.hover) {
                attachEvent(actions.move, scope_Base, eventHover, {
                    hover: true,
                });
            }
            if (behaviour.drag) {
                scope_Connects.forEach(function (connect, index) {
                    if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                        return;
                    }
                    var handleBefore = scope_Handles[index - 1];
                    var handleAfter = scope_Handles[index];
                    var eventHolders = [connect];
                    var handlesToDrag = [handleBefore, handleAfter];
                    var handleNumbersToDrag = [index - 1, index];
                    addClass(connect, options.cssClasses.draggable);
                    if (behaviour.fixed) {
                        eventHolders.push(handleBefore.children[0]);
                        eventHolders.push(handleAfter.children[0]);
                    }
                    if (behaviour.dragAll) {
                        handlesToDrag = scope_Handles;
                        handleNumbersToDrag = scope_HandleNumbers;
                    }
                    eventHolders.forEach(function (eventHolder) {
                        attachEvent(actions.start, eventHolder, eventStart, {
                            handles: handlesToDrag,
                            handleNumbers: handleNumbersToDrag,
                            connect: connect,
                        });
                    });
                });
            }
        }
        function bindEvent(namespacedEvent, callback) {
            scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
            scope_Events[namespacedEvent].push(callback);
            if (namespacedEvent.split(".")[0] === "update") {
                scope_Handles.forEach(function (a, index) {
                    fireEvent("update", index);
                });
            }
        }
        function isInternalNamespace(namespace) {
            return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
        }
        function removeEvent(namespacedEvent) {
            var event = namespacedEvent && namespacedEvent.split(".")[0];
            var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
            Object.keys(scope_Events).forEach(function (bind) {
                var tEvent = bind.split(".")[0];
                var tNamespace = bind.substring(tEvent.length);
                if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                    if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
                        delete scope_Events[bind];
                    }
                }
            });
        }
        function fireEvent(eventName, handleNumber, tap) {
            Object.keys(scope_Events).forEach(function (targetEvent) {
                var eventType = targetEvent.split(".")[0];
                if (eventName === eventType) {
                    scope_Events[targetEvent].forEach(function (callback) {
                        callback.call(scope_Self, scope_Values.map(options.format.to), handleNumber, scope_Values.slice(), tap || false, scope_Locations.slice(), scope_Self);
                    });
                }
            });
        }
        function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue, smoothSteps) {
            var distance;
            if (scope_Handles.length > 1 && !options.events.unconstrained) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, false);
                    to = Math.max(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, true);
                    to = Math.min(to, distance);
                }
            }
            if (scope_Handles.length > 1 && options.limit) {
                if (lookBackward && handleNumber > 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, false);
                    to = Math.min(to, distance);
                }
                if (lookForward && handleNumber < scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, true);
                    to = Math.max(to, distance);
                }
            }
            if (options.padding) {
                if (handleNumber === 0) {
                    distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], false);
                    to = Math.max(to, distance);
                }
                if (handleNumber === scope_Handles.length - 1) {
                    distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], true);
                    to = Math.min(to, distance);
                }
            }
            if (!smoothSteps) {
                to = scope_Spectrum.getStep(to);
            }
            to = limit(to);
            if (to === reference[handleNumber] && !getValue) {
                return false;
            }
            return to;
        }
        function inRuleOrder(v, a) {
            var o = options.ort;
            return (o ? a : v) + ", " + (o ? v : a);
        }
        function moveHandles(upward, proposal, locations, handleNumbers, connect) {
            var proposals = locations.slice();
            var firstHandle = handleNumbers[0];
            var smoothSteps = options.events.smoothSteps;
            var b = [!upward, upward];
            var f = [upward, !upward];
            handleNumbers = handleNumbers.slice();
            if (upward) {
                handleNumbers.reverse();
            }
            if (handleNumbers.length > 1) {
                handleNumbers.forEach(function (handleNumber, o) {
                    var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false, smoothSteps);
                    if (to === false) {
                        proposal = 0;
                    }
                    else {
                        proposal = to - proposals[handleNumber];
                        proposals[handleNumber] = to;
                    }
                });
            }
            else {
                b = f = [true];
            }
            var state = false;
            handleNumbers.forEach(function (handleNumber, o) {
                state =
                    setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o], false, smoothSteps) || state;
            });
            if (state) {
                handleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    fireEvent("slide", handleNumber);
                });
                if (connect != undefined) {
                    fireEvent("drag", firstHandle);
                }
            }
        }
        function transformDirection(a, b) {
            return options.dir ? 100 - a - b : a;
        }
        function updateHandlePosition(handleNumber, to) {
            scope_Locations[handleNumber] = to;
            scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
            var translation = transformDirection(to, 0) - scope_DirOffset;
            var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
            scope_Handles[handleNumber].style[options.transformRule] = translateRule;
            if (options.events.invertConnects && scope_Locations.length > 1) {
                var handlesAreInOrder = scope_Locations.every(function (position, index, locations) {
                    return index === 0 || position >= locations[index - 1];
                });
                if (scope_ConnectsInverted !== !handlesAreInOrder) {
                    invertConnects();
                    return;
                }
            }
            updateConnect(handleNumber);
            updateConnect(handleNumber + 1);
            if (scope_ConnectsInverted) {
                updateConnect(handleNumber - 1);
                updateConnect(handleNumber + 2);
            }
        }
        function setZindex() {
            scope_HandleNumbers.forEach(function (handleNumber) {
                var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                scope_Handles[handleNumber].style.zIndex = String(zIndex);
            });
        }
        function setHandle(handleNumber, to, lookBackward, lookForward, exactInput, smoothSteps) {
            if (!exactInput) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false, smoothSteps);
            }
            if (to === false) {
                return false;
            }
            updateHandlePosition(handleNumber, to);
            return true;
        }
        function updateConnect(index) {
            if (!scope_Connects[index]) {
                return;
            }
            var locations = scope_Locations.slice();
            if (scope_ConnectsInverted) {
                locations.sort(function (a, b) {
                    return a - b;
                });
            }
            var l = 0;
            var h = 100;
            if (index !== 0) {
                l = locations[index - 1];
            }
            if (index !== scope_Connects.length - 1) {
                h = locations[index];
            }
            var connectWidth = h - l;
            var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
            var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
            scope_Connects[index].style[options.transformRule] =
                translateRule + " " + scaleRule;
        }
        function resolveToValue(to, handleNumber) {
            if (to === null || to === false || to === undefined) {
                return scope_Locations[handleNumber];
            }
            if (typeof to === "number") {
                to = String(to);
            }
            to = options.format.from(to);
            if (to !== false) {
                to = scope_Spectrum.toStepping(to);
            }
            if (to === false || isNaN(to)) {
                return scope_Locations[handleNumber];
            }
            return to;
        }
        function valueSet(input, fireSetEvent, exactInput) {
            var values = asArray(input);
            var isInit = scope_Locations[0] === undefined;
            fireSetEvent = fireSetEvent === undefined ? true : fireSetEvent;
            if (options.animate && !isInit) {
                addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
            }
            scope_HandleNumbers.forEach(function (handleNumber) {
                setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
            });
            var i = scope_HandleNumbers.length === 1 ? 0 : 1;
            if (isInit && scope_Spectrum.hasNoSize()) {
                exactInput = true;
                scope_Locations[0] = 0;
                if (scope_HandleNumbers.length > 1) {
                    var space_1 = 100 / (scope_HandleNumbers.length - 1);
                    scope_HandleNumbers.forEach(function (handleNumber) {
                        scope_Locations[handleNumber] = handleNumber * space_1;
                    });
                }
            }
            for (; i < scope_HandleNumbers.length; ++i) {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
                });
            }
            setZindex();
            scope_HandleNumbers.forEach(function (handleNumber) {
                fireEvent("update", handleNumber);
                if (values[handleNumber] !== null && fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            });
        }
        function valueReset(fireSetEvent) {
            valueSet(options.start, fireSetEvent);
        }
        function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
            handleNumber = Number(handleNumber);
            if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                throw new Error("noUiSlider: invalid handle number, got: " + handleNumber);
            }
            setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
            fireEvent("update", handleNumber);
            if (fireSetEvent) {
                fireEvent("set", handleNumber);
            }
        }
        function valueGet(unencoded) {
            if (unencoded === void 0) {
                unencoded = false;
            }
            if (unencoded) {
                return scope_Values.length === 1 ? scope_Values[0] : scope_Values.slice(0);
            }
            var values = scope_Values.map(options.format.to);
            if (values.length === 1) {
                return values[0];
            }
            return values;
        }
        function destroy() {
            removeEvent(INTERNAL_EVENT_NS.aria);
            removeEvent(INTERNAL_EVENT_NS.tooltips);
            Object.keys(options.cssClasses).forEach(function (key) {
                removeClass(scope_Target, options.cssClasses[key]);
            });
            while (scope_Target.firstChild) {
                scope_Target.removeChild(scope_Target.firstChild);
            }
            delete scope_Target.noUiSlider;
        }
        function getNextStepsForHandle(handleNumber) {
            var location = scope_Locations[handleNumber];
            var nearbySteps = scope_Spectrum.getNearbySteps(location);
            var value = scope_Values[handleNumber];
            var increment = nearbySteps.thisStep.step;
            var decrement = null;
            if (options.snap) {
                return [
                    value - nearbySteps.stepBefore.startValue || null,
                    nearbySteps.stepAfter.startValue - value || null,
                ];
            }
            if (increment !== false) {
                if (value + increment > nearbySteps.stepAfter.startValue) {
                    increment = nearbySteps.stepAfter.startValue - value;
                }
            }
            if (value > nearbySteps.thisStep.startValue) {
                decrement = nearbySteps.thisStep.step;
            }
            else if (nearbySteps.stepBefore.step === false) {
                decrement = false;
            }
            else {
                decrement = value - nearbySteps.stepBefore.highestStep;
            }
            if (location === 100) {
                increment = null;
            }
            else if (location === 0) {
                decrement = null;
            }
            var stepDecimals = scope_Spectrum.countStepDecimals();
            if (increment !== null && increment !== false) {
                increment = Number(increment.toFixed(stepDecimals));
            }
            if (decrement !== null && decrement !== false) {
                decrement = Number(decrement.toFixed(stepDecimals));
            }
            return [decrement, increment];
        }
        function getNextSteps() {
            return scope_HandleNumbers.map(getNextStepsForHandle);
        }
        function updateOptions(optionsToUpdate, fireSetEvent) {
            var v = valueGet();
            var updateAble = [
                "margin",
                "limit",
                "padding",
                "range",
                "animate",
                "snap",
                "step",
                "format",
                "pips",
                "tooltips",
                "connect",
            ];
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    originalOptions[name] = optionsToUpdate[name];
                }
            });
            var newOptions = testOptions(originalOptions);
            updateAble.forEach(function (name) {
                if (optionsToUpdate[name] !== undefined) {
                    options[name] = newOptions[name];
                }
            });
            scope_Spectrum = newOptions.spectrum;
            options.margin = newOptions.margin;
            options.limit = newOptions.limit;
            options.padding = newOptions.padding;
            if (options.pips) {
                pips(options.pips);
            }
            else {
                removePips();
            }
            if (options.tooltips) {
                tooltips();
            }
            else {
                removeTooltips();
            }
            scope_Locations = [];
            valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
            if (optionsToUpdate.connect) {
                updateConnectOption();
            }
        }
        function updateConnectOption() {
            while (scope_ConnectBase.firstChild) {
                scope_ConnectBase.removeChild(scope_ConnectBase.firstChild);
            }
            for (var i = 0; i <= options.handles; i++) {
                scope_Connects[i] = addConnect(scope_ConnectBase, options.connect[i]);
                updateConnect(i);
            }
            bindSliderEvents({ drag: options.events.drag, fixed: true });
        }
        function invertConnects() {
            scope_ConnectsInverted = !scope_ConnectsInverted;
            testConnect(options, options.connect.map(function (b) { return !b; }));
            updateConnectOption();
        }
        function setupSlider() {
            scope_Base = addSlider(scope_Target);
            addElements(options.connect, scope_Base);
            bindSliderEvents(options.events);
            valueSet(options.start);
            if (options.pips) {
                pips(options.pips);
            }
            if (options.tooltips) {
                tooltips();
            }
            aria();
        }
        setupSlider();
        var scope_Self = {
            destroy: destroy,
            steps: getNextSteps,
            on: bindEvent,
            off: removeEvent,
            get: valueGet,
            set: valueSet,
            setHandle: valueSetHandle,
            reset: valueReset,
            disable: disable,
            enable: enable,
            __moveHandles: function (upward, proposal, handleNumbers) {
                moveHandles(upward, proposal, scope_Locations, handleNumbers);
            },
            options: originalOptions,
            updateOptions: updateOptions,
            target: scope_Target,
            removePips: removePips,
            removeTooltips: removeTooltips,
            getPositions: function () {
                return scope_Locations.slice();
            },
            getTooltips: function () {
                return scope_Tooltips;
            },
            getOrigins: function () {
                return scope_Handles;
            },
            pips: pips,
        };
        return scope_Self;
    }
    function initialize(target, originalOptions) {
        if (!target || !target.nodeName) {
            throw new Error("noUiSlider: create requires a single element, got: " + target);
        }
        if (target.noUiSlider) {
            throw new Error("noUiSlider: Slider was already initialized.");
        }
        var options = testOptions(originalOptions);
        var api = scope(target, options, originalOptions);
        target.noUiSlider = api;
        return api;
    }
    exports.default = {
        __spectrum: Spectrum,
        cssClasses: cssClasses,
        create: initialize,
    };
});
dS("@itthink/frontend-lib-atoms/slider/slider.atom.css","a2a3825e",["price","slider","noUi-base","noUi-touch-area","noUi-connects","noUi-horizontal","noUi-handle","noUi-target","noUi-connect","noUi-origin","noUi-txt-dir-rtl","noUi-vertical","noUi-state-tap","noUi-state-drag","noUi-draggable","noUi-active","noUi-pips","noUi-value","noUi-value-sub","noUi-marker","noUi-marker-sub","noUi-marker-large","noUi-pips-horizontal","noUi-value-horizontal","noUi-rtl","noUi-marker-horizontal","noUi-pips-vertical","noUi-value-vertical","noUi-marker-vertical","noUi-tooltip"]);dA("@itthink/frontend-lib-atoms/utils/currency", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.truncateFixedAmount = truncateFixedAmount;
    exports.fromNumberToString = fromNumberToString;
    function truncateFixedAmount(numberAsString, fractions = 2) {
        if (fractions < 0)
            throw new Error(`Fractions must be more than or equal to zero`);
        if (fractions == 0)
            return String(Math.floor(Number(numberAsString)));
        if (fractions > 18)
            throw new Error(`Fractions must be less or equals than 18`);
        if (isNaN(Number(numberAsString)))
            throw new Error(`Number ${numberAsString} is not a number`);
        let indexPoint = numberAsString.indexOf(".");
        if (indexPoint === -1)
            indexPoint = numberAsString.length;
        let integerPart = numberAsString.slice(0, indexPoint);
        if (integerPart === "")
            integerPart = "0";
        let fractionsPart = numberAsString.slice(indexPoint + 1);
        if (fractionsPart === "")
            fractionsPart = "0";
        fractionsPart = fractionsPart.slice(0, fractions).padEnd(fractions, "0");
        return `${integerPart}.${fractionsPart}`;
    }
    function fromNumberToString(number) {
        return ('' + +number).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/, function (a, b, c, d, e) {
            return e < 0
                ? b + '0.' + Array(1 - e - c.length).join("0") + c + d
                : b + c + d + Array(e - d.length + 1).join("0");
        });
    }
});
dA("@itthink/frontend-lib-atoms/slider/price", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "nouislider", "./slider.atom.css", "utils/currency.js"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, nouislider_1, style, currency_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PriceSlider = void 0;
    class PriceSlider extends atomicreact_ts_1.Atom {
        slider;
        _value;
        prefixStyle;
        preRender = () => {
            if (this.prop.step === undefined)
                this.prop.step = Math.abs(this.prop.max - this.prop.min) / 10;
            if (this.prop.pipStep === undefined)
                this.prop.pipStep = this.prop.step;
            if (this.prop.pipHideFirstLast === undefined)
                this.prop.pipHideFirstLast = false;
            if (this.prop.start === undefined)
                this.prop.start = ((this.prop.max - this.prop.min) / 2) + this.prop.min;
            if (this.prop.min > this.prop.max)
                throw new Error('Min size must be lower than max size');
            if (this.prop.prefix === undefined)
                this.prop.prefix = "";
            if (this.prop.pipPrefix === undefined)
                this.prop.pipPrefix = true;
            if (this.prop.sufix === undefined)
                this.prop.sufix = "";
            if (this.prop.pipSufix === undefined)
                this.prop.pipSufix = false;
            if (this.prop.mark === undefined)
                this.prop.mark = ".";
            if (this.prop.decimal === undefined)
                this.prop.decimal = 2;
            if (this.prop.pipDecimal === undefined)
                this.prop.pipDecimal = this.prop.decimal;
            if (this.prop.priceAlign === undefined)
                this.prop.priceAlign = "center";
            if (this.prop.baseBarColor === undefined)
                this.prop.baseBarColor = "#FFF";
            if (this.prop.activeBarColor === undefined)
                this.prop.activeBarColor = "#FFF";
            this.prop.start = this.validValue(this.prop.start);
            this._value = this.prop.start;
        };
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: this.prop.class, children: [(0, jsx_runtime_1.jsxs)("h2", { sub: this.sub.price, class: style.price, style: `text-align: ${this.prop.priceAlign}`, children: [this.prop.prefix, (0, jsx_runtime_1.jsx)("span", { sub: this.sub.valueInt }), (0, jsx_runtime_1.jsx)("span", { sub: this.sub.valueDec }), (0, jsx_runtime_1.jsx)("span", { children: this.prop.sufix })] }), (0, jsx_runtime_1.jsx)("div", { class: style.slider, sub: this.sub.slider })] }));
        onRender() {
            this.prefixStyle = `${style.slider.split("_")[0]}_noUi-`;
            this.slider = (0, nouislider_1.create)(this.sub.slider, {
                cssPrefix: this.prefixStyle,
                start: [this.prop.start],
                connect: [true, false],
                range: {
                    'min': [this.prop.min],
                    'max': [this.prop.max]
                },
                pips: {
                    mode: nouislider_1.PipsMode.Values,
                    values: Array.from({ length: (Math.abs((this.prop.max - this.prop.min)) / (this.prop.pipStep)) + 1 }, (_, i) => {
                        if (this.prop.pipHideFirstLast && (i == 0 || i == ((this.prop.max - this.prop.min) / (this.prop.pipStep))))
                            return null;
                        return (this.prop.min + (i * this.prop.pipStep));
                    }).filter((n) => (n !== null)),
                    format: {
                        to: (n) => {
                            return this.formatValue(n, this.prop.pipPrefix, this.prop.pipSufix, this.prop.pipDecimal);
                        }
                    },
                    density: (this.prop.max > this.prop.min) ? this.prop.pipStep * 2 : this.prop.pipStep / 2
                }
            });
            this.slider.on("change", (values, indexHandler) => {
                if (this.prop.onChange) {
                    this.prop.onChange(this.value);
                }
            });
            this.slider.on("update", (values, indexHandler) => {
                this.value = Number(values[indexHandler]);
            });
            const onWheelMouse = (event) => {
                if (event.deltaY < 0) {
                    this.prev();
                }
                else if (event.deltaY > 0) {
                    this.next();
                }
                event.preventDefault();
            };
            this.getElement().addEventListener("mouseenter", () => {
                window.addEventListener('wheel', onWheelMouse, { passive: false });
            });
            this.getElement().addEventListener("mouseleave", () => {
                window.removeEventListener('wheel', onWheelMouse);
            });
            this.getSliderElement("connects").style.backgroundColor = this.prop.baseBarColor;
            this.getSliderElement("connect").style.backgroundColor = this.prop.activeBarColor;
            this.slider.set(this.prop.start);
        }
        get value() {
            return this._value;
        }
        set value(value) {
            let newValue = this.validValue(value);
            this.sub.valueInt.innerText = `${(0, currency_js_1.truncateFixedAmount)((0, currency_js_1.fromNumberToString)(newValue), 0)}${this.prop.mark}`;
            let decimal = (0, currency_js_1.truncateFixedAmount)((0, currency_js_1.fromNumberToString)(newValue), this.prop.decimal);
            this.sub.valueDec.innerText = decimal.slice(decimal.indexOf(".") + 1);
            let mustContinue = true;
            if (this.prop.onUpdate) {
                mustContinue = this.prop.onUpdate(newValue) ?? true;
            }
            if (!mustContinue) {
                return;
            }
            this._value = newValue;
        }
        formatValue(num, prefix = true, sufix = true, decimal = this.prop.decimal) {
            return `${(prefix) ? `${this.prop.prefix} ` : ""}${(0, currency_js_1.truncateFixedAmount)((0, currency_js_1.fromNumberToString)(num), decimal).replace(".", this.prop.mark)}${(sufix) ? ` ${this.prop.sufix}` : ""}`;
        }
        validValue(value) {
            let newValue = value;
            const prev = (Math.floor(((value - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min;
            const next = prev + this.prop.step;
            if (value <= this.prop.min)
                newValue = this.prop.min;
            else if (value >= this.prop.max)
                newValue = this.prop.max;
            else if ((value - prev) <= (next - value))
                newValue = prev;
            else
                newValue = next;
            return newValue;
        }
        next() {
            const prev = (Math.floor(((this.value - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min;
            const next = prev + this.prop.step;
            this.value = next;
        }
        prev() {
            const prev = (Math.floor((((this.value - 0.000001) - this.prop.min) / this.prop.step)) * this.prop.step) + this.prop.min;
            this.value = prev;
        }
        getSliderElement(className) {
            return this.sub.slider.querySelector(`.${this.prefixStyle}${className}`);
        }
    }
    exports.PriceSlider = PriceSlider;
});
dA("@itthink/frontend-lib-atoms/demo", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts", "./demo.atom.css", "./utils/css.js", "./utils/theme.js", "buttons/simple.jsx", "buttons/light.jsx", "qrcode/index.jsx", "slider/price.jsx"], function (require, exports, jsx_runtime_1, atomicreact_ts_1, demo_atom_css_1, css_js_1, theme_js_1, simple_jsx_1, light_jsx_1, index_jsx_1, price_jsx_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DemoLibrary = exports.Widget = exports.Panel = void 0;
    class Panel extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: demo_atom_css_1.panel, children: [(0, jsx_runtime_1.jsx)("h3", { children: this.prop.title }), (0, jsx_runtime_1.jsx)("section", { nucleus: true })] }));
    }
    exports.Panel = Panel;
    class Widget extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: demo_atom_css_1.widget, children: [(0, jsx_runtime_1.jsx)("h4", { children: this.prop.title }), (0, jsx_runtime_1.jsx)("section", { nucleus: true })] }));
    }
    exports.Widget = Widget;
    class DemoLibrary extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { class: demo_atom_css_1.demo, children: [(0, jsx_runtime_1.jsxs)(Panel, { title: "Buttons", children: [(0, jsx_runtime_1.jsx)(Widget, { title: "SimpleButton", children: (0, jsx_runtime_1.jsx)(simple_jsx_1.SimpleButton, { label: "Lorem ipsum" }) }), (0, jsx_runtime_1.jsx)(Widget, { title: "LightButton", children: (0, jsx_runtime_1.jsx)(light_jsx_1.LightButton, { label: "Lorem Ipsum" }) })] }), (0, jsx_runtime_1.jsx)(Panel, { title: "QrCode", children: (0, jsx_runtime_1.jsx)(Widget, { title: "QrCode", children: (0, jsx_runtime_1.jsx)(index_jsx_1.QrCode, { value: "lorem ipsum", bgColor: (0, theme_js_1.getTheme)().BackgroundSecondary, fgColor: (0, theme_js_1.getTheme)().ActivePrimary, rotationAnimation: true, floatAnimation: false, rotationPeriod: 20, floatingZPeriod: 3, level: "H", padding: 5 }) }) }), (0, jsx_runtime_1.jsx)(Panel, { title: "Sliders", children: (0, jsx_runtime_1.jsx)(Widget, { title: "Price", children: (0, jsx_runtime_1.jsx)(price_jsx_1.PriceSlider, { sub: this.sub.priceSlider, min: 0, max: 100, step: 1, pipHideFirstLast: true, pipStep: 10, start: 48.5, prefix: "R$", pipPrefix: true, sufix: "BRL", pipSufix: false, mark: ",", decimal: 2, pipDecimal: 0, priceAlign: "center", baseBarColor: (0, theme_js_1.getTheme)().DarkPrimary, activeBarColor: (0, theme_js_1.getTheme)().ActivePrimary }) }) })] }));
    }
    exports.DemoLibrary = DemoLibrary;
    atomicreact_ts_1.AtomicReact.onLoad = () => {
        (0, css_js_1.setGlobalCSSVar)((0, theme_js_1.getTheme)(), "theme");
        atomicreact_ts_1.AtomicReact.renderElement(new DemoLibrary(), document.getElementById("demo_library"));
    };
});
atomicreact.load();atomicreact.lib.AtomicReact.setEnv(`{}`);