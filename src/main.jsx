import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RoutesSwitch from './routeswitch.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RoutesSwitch />
  </React.StrictMode>,
)
