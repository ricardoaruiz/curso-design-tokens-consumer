export type ThemeProviderType = {
    currentMode: Mode,
    toggleMode: () => void
}

export type Mode = 'dark' | 'light'

export type ModesType = {
    [key: string]: string
}