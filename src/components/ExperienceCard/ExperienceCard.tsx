import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

import type { Experience } from '../../config'

interface ExperienceCardProps {
  experience: Experience
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#111111',
        color: '#f2f2f2',
        border: '1px solid rgba(255,255,255,0.4)',
        borderRadius: 0,
        padding: '12px 14px'
      }}
      contentArrowStyle={{ borderRight: '7px solid rgba(255,255,255,0.45)' }}
      date={experience.date}
      iconStyle={{
        background: '#070707',
        border: '1px solid rgba(255,255,255,0.35)'
      }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={Array.isArray(experience.icon) ? experience.icon[0] : experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="font-display text-[20px] font-bold uppercase tracking-[0.04em] text-white">
          {experience.title}
        </h3>
        <p
          className="font-mono mt-1 text-[11px] uppercase tracking-[0.14em] text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-3 space-y-1.5">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="flex gap-2 text-[13px] leading-[1.6] text-white-100"
          >
            <span className="mt-[3px] text-[10px] text-[#f2efe9]">—</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard
