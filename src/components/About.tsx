import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { aboutMe } from '../constants'
import { TransitionDirection, fadeIn, textVariant } from '../utils/motion'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import SteamTracker from './SteamTracker/SteamTracker'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <div className="mt-4 flex flex-col sm:flex-row items-center gap-10">
        <motion.div
          variants={fadeIn(TransitionDirection.LEFT, '', 0.1, 1)}
          className="flex flex-col text-secondary text-[17px] max-w-l leading-[30px]"
        >
          {aboutMe.blurb}
          <a
            className="text-[7px] w-fit"
            target="_blank"
            href="https://rocketleague.tracker.network/rocket-league/profile/steam/76561199068492201/overview"
          >
            Also, check my Rocket League stats
          </a>
        </motion.div>
        <motion.div variants={fadeIn(TransitionDirection.RIGHT, '', 0.1, 1)}>
          <SteamTracker />
        </motion.div>
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
