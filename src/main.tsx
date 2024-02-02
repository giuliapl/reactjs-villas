import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles.scss'
import "./assets/fonts/AvertaDemoPECuttedDemo-Regular.otf";
import "./assets/fonts/AvertaDemoPE-ExtraBold.otf"

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)