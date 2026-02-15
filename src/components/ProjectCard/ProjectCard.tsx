import React from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'

import { github, live } from '../../assets'
import type { Project } from '../../config'
import PhotoLightbox from '../PhotoLightbox/PhotoLightbox'
import { panels } from '../../config/styles'

interface ProjectCardProps extends Project {
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  photos,
  sourceCodeLink,
  liveDemoLink
}) => {
  return (
    <ReactParallaxTilt
      tiltMaxAngleX={7}
      tiltMaxAngleY={7}
      scale={1}
      transitionSpeed={320}
      className={`${panels.ink} p-4 sm:w-[360px] w-full`}
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-black/30">
        {photos ? (
          <PhotoLightbox />
        ) : (
          <>
            <img
              src={image}
              alt="project_image"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 m-3 flex justify-between card-img_hover">
              {liveDemoLink && (
                <div
                  onClick={() => window.open(liveDemoLink, '_blank')}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#f2ede3]"
                >
                  <img
                    src={live}
                    alt="live demo"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              )}
              {sourceCodeLink && (
                <div
                  onClick={() => window.open(sourceCodeLink, '_blank')}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#0f0f0f]"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="h-1/2 w-1/2 object-contain"
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      <div className="mt-4">
        <h3 className="font-display text-[24px] uppercase tracking-[0.05em] text-white">
          {name}
        </h3>
        <p className="mt-2 text-[14px] leading-[1.6] text-[#ddd8cf]">
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 opacity-80 grayscale">
        {tags.map((tag) => tag.icon)}
      </div>
    </ReactParallaxTilt>
  )
}

export default ProjectCard
