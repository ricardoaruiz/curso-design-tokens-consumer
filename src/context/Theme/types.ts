export type ThemeProviderType = {
    currentMode: Mode,
    toggleMode: () => void
}

export type Mode = 'light' | 'dark'

export type ModesType = {
    [key: string]: any
}