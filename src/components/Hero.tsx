import React, { useEffect, useState } from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { OctaneCanvas, InteractiveParticles } from './canvas'

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (!document.querySelector('canvas')) {
      const hi = new InteractiveParticles()
      hi.init()
    }
  }, [isMobile])

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} pointer-events-none absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-secondary" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-secondary" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-secondary">Pat</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A full-stack developer <br className="sm:block" />
            based in Melbourne
          </p>
        </div>
      </div>

      {isMobile ? <OctaneCanvas /> : <div className="hero-container"></div>}

      <div className="absolute bottom-3 sm:bottom-10 w-full flex justify-center sm:justify-end px-20 items-center">
        <a href="#about">
          <div className="w-[28px] h-[40px] rounded-2xl border-[1px] border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 14],
                opacity: [1, 1, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 1
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-2"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
