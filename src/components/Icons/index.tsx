import React from 'react'
import type { ComponentType, ReactNode } from 'react'
import {
  SiVuedotjs,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiMapbox,
  SiDocker,
  SiPostgresql,
  SiNestjs,
  SiTypescript,
  SiJira,
  SiElasticsearch,
  SiPostman,
  SiPython,
  SiApachekafka,
  SiBamboo,
  SiArtifacthub,
  SiNodedotjs,
  SiJavascript,
  SiGithub,
  SiJunit5,
  SiStripe,
  SiNetlify,
  SiFirebase
} from '@icons-pack/react-simple-icons'

const icon = (Icon: ComponentType<any>, color: string) => (
  <Icon className="h-5 self-center px-[5px]" style={{ fill: color }} />
)

interface IconLinkProps {
  size?: number
  className?: string
}

export const GithubIconLink: React.FC<IconLinkProps> = ({
  size = 24,
  className
}) => (
  <SiGithub
    className={className}
    style={{ width: size, height: size, fill: '#f5f5f5', alignSelf: 'center' }}
  />
)

export const LinkedInIconLink: React.FC<IconLinkProps> = ({
  size = 24,
  className
}) => (
  <div
    className={className}
    style={{
      width: size,
      height: size,
      borderRadius: '9999px',
      border: '1px solid rgba(255, 255, 255, 0.45)',
      backgroundColor: '#0a0a0a',
      color: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: Math.round(size * 0.5),
      fontWeight: 700,
      lineHeight: 1
    }}
  >
    in
  </div>
)

export const IconDictionary: {
  [key: string]: ReactNode
} = {
  react: icon(SiReact, '#5bcfed'),
  nextjs: icon(SiNextdotjs, '#f2f2f2'),
  mapbox: icon(SiMapbox, '#3e5fee'),
  redux: icon(SiRedux, '#7047b3'),
  typescript: icon(SiTypescript, '#3178c6'),
  nestjs: icon(SiNestjs, '#df224e'),
  postgres: icon(SiPostgresql, '#3e64d3'),
  docker: icon(SiDocker, '#2493e6'),
  vuejs: icon(SiVuedotjs, '#50c08d'),
  postman: icon(SiPostman, '#fc6a36'),
  elasticsearch: icon(SiElasticsearch, '#015470'),
  azuredevops: icon(SiJira, '#0178d7'),
  python: icon(SiPython, '#3675aa'),
  kafka: icon(SiApachekafka, '#04a0d5'),
  bamboo: icon(SiBamboo, '#267cf2'),
  artifactory: icon(SiArtifacthub, '#3d9844'),
  nodejs: icon(SiNodedotjs, '#3d9844'),
  github: icon(SiGithub, 'white'),
  javascript: icon(SiJavascript, '#dfc920'),
  junit: icon(SiJunit5, '#d24d46'),
  stripe: icon(SiStripe, '#635bff'),
  netlify: icon(SiNetlify, '#05bdba'),
  firebase: icon(SiFirebase, '#fda513')
}
