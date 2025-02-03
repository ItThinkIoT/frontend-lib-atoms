import { setGlobalCSSVar } from "../utils/css.js"

export interface BaseTheme {
    Pure: string,
    DarkPrimary: string,
    ActivePrimary: string,
    ActiveSecondary: string,
    Off: string,
    OffDisabled: string,
    BackgroundPrimary: string,
    BackgroundSecondary: string,
    LabelPrimary: string,
    LabelSecondary: string,
    LabelTertiary: string,
    ShadowPrimary: string,
    SuccessPrimary: string,
    SuccessDark: string,
    ErrorPrimary: string,
    ErrorDark: string,
    Highlight: string
}

type ColorSufix = "rgb" | "rgba_10" | "rgba_20" | "rgba_30" | "rgba_40" | "rgba_50" | "rgba_60" | "rgba_70" | "rgba_80" | "rgba_90"

export type Theme = BaseTheme & {
    [key in keyof BaseTheme as `${key}_${ColorSufix}`]: string
}

export let __CurrentTheme: Theme

export function getTheme(): Theme {
    return __CurrentTheme
}

export function setTheme(theme: BaseTheme): Theme {
    if (__CurrentTheme === undefined) __CurrentTheme = {} as any

    for (const key of Object.keys(theme)) {
        __CurrentTheme[key] = theme[key]

        /* Extended color variants */
        const rgb = hexToRgb(theme[key])
        if (rgb === null) continue
  
        __CurrentTheme[`${key}_rgb`] = `${rgb.r},${rgb.g},${rgb.b}`

        /* Set Alpha values */
        for (const percent of [10, 20, 30, 40, 50, 60, 70, 80, 90]) {
            // const hex = Math.round(255*(percent/100)).toString(16)
            __CurrentTheme[`${key}_rgba_${percent}`] = `${rgb.r},${rgb.g},${rgb.b},${percent / 100}`
        }
    }

    // __CurrentTheme = theme
    setGlobalCSSVar(getTheme(), "theme")
    window.dispatchEvent(new Event("onThemeChanged"))

    return getTheme()
}

export function onThemeChanged(callback = () => { }, { once }: { once: boolean } = { once: false }) {
    const onThemeChanged = () => {
        if (once) window.removeEventListener("onThemeChanged", onThemeChanged)
        callback()
    }
    window.addEventListener("onThemeChanged", onThemeChanged)
}


function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    hex = hex.replace(/^#/, "")

    if (![3, 6].includes(hex.length)) {
        return null
    }

    if (hex.length === 3) {
        hex = hex.split("").map(char => char + char).join("");
    }

    const bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255,
    };
}