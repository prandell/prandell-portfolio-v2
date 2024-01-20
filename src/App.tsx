import React from 'react'
import { RecoilRoot } from 'recoil'
import { BrowserRouter } from 'react-router-dom'
import 'react-vertical-timeline-component/style.min.css'

import {
  About,
  Experience,
  Contact,
  Hero,
  Tech,
  Navbar,
  Works,
  StarsCanvas
} from './components'

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <BrowserRouter basename="/">
        <div className="relative z-0 bg-primary">
          <div className="bg-primary bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
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
