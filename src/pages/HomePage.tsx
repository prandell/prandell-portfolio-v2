import React from 'react'

import { About, Experience, Contact, Hero, Navbar, Works } from '../components'
import ChatWindow from '../components/ChatWindow/ChatWindow'
import SteamTracker from '../components/SteamTracker/SteamTracker'

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Hero />
    <SteamTracker />
    <About />
    <Experience />
    {/* <Works /> */}
    <ChatWindow />
    <div className="relative z-0">
      <Contact />
    </div>
  </>
)

export default HomePage
