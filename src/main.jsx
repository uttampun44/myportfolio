import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TagManager from 'react-gtm-module'


const tagManagerArgs = {
  gtmId: 'GTM-PHP6578'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
