import React from 'react'
import { MODES } from './constants'
import { Mode, ThemeProviderType } from './types'

const ThemeContext = React.createContext({} as ThemeProviderType)

/**
 * Theme Provider
 * @param param0 
 * @returns 
 */
export const ThemeProvider: React.FC = ({ children }) => {

    const [currentMode, setCurrentMode] = React.useState<Mode>('light')

    const toggleMode = React.useCallback(() => {
        setCurrentMode(state => state === 'light' ? 'dark' : 'light')
    }, [])

    const setBodyBgColor = React.useCallback(() => {
        currentMode === 'light'
            ? (document.body.style.backgroundColor = '#fff')
            : (document.body.style.backgroundColor = '#333')
    }, [currentMode])

    React.useEffect(() => {
        const themeStyle = document.querySelector('#theme-style')

        if (themeStyle) {
            themeStyle.innerHTML = ''
            themeStyle.appendChild(document.createTextNode(MODES[currentMode]))
            setBodyBgColor()
        }
    }, [currentMode])

    React.useEffect(() => {
        const themeStyle = document.createElement('style')
        themeStyle.setAttribute('type', 'text/css')
        themeStyle.setAttribute('id','theme-style')
        themeStyle.appendChild(document.createTextNode(MODES[currentMode]))
        document.head.appendChild(themeStyle)
    }, [])

    const value: ThemeProviderType = {
        currentMode,
        toggleMode
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

/**
 * Allow use ThemeContext on components, pages and another hooks
 * @returns 
 */
export const useTheme = () => {
    const context = React.useContext(ThemeContext)
    return context
}