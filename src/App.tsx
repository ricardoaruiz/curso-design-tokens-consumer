import { useTheme } from './context/Theme'

import * as S from './App.styles'

function App() {

  const { currentMode, toggleMode } = useTheme()

  return (
    <S.Container>

      <S.Title>Design Tokens Consumer</S.Title>

      <S.SubTitlte>I know all tokens from "design-tokens"</S.SubTitlte>

      <S.Box>
        I am a element styled with design-tokens (styled-components)
      </S.Box>

      <S.ThemeButton 
        type="button" 
        className="theme-button" 
        onClick={toggleMode}
      >
        Toggle Mode - {currentMode}
      </S.ThemeButton>

    </S.Container>
  )
}

export default App
