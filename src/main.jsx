import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import NotesDataContext from './context/NotesDataContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotesDataContext><App /></NotesDataContext>
  </React.StrictMode>,
)
