export function getGlobalCSSVar(key: string) {
    return getComputedStyle(document.body).getPropertyValue(`--${key}`)
}

/* export function setGlobalCSSVar(keyValuePair: {[key: string]: string}) {
    for (const key of Object.keys(keyValuePair)) {
        document.body.style.setProperty(`--${key}`, keyValuePair[key])
    }
} */
export function setGlobalCSSVar(keyValuePair: Object, reason?: string) {
    let styleTag = document.querySelector(`style[for="${reason}"]`) || document.createElement("style")
    styleTag.setAttribute("for", reason)
    let rootVars = ''
    for (const key of Object.keys(keyValuePair)) {
        rootVars += `--${key}: ${keyValuePair[key]};`
    }
    styleTag.innerHTML = `:root {${rootVars}}`
    document.getElementsByTagName('head')[0].appendChild(styleTag)
}