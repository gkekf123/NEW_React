import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FirstApp from './components/FirstApp.jsx'
import SecondApp from './components/SecondApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <FirstApp></FirstApp>
    <SecondApp></SecondApp>
  </StrictMode>,
)
