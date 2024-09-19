import { setGlobalCSSVar } from "./css.js"

interface Theme {
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

export const DarkTheme: Theme = {
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
}

export const LightTheme: Theme = {
    DarkPrimary: "#9956fe",
    ActivePrimary: "#A855F7",
    ActiveSecondary: "#9333EA",
    Off: "#D5BAE5",
    OffDisabled: "#d5bae54d",
    BackgroundPrimary: "#a3bfff",
    BackgroundSecondary: "#a6c5f7",
    LabelPrimary: "#000000",
    LabelSecondary: "#767b93",
    LabelTertiary: "#bac2e8",
    ShadowPrimary: "#bc7bfa99",
    SuccessPrimary: "#60E47D",
    SuccessDark: "#397D48",
    ErrorPrimary: "#C68F8F",
    ErrorDark: "#C75D5D",
    Highlight: "#0c9986"
}


export let __CurrentTheme : Theme = DarkTheme

export function getTheme(): Theme {
    return __CurrentTheme
}

export function setTheme(theme: Theme) {
    __CurrentTheme = theme
    setGlobalCSSVar(getTheme(), "theme")
}

