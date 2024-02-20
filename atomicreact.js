/*<Loader>*/
/* Define Context Value */
function defCtxVal(paramName, value, ref = this, callback, opts = {}) {
    if (this[paramName] == undefined) {
        Object.defineProperty(ref, paramName, {
            value,
            ...opts
        })
    }
    if (callback) callback()
}

defCtxVal("ATOMIC_REACT", "atomicreact")
defCtxVal("ATOMIC_REACT_ALIAS", [ATOMIC_REACT, "atomicreact-ts"])
defCtxVal("DEFINES", "defines")
defCtxVal("ATOMS", "atoms")
defCtxVal("MODULES", "modules")
defCtxVal("LIB", "lib")
defCtxVal("LOAD", "load")

defCtxVal(ATOMIC_REACT, {})
defCtxVal(DEFINES, {}, this[ATOMIC_REACT])
defCtxVal(ATOMS, {}, this[ATOMIC_REACT])
defCtxVal(LOAD, () => {
    window.addEventListener(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED, function (e) {
        window.addEventListener("load", function (e) {
            this[ATOMIC_REACT][LIB].AtomicReact.load()
        })
    })
    if (Object.keys(this[ATOMIC_REACT][DEFINES]).length == 0) {
        window.dispatchEvent(new CustomEvent(this[ATOMIC_REACT][LIB].AtomicReact.AtomicEvents.LOADED))
    }
}, this[ATOMIC_REACT])

defCtxVal("gotoEndOfPath", function (context, next, paths, contextPath = "") {
    if (context[next] == undefined) {
        Object.defineProperty(context, next, { value: {}, configurable: true })
    }

    if (paths.length == 1) {
        return { context: context[next], path: paths[0], contextPath }
    }

    context = context[next]
    next = paths[0]
    paths.shift()
    contextPath += `${contextPath == "" ? "" : "/"}${next}`
    return gotoEndOfPath(context, next, paths, contextPath)
})

defCtxVal("getValueOfPath", function getValueOfPath(context, splitedPaths) {
    if (splitedPaths.length == 1) {
        return context[splitedPaths[0]] || null
    }
    const next = splitedPaths[0]
    if (context[next] == undefined) {
        return null
    }
    splitedPaths.shift()
    return getValueOfPath(context[next], splitedPaths)
})

defCtxVal("normalizeModuleName", function (moduleName) {
    return moduleName.replaceAll("../", "").replaceAll("./", "").replaceAll(".tsx", "").replaceAll(".jsx", "").replaceAll(".ts", "").replaceAll(".js", "")
})

defCtxVal("isLocalModule", function (moduleName) {
    return (moduleName.indexOf("./") == 0 && moduleName.indexOf("../") == -1)
})

defCtxVal("sumPath", function (absolutePath, relativePath) {
    let absolute = absolutePath.split("/")
    const backTimes = relativePath.split("../").length - 1
    if (absolute.length <= backTimes) return normalizeModuleName(relativePath)
    absolute.splice(absolute.length - backTimes)
    return normalizeModuleName(`${absolute.join("/")}${absolutePath == "" ? "" : "/"}${relativePath}`)
})

defCtxVal("require", function (moduleName, contextPath = "") {

    const moduleParts = moduleName.split("/")
    if (ATOMIC_REACT_ALIAS.includes(moduleParts[0])) {
        if (moduleParts.length == 1) return (this[ATOMIC_REACT][LIB] || this[ATOMIC_REACT])
        else return getValueOfPath(this, moduleParts)
    }

    let path = ""
    if (moduleName.indexOf("./") >= 0) {
        path = sumPath(contextPath, moduleName)
    } else {
        path = sumPath(ATOMS, moduleName)
    }

    return new Proxy({ path }, {
        get: (target, prop) => {
            return getValueOfPath(window[ATOMIC_REACT], target.path.split("/"))[prop]
        }
    })
    // return (this[ATOMIC_REACT])
})

defCtxVal("define", function (moduleName, inputs, func) {

    let _exports = { "__esModule": true }

    if (ATOMIC_REACT_ALIAS.includes(moduleName) && !ATOMIC_REACT[moduleName]) {
        func(require, _exports, ...inputs.slice(2).map(i => require(i)))

        defCtxVal("lib", _exports, this[ATOMIC_REACT])
        defCtxVal("AtomicReact", this[ATOMIC_REACT].lib.AtomicReact)
        defCtxVal("global", this[ATOMIC_REACT], AtomicReact)
        defCtxVal("JSX", this[ATOMIC_REACT].lib.JSX)

        return
    }

    const paths = moduleName.split("/")

    const endOfPath = gotoEndOfPath(this, ATOMIC_REACT, paths)
    let context = endOfPath.context
    let path = endOfPath.path
    let contextPath = endOfPath.contextPath

    const imports = [require, _exports, ...inputs.slice(2).map(i => (require(i, contextPath)))]

    let importFail = false
    for (let i = 0; i < imports.length; i++) {
        if (imports[i] !== null) continue

        importFail = true

        /* let's schedule to define this module when the import was defined */
        let moduleNameFuture = sumPath(contextPath, inputs[i])

        if (this[ATOMIC_REACT][DEFINES][moduleNameFuture] == undefined) {
            Object.defineProperty(this[ATOMIC_REACT][DEFINES], moduleNameFuture, { value: {}, configurable: true })
        }

        /* Define dependency */
        Object.defineProperty(this[ATOMIC_REACT][DEFINES][moduleNameFuture], moduleName, {
            value: () => {
                define(moduleName, inputs, func, true)
            }, configurable: true
        })
    }

    if (importFail) return

    try {
        func(...imports)
    } catch (e) {
        return
    }

    /* Declare this atom */
    Object.defineProperty(context, path, { value: _exports, configurable: true })

    /* Save factory path */
    Object.getOwnPropertyNames(_exports).forEach(key => {
        if ([this[ATOMIC_REACT][LIB].Atom.name].includes(Object.getPrototypeOf(_exports[key])["name"])) {
            Object.defineProperty(_exports[key].prototype, "__factory", { value: `${moduleName}`, configurable: true })
        }
    })

    if (this[ATOMIC_REACT][DEFINES][moduleName] != undefined) {
        /* ReDefines atoms that are importing this atom */
        let deps = Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][moduleName])
        for (let i = 0; i < deps.length; i++) {
            let dependent = deps[i]
            this[ATOMIC_REACT][DEFINES][moduleName][dependent]()
        }

        // for (let dependent of Object.getOwnPropertyNames(this[ATOMIC_REACT][DEFINES][moduleName])) {
        //     this[ATOMIC_REACT][DEFINES][moduleName][dependent]()
        // }
        /* Remove from defines */
        delete this[ATOMIC_REACT][DEFINES][moduleName]
    }

}, this)
/* Define Atom */
defCtxVal("dA", function (moduleName, inputs, func) {
    return define(`${ATOMS}/${moduleName}`, inputs, func)
})
/* Define Module */
defCtxVal("dM", function (moduleName, inputs, func) {
    return define(`${MODULES}/${moduleName}`, inputs, func)
})
/* Define Style  Module CSS */
defCtxVal("dS", function (moduleName, uniqueID, tokens) {
    dA(moduleName, ["require", "exports", ATOMIC_REACT], function (require, exports, atomicreact_1) {

        Object.defineProperties(exports, { "__esModule": { value: true }, "default": { value: {} } });
        tokens
            .forEach(token => {
                exports.default[token] = `${uniqueID}_${token}`;
                Object.defineProperty(exports, token, {
                    get: function () {
                        return exports.default[token]
                    }
                })
            })
    })
})
/*</Loader>*/

define("atomicreact", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSX = exports.Atom = exports.AtomicReact = exports.EAtomicEvent = void 0;
    (function (EAtomicEvent) {
        EAtomicEvent["LOADED"] = "<ATOMIC.LOADED>";
    })(exports.EAtomicEvent || (exports.EAtomicEvent = {}));
    class AtomicReact {
        static hotReload;
        static onLoads = [];
        static set onLoad(callback) {
            AtomicReact.onLoads.push(callback);
        }
        static load() {
            for (let i = 0; i < AtomicReact.onLoads.length; i++) {
                try {
                    AtomicReact.onLoads[i]();
                }
                catch (e) { }
            }
        }
        static ClientVariables = {
            Id: "a-i",
            Nucleus: "a-n",
            Sub: "a-s",
            SubOf: "a-sof"
        };
        static AtomicVariables = {
            Nucleus: "nucleus",
            Sub: "sub"
        };
        static AtomicEvents = {
            LOADED: exports.EAtomicEvent.LOADED
        };
        static global;
        static makeID(length = 6) {
            let id = '';
            for (let i = 0; i < length; i++) {
                id += String.fromCharCode(65 + Math.floor(Math.random() * 25));
            }
            if (AtomicReact.getElement(id))
                return AtomicReact.makeID(length);
            return id;
        }
        static render(atom, attrs = { [AtomicReact.ClientVariables.Id]: atom.id }) {
            if (!atom.struct)
                return "";
            const beforeAtom = Object.assign({}, exports.JSX["jsx-runtime"].atom);
            exports.JSX["jsx-runtime"].atom = {
                atom: atom
            };
            let rendered = atom.struct();
            let attributes = "";
            Object.getOwnPropertyNames(attrs).forEach((attrName) => {
                attributes += " " + `${attrName}="${attrs[attrName]}"`;
            });
            const tag = rendered.trim();
            if (tag.startsWith("<") && tag.endsWith(">")) {
                const posToSplit = (tag.charAt(tag.length - 2) == "/") ? tag.length - 2 : tag.indexOf(">");
                rendered = `${tag.slice(0, posToSplit)}${attributes}${tag.slice(posToSplit, tag.length)}`;
            }
            exports.JSX["jsx-runtime"].atom = Object.assign({}, beforeAtom);
            return rendered;
        }
        static renderElement(atom, domElement, insertPosition, attrs) {
            if (!insertPosition) {
                domElement.innerHTML = AtomicReact.render(atom, attrs);
            }
            else {
                if (insertPosition === "replace") {
                    if (!domElement.parentNode)
                        throw new Error(`Can't replace element. Element don't have parent node`);
                    domElement.innerHTML = "";
                    const parentElement = document.createElement("div");
                    parentElement.innerHTML = AtomicReact.render(atom, attrs);
                    domElement.parentElement.replaceChild(parentElement.firstChild, domElement);
                }
                else {
                    domElement.insertAdjacentHTML(insertPosition, AtomicReact.render(atom, attrs));
                }
            }
            const rootAtom = document.querySelector(`[${AtomicReact.ClientVariables.Id}="${atom.id}"]`);
            rootAtom.Atomic = {
                atom: atom
            };
            exports.JSX["jsx-runtime"].queue.reverse().forEach((item) => {
                let atom = document.querySelector(`[${AtomicReact.ClientVariables.Id}="${item.atom.id}"]`);
                if (!atom)
                    return;
                atom.Atomic = {
                    atom: item.atom
                };
                if (atom.Atomic.atom.onRender) {
                    try {
                        atom.Atomic.atom.onRender();
                    }
                    catch (e) {
                        console.error(e);
                    }
                }
            });
            exports.JSX["jsx-runtime"].queue = [];
            if (rootAtom.Atomic.atom.onRender) {
                try {
                    rootAtom.Atomic.atom.onRender();
                }
                catch (e) {
                    console.error(e);
                }
            }
            return rootAtom;
        }
        static getSub(atom, subName) {
            return document.querySelector(`[${AtomicReact.ClientVariables.SubOf}="${atom.id}"][${AtomicReact.ClientVariables.Sub}="${subName}"]`);
        }
        static getAtomicSub(atom, subName) {
            return AtomicReact.getAtom(AtomicReact.getSub(atom, subName));
        }
        static getNucleus(atom) {
            return document.querySelector(`[${AtomicReact.ClientVariables.Nucleus}="${atom.id}"]`);
        }
        static getElement(atomId) {
            return document.querySelector(`[${AtomicReact.ClientVariables.Id}="${atomId}"]`);
        }
        static getAtom(element) {
            if (!element || !(element.Atomic) || !(element.Atomic.atom)) {
                return null;
            }
            return element.Atomic.atom;
        }
        static add(atom, atomToInsert, insertPosition) {
            insertPosition = insertPosition || "beforeend";
            AtomicReact.renderElement(atomToInsert, atom.nucleus, insertPosition);
            if (atom.onAdded) {
                atom.onAdded(atomToInsert);
            }
        }
    }
    exports.AtomicReact = AtomicReact;
    class Atom {
        prop;
        id;
        struct = null;
        sub;
        constructor(prop, id) {
            this.prop = prop;
            this.id = id;
            if (!this.prop)
                this.prop = {};
            if (!this.id)
                this.id = AtomicReact.makeID();
            if (this.prop["children"])
                delete this.prop["children"];
            this.sub = new Proxy({}, {
                get: (obj, attrName) => {
                    return AtomicReact.getAtomicSub(this, attrName) || AtomicReact.getSub(this, attrName) || attrName;
                }
            });
        }
        getElement() {
            return AtomicReact.getElement(this.id);
        }
        add(atom, insertPosition) {
            AtomicReact.add(this, atom, insertPosition);
        }
        get nucleus() {
            return AtomicReact.getNucleus(this);
        }
        onRender() { }
        onAdded(atom) { }
    }
    exports.Atom = Atom;
    exports.JSX = {
        ["jsx-runtime"]: {
            atom: null,
            queue: [],
            jsxs(source, props) {
                props = props || {};
                let atom = null;
                if (typeof source == "function") {
                    atom = {
                        atom: null
                    };
                    if (Object.getPrototypeOf(source)["name"] && Object.getPrototypeOf(source)["name"] === Atom.name) {
                        let instance = new source(Object.assign({}, props));
                        exports.JSX["jsx-runtime"].queue.push({
                            atom: instance
                        });
                        atom.atom = instance;
                        source = instance.struct ? instance.struct : () => ("");
                    }
                    let beforeAtom = Object.assign({}, exports.JSX["jsx-runtime"].atom);
                    exports.JSX["jsx-runtime"].atom = Object.assign({}, atom);
                    source = source.call(this);
                    exports.JSX["jsx-runtime"].atom = Object.assign({}, beforeAtom);
                }
                if (props["children"] === undefined)
                    props["children"] = [];
                if (typeof props["children"] == "string")
                    props["children"] = [props["children"]];
                let attributes = Object.keys(props)
                    .map(key => {
                    if (key === "children")
                        return null;
                    if (key === AtomicReact.AtomicVariables.Nucleus)
                        return `${AtomicReact.ClientVariables.Nucleus}="${exports.JSX["jsx-runtime"].atom.atom.id}"`;
                    const value = props[key];
                    if (key === AtomicReact.AtomicVariables.Sub)
                        return `${AtomicReact.ClientVariables.SubOf}="${exports.JSX["jsx-runtime"].atom.atom.id}" ${AtomicReact.ClientVariables.Sub}="${value}"`;
                    return (atom) ? null : `${key}="${value}"`;
                })
                    .filter(i => i != null);
                if (atom) {
                    attributes.push(...[`${AtomicReact.ClientVariables.Id}="${atom.atom.id}"`]);
                    if (props["children"] && props["children"].length > 0) {
                        Object.defineProperty(atom.atom, "__nucleus_children", { value: props["children"].join("") });
                        let regExpNucleusTag = new RegExp('<(.)*' + AtomicReact.ClientVariables.Nucleus + '[^>]*', 'gi');
                        let openEndNucleusTag = -1;
                        while (regExpNucleusTag.exec(source)) {
                            openEndNucleusTag = regExpNucleusTag.lastIndex + 1;
                        }
                        if (openEndNucleusTag != -1) {
                            source = `${source.slice(0, openEndNucleusTag)}${props["children"].join("")}${source.slice(openEndNucleusTag, source.length)}`;
                        }
                    }
                }
                const attributesAsString = attributes.join(" ");
                const tag = source.trim();
                if (tag.startsWith("<") && tag.endsWith(">")) {
                    const posToSplit = (tag.charAt(tag.length - 2) == "/") ? tag.length - 2 : tag.indexOf(">");
                    source = `${tag.slice(0, posToSplit)} ${attributesAsString}${tag.slice(posToSplit, tag.length)}`;
                }
                else {
                    source = `<${source} ${attributesAsString}> ${((props["children"]).join) ? (props["children"]).join("") : (props["children"])}</${source}>`;
                }
                return source;
            },
            jsx(name, props) {
                return exports.JSX["jsx-runtime"].jsxs(name, props);
            },
        }
    };
});
dM("HotReload/lib", ["require", "exports", "../../lib.js"], function (require, exports, lib_js_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = exports.CommandType = exports.__config = void 0;
    exports.__config = {
        host: "127.0.0.1",
        port: 1337,
        verbose: false
    };
    (function (CommandType) {
        CommandType[CommandType["CSS"] = 0] = "CSS";
        CommandType[CommandType["SCRIPT"] = 1] = "SCRIPT";
        CommandType[CommandType["EVAL"] = 2] = "EVAL";
        CommandType[CommandType["REFRESH_BUNDLE"] = 3] = "REFRESH_BUNDLE";
    })(exports.CommandType || (exports.CommandType = {}));
    class Client {
        static client;
        static connect(host = exports.__config.host, port = exports.__config.port) {
            const wsServerURL = `ws://${host}:${port}`;
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
                        case exports.CommandType.CSS:
                            this.redefineCSS(msgData.uid, msgData.command.content);
                            break;
                        case exports.CommandType.SCRIPT:
                            this.redefineScript(msgData.command.moduleName, msgData.command.content);
                            break;
                        case exports.CommandType.EVAL:
                            eval(msgData.command.content);
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
        static redefineScript(moduleName, script) {
            eval(script);
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
        static redefineCSS(uid, css) {
            let style = document.querySelector(`style[for="${uid}"]`);
            if (!style) {
                style = document.createElement("style");
                style.setAttribute("for", uid);
                document.head.appendChild(style);
            }
            style.innerHTML = css;
        }
        static refreshBundle(version) {
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
    exports.__config = Object.assign((exports.__config) ? exports.__config : {}, { "host": "127.0.0.1", "port": 1718, "verbose": false });
});
dA("simple_library/index.tsx", ["require", "exports", "atomicreact/lib/JSX/jsx-runtime", "atomicreact-ts"], function (require, exports, jsx_runtime_1, atomicreact_ts_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MyApp = void 0;
    class MyApp extends atomicreact_ts_1.Atom {
        struct = () => ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: this.prop?.myTitle }), (0, jsx_runtime_1.jsx)("button", { sub: this.sub.myBtn, children: "My Button - click me and see the console" })] }));
        onRender() {
            this.sub.myBtn.onclick = () => {
                console.log("Nice! You clicked me");
            };
        }
    }
    exports.MyApp = MyApp;
    atomicreact_ts_1.AtomicReact.onLoad = () => {
        console.log(`AtomicReact loaded! Rendering atoms...`);
        atomicreact_ts_1.AtomicReact.renderElement((new MyApp({ myTitle: "This is my APP" })), document.getElementById("app"));
    };
});
atomicreact.load();