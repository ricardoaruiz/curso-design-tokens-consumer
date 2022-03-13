import React from 'react'
import ReactDOM from 'react-dom'

import { GlobalStyle } from './styles/GlobalStyle'
import { AppThemeProdiver } from './context/Theme'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <AppThemeProdiver>
      <GlobalStyle />
      <App />
    </AppThemeProdiver>
  </React.StrictMode>,
  document.getElementById('root')
)
