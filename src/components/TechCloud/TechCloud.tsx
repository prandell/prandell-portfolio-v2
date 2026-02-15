import React from 'react'
import { Cloud, renderSimpleIcon } from 'react-icon-cloud'
import type { IOptions } from 'react-icon-cloud'
import { StyledTechCloud } from './TechCloud.styles'
import { useMediaQuery } from '../../hooks/useMediaQuery'

// Ugly icon imports for icon cloud
import {
  siJavascript,
  siTypescript,
  siGit,
  siCss,
  siHtml5,
  siNodedotjs,
  siDatabricks,
  siMysql,
  siReact,
  siThreedotjs,
  siPython,
  siGooglecloud,
  siServerless,
  siOpenaigym,
  siFirebase,
  siJira,
  siPostgresql,
  siAlibabacloud,
  siCloudflare,
  siGithubactions,
  siFigma,
  siNestjs,
  siAnsible,
  siElasticsearch,
  siApachekafka,
  siRecoil,
  siGraphql,
  siNginx,
  siDocker,
  siVuedotjs
} from 'simple-icons'

// Canvas options for icon cloud
const tagCanvasOptions: IOptions = {
  clickToFront: 500,
  depth: 1,
  imageScale: 0.2,
  initial: [0.1, -0.1],
  outlineColour: '#0000',
  reverse: true,
  tooltip: 'native',
  tooltipDelay: 0,
  wheelZoom: false
}

//change colour of black icons
siThreedotjs.hex = '#fff'
siGooglecloud.hex = '#f79400'
siApachekafka.hex = '#04a0d5'

// Render icons to work with icon cloud API
const icons = [
  siJavascript,
  siTypescript,
  siDatabricks,
  siGit,
  siOpenaigym,
  siCss,
  siHtml5,
  siNodedotjs,
  siMysql,
  siReact,
  siThreedotjs,
  siNginx,
  siDocker,
  siPython,
  siGooglecloud,
  siServerless,
  siFirebase,
  siJira,
  siPostgresql,
  siAlibabacloud,
  siCloudflare,
  siGithubactions,
  siFigma,
  siVuedotjs,
  siNestjs,
  siAnsible,
  siElasticsearch,
  siApachekafka,
  siRecoil,
  siGraphql
].map((icon) => {
  return renderSimpleIcon({
    icon,
    size: 90,
    minContrastRatio: 0,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

const TechCloud: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 800px)')
  const isSkinny = useMediaQuery('(max-width: 400px)')
  const isFirefox =
    navigator.userAgent.toLowerCase().includes('firefox')

  const imageScale = isSkinny ? 1 : isMobile ? 0.7 : 0.8

  return (
    <StyledTechCloud>
      <Cloud
        options={{
          ...tagCanvasOptions,
          imageScale: isFirefox ? imageScale - 0.5 : imageScale
        }}
      >
        {icons}
      </Cloud>
    </StyledTechCloud>
  )
}

export default TechCloud
