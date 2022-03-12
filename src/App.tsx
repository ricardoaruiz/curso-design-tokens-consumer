import './App.scss'

function App() {

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
    </div>
  )
}

export default App
