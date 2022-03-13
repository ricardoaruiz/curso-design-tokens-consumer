import { useTheme } from './context/Theme'

import * as global from 'design-tokens/dist/marca-a/js/global'
import * as dark from 'design-tokens/dist/marca-a/js/dark'

import './App.scss'

function App() {

  const { toggleMode, currentMode } = useTheme()

  return (
    <div className="container">
      <h1>Design Tokens Consumer</h1>
      <h3>I know all tokens from "design-tokens"</h3>

      <div className="box1">
        I am a element styled with design-tokens (css-variables)
      </div>

      <div className="box2">
        I am a element styled with design-tokens (scss-variables)
      </div>

      <div style={{
        maxWidth: '300px',
        margin: '50px auto 0 auto',
        padding: '1rem',
        boxShadow: '2px 4px 6px rgba(0,0,0,0.3)',

        fontFamily: dark.FontFamilyPoppins,
        color: dark.ColorBrand03,
        borderRadius: global.BorderRadiusSm,
        backgroundColor: dark.ColorBrand01
      }}>
        I am a element styled with design-tokens (js-variables)
      </div>

      <button 
        type="button" 
        className="theme-button" 
        onClick={toggleMode}
      >
        Toggle Mode - {currentMode}
      </button>

    </div>
  )
}

export default App
