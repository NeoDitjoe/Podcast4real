import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StateContextProvider from './UseContext/UseContext.jsx'
import './index.css'
import { moviesData } from '../data/movies.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
      <App />
    </StateContextProvider>
  </React.StrictMode>,
)