import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WeatherCard from './WeatherCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeatherCard />
  </StrictMode>,
)
