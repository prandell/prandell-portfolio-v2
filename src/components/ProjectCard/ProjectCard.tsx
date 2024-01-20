import React from 'react'
import ReactParallaxTilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { github, live } from '../../assets'
import { TransitionDirection, fadeIn } from '../../utils/motion'
import { Project } from '../../constants'
import PhotoLightbox from '../PhotoLightbox/PhotoLightbox'

interface ProjectCardProps extends Project {
  index: number
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  name,
  description,
  tags,
  image,
  photos,
  sourceCodeLink,
  liveDemoLink
}) => {
  return (
    <motion.div
      variants={fadeIn(TransitionDirection.UP, 'spring', index * 0.5, 0.75)}
    >
      <ReactParallaxTilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        scale={1}
        transitionSpeed={350}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px] overflow-hidden">
          {photos ? (
            <PhotoLightbox />
          ) : (
            <>
              <img
                src={image}
                alt="project_image"
                className="w-full h-full object-cover rounded-lg"
              />

              <div className="absolute inset-0 flex justify-between m-3 card-img_hover">
                <div
                  onClick={() => window.open(liveDemoLink, '_blank')}
                  className="bg-gradient-to-r from-secondary to-white w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={live}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <div
                  onClick={() => window.open(sourceCodeLink, '_blank')}
                  className="bg-gradient-to-r from-tertiary to-secondary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => tag.icon)}
        </div>
      </ReactParallaxTilt>
    </motion.div>
  )
}
export default ProjectCard
