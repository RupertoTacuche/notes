import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { NoteProviderWrapper } from './context/note.context.jsx'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter>
      <NoteProviderWrapper>
        <App />
      </NoteProviderWrapper>
    </BrowserRouter>
  //</StrictMode>,
)
