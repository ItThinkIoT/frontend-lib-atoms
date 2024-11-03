import { setGlobalCSSVar } from "../utils/css.js"

export interface Theme {
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

export let __CurrentTheme : Theme

export function getTheme(): Theme {
    return __CurrentTheme
}

export function setTheme(theme: Theme) {
    __CurrentTheme = theme
    setGlobalCSSVar(getTheme(), "theme")
}

