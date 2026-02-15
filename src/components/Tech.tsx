import React from 'react'
import { motion } from 'framer-motion'

import TechCloud from './TechCloud/TechCloud'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import { styles, panels } from '../config/styles'
import { textVariant } from '../lib/motion'

const Tech: React.FC = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Toolkit</p>
        <h2 className={styles.sectionHeadText}>Tech Stack</h2>
      </motion.div>
      <div className={`mt-8 ${panels.brutal} p-6 sm:p-8`}>
        <TechCloud />
      </div>
    </>
  )
}

export default SectionWrapper(Tech, '')
