import React from 'react'

import { styles } from '../config/styles'
import { projects } from '../config'
import ProjectCard from './ProjectCard/ProjectCard'
import SectionWrapper from './SectionWrapper/SectionWrapper'
import { copy } from '../lib/copy'

const Works = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{copy.works.subheading}</p>
        <h2 className={styles.sectionHeadText}>{copy.works.heading}</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-4 max-w-3xl text-[16px] leading-[1.8] text-[#ddd8cf]">
          {copy.works.description}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, '')
