import React from 'react'

import { styles, panels } from '../config/styles'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import { copy } from '../lib/copy'

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{copy.about.subheading}</p>
        <h2 className={styles.sectionHeadText}>{copy.about.heading}</h2>
      </div>

      <div className={`${panels.ink} mt-8 max-w-3xl p-6 sm:p-8`}>
        {copy.about.blurb.map((paragraph, i) => (
          <p
            key={i}
            className={`text-[16px] leading-[1.9] text-[#ddd8cf] sm:text-[18px]${i > 0 ? ' mt-5' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
