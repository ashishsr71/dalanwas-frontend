import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CarouselBasicExample from './components/Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
 {/* < LandingPage/> */}
 {/* <CarouselBasicExample/> */}
  </StrictMode>,
)
