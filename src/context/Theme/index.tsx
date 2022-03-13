import React from 'react'

import { ThemeProvider } from 'styled-components'

import { MODES } from './constants'
import { Mode, ThemeProviderType } from './types'

const AppThemeContext = React.createContext({} as ThemeProviderType)
AppThemeContext.displayName = 'AppThemeContext'

export const AppThemeProdiver: React.FC = ({ children }) => {

    const [currentMode, setCurrentMode] = React.useState<Mode>('light')

    const toggleMode = React.useCallback(() => {
        setCurrentMode(state => state === 'light' ? 'dark' : 'light')
    }, [])

    const value: ThemeProviderType = {
        currentMode,
        toggleMode
    }

    return (
        <AppThemeContext.Provider value={value}>
            <ThemeProvider theme={MODES[currentMode]}>
                { children }    
            </ThemeProvider>
        </AppThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = React.useContext(AppThemeContext)
    return context
}