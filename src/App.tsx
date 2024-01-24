import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import 'react-vertical-timeline-component/style.min.css'

import {
  About,
  Experience,
  Contact,
  Hero,
  Tech,
  Navbar,
  Works
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
          </div>
        </div>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
