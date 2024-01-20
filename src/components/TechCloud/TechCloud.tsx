import React, { Component } from 'react'
import { Cloud, IOptions, renderSimpleIcon } from 'react-icon-cloud'
import { StyledTechCloud } from './TechCloud.styles'

// Ugly icon imports for icon cloud
import {
  siJavascript,
  siTypescript,
  siGit,
  siCss3,
  siHtml5,
  siNodedotjs,
  siDatabricks,
  siMicrosoftsqlserver,
  siReact,
  siThreedotjs,
  siPython,
  siAmazonaws,
  siServerless,
  siOpenai,
  siFirebase,
  siAzuredevops,
  siPostgresql,
  siAlibabacloud,
  siAwslambda,
  siAzurepipelines,
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
siAmazonaws.hex = '#f79400'
siApachekafka.hex = '#04a0d5'

// Render icons to work with icon cloud API
const icons = [
  siJavascript,
  siTypescript,
  siDatabricks,
  siGit,
  siOpenai,
  siCss3,
  siHtml5,
  siNodedotjs,
  siMicrosoftsqlserver,
  siReact,
  siThreedotjs,
  siNginx,
  siDocker,
  siPython,
  siAmazonaws,
  siServerless,
  siFirebase,
  siAzuredevops,
  siPostgresql,
  siAlibabacloud,
  siAwslambda,
  siAzurepipelines,
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
    minContrastRatio: 0,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

const TechCloud: React.FC = () => {
  return (
    <StyledTechCloud>
      <Cloud options={tagCanvasOptions}>{icons}</Cloud>
    </StyledTechCloud>
  )
}

export default TechCloud
