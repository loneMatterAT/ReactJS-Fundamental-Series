import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './01 - React Introduction/App.jsx'

createRoot(document.getElementById('root')).render(
  // Removing StrictMode whenever update the state variable like clicking a button, the component rendered multiple
  // For demo purposes, we remove StrictMode to try the useRef() hook
    <App />
)

{/* <StrictMode> */}
  
{/* <StrictMode>
  <App />
</StrictMode> */}