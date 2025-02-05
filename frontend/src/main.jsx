import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter } from 'react-router-dom'
import { UserContext } from './context/UserContext.jsx'
import { CaptainContext } from './context/CaptainContext.jsx'

createRoot(document.getElementById('root')).render(
   <StrictMode> {/*  becoz of strictmode component runns twice only in dev mode not in prod mode */} 
   
   <CaptainContext> 
    <UserContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserContext>
   </CaptainContext>

   </StrictMode>,
)
