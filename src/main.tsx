import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Disclone } from './Disclone'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Disclone/>
  </StrictMode>,
)
