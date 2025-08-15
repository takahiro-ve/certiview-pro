import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

try {
  const rootElement = document.getElementById("root")
  if (!rootElement) {
    throw new Error("Root element not found")
  }
  
  const root = createRoot(rootElement)
  root.render(<App />)
} catch (error) {
  console.error("Failed to render app:", error)
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
      <h1>アプリケーションの読み込みに失敗しました</h1>
      <p>ページを再読み込みしてください。</p>
    </div>
  `
}
