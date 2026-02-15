import React from 'react'
import { motion } from 'framer-motion'

import { styles } from '../config/styles'
import { projects } from '../config'
import { TransitionDirection, fadeIn, textVariant } from '../lib/motion'
import ProjectCard from './ProjectCard/ProjectCard'
import SectionWrapper from './SectionWrapper/SectionWrapper'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn(TransitionDirection.NONE, '', 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following are some of my personal and work projects. Each project
          is briefly described with links to code repositories, live demos or
          photos. It reflects my desire to learn, ability to solve complex
          problems, and work with different technologies.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
