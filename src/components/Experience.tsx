import React from 'react'

import SectionWrapper from './SectionWrapper/SectionWrapper'
import { styles, panels } from '../config/styles'
import { experiences } from '../config'
import { copy } from '../lib/copy'

const Experience: React.FC = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>{copy.experience.subheading}</p>
        <h2 className={styles.sectionHeadText}>{copy.experience.heading}</h2>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6 lg:grid lg:grid-cols-1 lg:gap-5 lg:overflow-visible lg:px-0 lg:pb-0">
        {experiences.map((experience) => (
          <article
            key={`${experience.company_name}-${experience.date}`}
            className={`${panels.paperLight} min-w-[320px] snap-start p-2 sm:min-w-[420px] lg:min-w-0`}
          >
            <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 sm:py-5 lg:grid lg:grid-cols-[180px_minmax(0,1fr)] lg:items-start">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4f4c45]">
                  {experience.date}
                </p>
                <div className="mt-4 flex gap-2">
                  {(Array.isArray(experience.icon) ? experience.icon : [experience.icon]).map((src) => (
                    <img
                      key={src}
                      src={src}
                      alt={experience.company_name}
                      className="h-12 w-12 rounded-sm object-contain bg-[#f4efe5] p-1"
                    />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-[28px] uppercase tracking-[0.04em] text-[#131313]">
                  {experience.title}
                </h3>
                <p className="font-mono mt-3 text-[11px] uppercase tracking-[0.18em] text-[#4f4c45]">
                  {experience.company_name}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {experience.points.map((point, index) => (
                    <li
                      key={`${experience.company_name}-${index}`}
                      className="flex gap-2 text-[14px] leading-[1.6] text-[#262522]"
                    >
                      <span className="mt-[5px] text-[8px] text-[#4f4c45]">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
