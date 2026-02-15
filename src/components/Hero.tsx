import React, { useEffect } from 'react'

import { styles, panels } from '../config/styles'
import { InteractiveParticles } from './Canvas'
import { copy } from '../lib/copy'
import { BrutalButton, FocusChip } from './ui'

const Hero: React.FC = () => {
  useEffect(() => {
    if (!document.querySelector('.hero-container > canvas')) {
      const hi = new InteractiveParticles()
      hi.init()
    }
  }, [])

  return (
    <section className="relative mx-auto min-h-screen w-full overflow-hidden pb-12 pt-20 sm:pt-24">
      <div className="hero-container" />

      <div
        className={`${styles.paddingX} pointer-events-none relative z-10 mx-auto flex max-w-7xl flex-col gap-8`}
      >
        <div className={`${panels.hero} pointer-events-auto w-fit`}>
          <h1 className={styles.heroHeadText}>
            {copy.hero.firstName}
            <br />
            {copy.hero.lastName}
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.8] text-[#ddd8cf] sm:text-[19px]">
            {copy.hero.blurb}
          </p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {copy.hero.focusChips.map((chip) => (
              <li key={chip}>
                <FocusChip>{chip}</FocusChip>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <BrutalButton href="#work" className="px-3 py-2 text-[10px] leading-none">
              {copy.hero.ctaWork}
            </BrutalButton>
            <BrutalButton href="#contact" className="px-3 py-2 text-[10px] leading-none">
              {copy.hero.ctaQuestion}
            </BrutalButton>
          </div>
        </div>

        <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-3 sm:right-4 sm:top-[58%] [writing-mode:vertical-rl]">
          <p className="whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.22em] text-[#a9a499]/60">
            Interactive particles on hover
          </p>
          <a
            href="#about"
            className="pointer-events-auto text-[#a9a499]/60 transition hover:text-white"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="rotate-90">
              <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
