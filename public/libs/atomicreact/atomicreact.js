function t(t,e,i=this,n,c={}){null==this[t]&&Object.defineProperty(i,t,{value:e,...c}),n&&n()}t("ATOMIC_REACT","atomicreact"),t("ATOMIC_REACT_ALIAS",[ATOMIC_REACT,"atomicreact-ts"]),t("DEFINES","defines"),t("ATOMS","atoms"),t("MODULES","modules"),t("LIB","lib"),t("LOAD","load"),t(ATOMIC_REACT,{}),t(DEFINES,{},this[ATOMIC_REACT]),t(ATOMS,{},this[ATOMIC_REACT]),t(LOAD,(()=>{window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED,(function(t){window.addEventListener("load",(function(t){this[ATOMIC_REACT][LIB].AtomicReact.load()}))})),0==Object.keys(this[ATOMIC_REACT][DEFINES]).length&&window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED))}),this[ATOMIC_REACT]),t("gotoEndOfPath",(function(t,e,i,n=""){return null==t[e]&&Object.defineProperty(t,e,{value:{},configurable:!0}),1==i.length?{context:t[e],path:i[0],contextPath:n}:(t=t[e],e=i[0],i.shift(),n+=`${""==n?"":"/"}${e}`,gotoEndOfPath(t,e,i,n))})),t("getValueOfPath",(function t(e,i){if(1==i.length)return e[i[0]]||null;const n=i[0];return null==e[n]?null:(i.shift(),t(e[n],i))})),t("normalizeModuleName",(function(t){return t.replaceAll("../","").replaceAll("./","").replaceAll(".tsx","").replaceAll(".jsx","").replaceAll(".ts","").replaceAll(".js","")})),t("isLocalModule",(function(t){return 0==t.indexOf("./")&&-1==t.indexOf("../")})),t("sumPath",(function(t,e){let i=t.split("/");const n=e.split("../").length-1;return i.length<=n?normalizeModuleName(e):(i.splice(i.length-n),normalizeModuleName(`${i.join("/")}${""==t?"":"/"}${e}`))})),t("require",(function(t,e=""){const i=t.split("/");if(ATOMIC_REACT_ALIAS.includes(i[0]))return 1==i.length?this[ATOMIC_REACT][LIB]||this[ATOMIC_REACT]:getValueOfPath(this,i);let n="";return n=t.indexOf("./")>=0?sumPath(e,t):sumPath(ATOMS,t),new Proxy({path:n},{get:(t,e)=>getValueOfPath(window[ATOMIC_REACT],t.path.split("/"))[e]})})),t("define",(function(e,i,n){let c={__esModule:!0};if(ATOMIC_REACT_ALIAS.includes(e)&&!ATOMIC_REACT[e])return n(require,c,...i.slice(2).map((t=>require(t)))),t("lib",c,this[ATOMIC_REACT]),t("AtomicReact",this[ATOMIC_REACT].lib.AtomicReact),t("global",this[ATOMIC_REACT],AtomicReact),void t("JSX",this[ATOMIC_REACT].lib.JSX);const o=e.split("/"),r=gotoEndOfPath(this,ATOMIC_REACT,o);let a=r.context,l=r.path,s=r.contextPath;const u=[require,c,...i.slice(2).map((t=>require(t,s)))];let A=!1;for(let t=0;t<u.length;t++){if(null!==u[t])continue;A=!0;let c=sumPath(s,i[t]);null==this[ATOMIC_REACT][DEFINES][c]&&Object.defineProperty(this[ATOMIC_REACT][DEFINES],c,{value:{},configurable:!0}),Object.defineProperty(this[ATOMIC_REACT][DEFINES][c],e,{value:()=>{define(e,i,n,!0)},configurable:!0})}if(!A){try{n(...u)}catch(t){return}if(Object.defineProperty(a,l,{value:c,configurable:!0}),Object.getOwnPropertyNames(c).forEach((t=>{[this[ATOMIC_REACT][LIB].Atom.name].includes(Object.getPrototypeOf(c[t]).name)&&Object.defineProperty(c[t].prototype,"__factory",{value:`${e}`,configurable:!0})})),null!=this[ATOMIC_REACT][DEFINES][e]){let t=Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][e]);for(let i=0;i<t.length;i++){let n=t[i];this[ATOMIC_REACT][DEFINES][e][n]()}delete this[ATOMIC_REACT][DEFINES][e]}}}),this),t("dA",(function(t,e,i){return define(`${ATOMS}/${t}`,e,i)})),t("dM",(function(t,e,i){return define(`${MODULES}/${t}`,e,i)})),t("dS",(function(t,e,i){dA(t,["require","exports",ATOMIC_REACT],(function(t,n,c){Object.defineProperties(n,{__esModule:{value:!0},default:{value:{}}}),i.forEach((t=>{n.default[t]=`${e}_${t}`,Object.defineProperty(n,t,{get:function(){return n.default[t]}})}))}))})),define("atomicreact",["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.JSX=e.Atom=e.AtomicReact=e.EAtomicEvent=void 0,(e.EAtomicEvent||(e.EAtomicEvent={})).LOADED="<ATOMIC.LOADED>";class AtomicReact{static hotReload;static onLoads=[];static set onLoad(t){AtomicReact.onLoads.push(t)}static load(){for(let t=0;t<AtomicReact.onLoads.length;t++)try{AtomicReact.onLoads[t]()}catch(t){}}static ClientVariables={Id:"a-i",Nucleus:"a-n",Sub:"a-s",SubOf:"a-sof"};static AtomicVariables={Nucleus:"nucleus",Sub:"sub"};static AtomicEvents={LOADED:e.EAtomicEvent.LOADED};static global;static makeID(t=6){let e="";for(let i=0;i<t;i++)e+=String.fromCharCode(65+Math.floor(25*Math.random()));return AtomicReact.getElement(e)?AtomicReact.makeID(t):e}static render(t,i={[AtomicReact.ClientVariables.Id]:t.id}){if(t.preRender)try{t.preRender()}catch(t){console.error(t)}if(!t.struct)return"";const n=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom={atom:t};let c=t.struct(),o="";Object.getOwnPropertyNames(i).forEach((t=>{o+=` ${t}="${i[t]}"`}));const r=c.trim();if(r.startsWith("<")&&r.endsWith(">")){const t="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");c=`${r.slice(0,t)}${o}${r.slice(t,r.length)}`}return e.JSX["jsx-runtime"].atom=Object.assign({},n),c}static renderElement(t,i,n,c){if(n)if("replace"===n){if(!i.parentNode)throw new Error("Can't replace element. Element don't have parent node");i.innerHTML="";const e=document.createElement("div");e.innerHTML=AtomicReact.render(t,c),i.parentElement.replaceChild(e.firstChild,i)}else i.insertAdjacentHTML(n,AtomicReact.render(t,c));else i.innerHTML=AtomicReact.render(t,c);const o=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t.id}"]`);if(o.Atomic={atom:t},e.JSX["jsx-runtime"].queue.reverse().forEach((t=>{let e=document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t.atom.id}"]`);if(e&&(e.Atomic={atom:t.atom},e.Atomic.atom.onRender))try{e.Atomic.atom.onRender()}catch(t){console.error(t)}})),e.JSX["jsx-runtime"].queue=[],o.Atomic.atom.onRender)try{o.Atomic.atom.onRender()}catch(t){console.error(t)}return o}static getSub(t,e){return document.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${t.id}"][${AtomicReact.ClientVariables.Sub}="${e}"]`)}static getAtomicSub(t,e){return AtomicReact.getAtom(AtomicReact.getSub(t,e))}static getNucleus(t){return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${t.id}"]`)}static getElement(t){return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${t}"]`)}static getAtom(t){return t&&t.Atomic&&t.Atomic.atom?t.Atomic.atom:null}static add(t,e,i){i=i||"beforeend",AtomicReact.renderElement(e,t.nucleus,i),t.onAdded&&t.onAdded(e)}}e.AtomicReact=AtomicReact;class Atom{prop;id;struct=null;preRender;sub;constructor(t,e){this.prop=t,this.id=e,this.prop||(this.prop={}),this.id||(this.id=AtomicReact.makeID()),this.prop.children&&delete this.prop.children,this.sub=new Proxy({},{get:(t,e)=>AtomicReact.getAtomicSub(this,e)||AtomicReact.getSub(this,e)||e})}getElement(){return AtomicReact.getElement(this.id)}add(t,e){AtomicReact.add(this,t,e)}get nucleus(){return AtomicReact.getNucleus(this)}onRender(){}onAdded(t){}}e.Atom=Atom,e.JSX={"jsx-runtime":{atom:null,queue:[],jsxs(t,i){i=i||{};let n=null;if("function"==typeof t){if(n={atom:null},Object.getPrototypeOf(t).name&&Object.getPrototypeOf(t).name===Atom.name){let c=new t(Object.assign({},i));if(e.JSX["jsx-runtime"].queue.push({atom:c}),n.atom=c,c.preRender)try{c.preRender()}catch(t){console.error(t)}t=c.struct?c.struct:()=>""}let c=Object.assign({},e.JSX["jsx-runtime"].atom);e.JSX["jsx-runtime"].atom=Object.assign({},n),t=t.call(this),e.JSX["jsx-runtime"].atom=Object.assign({},c)}void 0===i.children&&(i.children=[]),"string"==typeof i.children&&(i.children=[i.children]);let c=Object.keys(i).map((t=>{if("children"===t)return null;if(t===AtomicReact.AtomicVariables.Nucleus)return`${AtomicReact.ClientVariables.Nucleus}="${e.JSX["jsx-runtime"].atom.atom.id}"`;const c=i[t];return t===AtomicReact.AtomicVariables.Sub?`${AtomicReact.ClientVariables.SubOf}="${e.JSX["jsx-runtime"].atom.atom.id}" ${AtomicReact.ClientVariables.Sub}="${c}"`:n?null:`${t}="${c}"`})).filter((t=>null!=t));if(n&&(c.push(`${AtomicReact.ClientVariables.Id}="${n.atom.id}"`),i.children&&i.children.length>0)){Object.defineProperty(n.atom,"__nucleus_children",{value:i.children.join("")});let e=new RegExp("<(.)*"+AtomicReact.ClientVariables.Nucleus+"[^>]*","gi"),c=-1;for(;e.exec(t);)c=e.lastIndex+1;-1!=c&&(t=`${t.slice(0,c)}${i.children.join("")}${t.slice(c,t.length)}`)}const o=c.join(" "),r=t.trim();if(r.startsWith("<")&&r.endsWith(">")){const e="/"==r.charAt(r.length-2)?r.length-2:r.indexOf(">");t=`${r.slice(0,e)} ${o}${r.slice(e,r.length)}`}else t=`<${t} ${o}> ${i.children.join?i.children.join(""):i.children}</${t}>`;return t},jsx:(t,i)=>e.JSX["jsx-runtime"].jsxs(t,i)}}}));dS("simple_frontend_library/atoms/buttons/dangerous_horse.atom.css","a07e7389",["btn"]);dA("simple_frontend_library/atoms/buttons/dangerous_horse",["require","exports","atomicreact/lib/JSX/jsx-runtime","atomicreact-ts","./dangerous_horse.atom.css"],(function(t,s,e,o,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.DangerousHorseButton=void 0;class DangerousHorseButton extends o.Atom{onRender(){this.prop.onClick&&(this.sub.button.onclick=t=>{t.preventDefault(),this.prop.onClick()})}struct=()=>(0,e.jsx)("div",{children:(0,e.jsx)("button",{class:r.btn,sub:this.sub.button,children:this.prop.label})})}s.DangerousHorseButton=DangerousHorseButton}));dS("simple_frontend_library/demo.atom.css","a41c9c90",["demo","demo>*","panel","panel>[a-n]","widget"]);dS("simple_frontend_library/atoms/buttons/tiny_chipmunk.atom.css","a0d5f5c5",["container","buttons","button","span","p","start"]);dA("simple_frontend_library/atoms/buttons/tiny_chipmunk",["require","exports","atomicreact/lib/JSX/jsx-runtime","atomicreact-ts","./tiny_chipmunk.atom.css"],(function(t,s,n,i,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.TinyChipmunkButton=void 0;class TinyChipmunkButton extends i.Atom{preRender=()=>{console.log("TinyChipmunkButton pre render"),this.prop.started||(this.prop.started="Started")};onRender(){console.log("TinyChipmunkButton on render"),this.prop.onClick&&(this.sub.button.onclick=t=>{t.preventDefault(),this.prop.onClick(this)})}struct=()=>(0,n.jsx)("div",{class:o.container,children:(0,n.jsx)("div",{class:o.buttons,children:(0,n.jsxs)("button",{sub:this.sub.button,children:[(0,n.jsx)("span",{}),(0,n.jsx)("p",{"data-start":this.prop.started,"data-action":this.prop.action,"data-label":this.prop.label})]})})});start(){this.sub.button.classList.add(o.start)}stop(){this.sub.button.classList.remove(o.start)}toogle(){this.sub.button.classList.toggle(o.start)}isStarted(){return this.sub.button.classList.contains(o.start)}}s.TinyChipmunkButton=TinyChipmunkButton}));dA("simple_frontend_library/demo",["require","exports","atomicreact/lib/JSX/jsx-runtime","atomicreact-ts","./atoms/buttons/dangerous_horse.jsx","./demo.atom.css","./atoms/buttons/tiny_chipmunk.jsx"],(function(e,t,s,o,i,n,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DemoLibrary=t.Widget=t.Panel=void 0;class Panel extends o.Atom{struct=()=>(0,s.jsxs)("div",{class:n.panel,children:[(0,s.jsx)("h3",{children:this.prop.title}),(0,s.jsx)("section",{nucleus:!0})]})}t.Panel=Panel;class Widget extends o.Atom{struct=()=>(0,s.jsxs)("div",{class:n.widget,children:[(0,s.jsx)("h4",{children:this.prop.title}),(0,s.jsx)("section",{nucleus:!0})]})}t.Widget=Widget;class DemoLibrary extends o.Atom{struct=()=>(0,s.jsx)("div",{class:n.demo,children:(0,s.jsxs)(Panel,{title:"Buttons",children:[(0,s.jsx)(Widget,{title:"Dangerous Horse",children:(0,s.jsx)(i.DangerousHorseButton,{label:"Demo Button",onClick:()=>{console.log("Clicked on button")}})}),(0,s.jsx)(Widget,{title:"Tiny Chipmunk",children:(0,s.jsx)(l.TinyChipmunkButton,{label:"Demo Button",action:"My Action",onClick:e=>{e.toogle(),console.log("Clicked on button Tiny Chipmunk. Is Started? ",e.isStarted())}})})]})})}t.DemoLibrary=DemoLibrary,o.AtomicReact.onLoad=()=>{o.AtomicReact.renderElement(new DemoLibrary,document.getElementById("demo_library"))}}));atomicreact.load();