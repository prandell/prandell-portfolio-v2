import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { HomePage } from './pages'

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <div className="relative z-0 bg-primary pb-20 px-[var(--page-gutter)]">
        <HomePage />
      </div>
    </BrowserRouter>
  )
}

export default App
