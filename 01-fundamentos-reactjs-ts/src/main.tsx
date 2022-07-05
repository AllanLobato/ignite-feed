import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// A exclamação diz ao typescript que o elemento não pe nulo, mas é melhor evitar o uso do "!". Para esse caso é uma boa solução, mas nao necessariamente para outras.