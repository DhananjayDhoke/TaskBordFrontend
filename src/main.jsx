import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { TokenProvider } from './Components/Contex/Authcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
    <TokenProvider>
    <App></App>
    </TokenProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
