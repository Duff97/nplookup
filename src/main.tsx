import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { PackageProvider } from './providers/PackageProvider.tsx'
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Analytics />
    <PackageProvider>
      <App />
    </PackageProvider>
  </React.StrictMode>,
)
