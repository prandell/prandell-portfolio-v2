import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Experience,
  Contact,
  Feedbacks,
  Hero,
  Tech,
  Navbar,
  Works,
  StarsCanvas
} from './components'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-primary bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
