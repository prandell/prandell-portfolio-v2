import React, { Component, useEffect, useState } from 'react'
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
    size: 42,
    minContrastRatio: 0,
    aProps: {
      onClick: (e) => e.preventDefault()
    }
  })
})

const TechCloud: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isSkinny, setIsSkinny] = useState(false)

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 800px)')
    const mediaQuery2 = window.matchMedia('(max-width: 300px)')

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches)
    setIsSkinny(mediaQuery2.matches)

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches)
    }
    const handleMedia2QueryChange = (event: any) => {
      setIsSkinny(event.matches)
    }

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    mediaQuery2.addEventListener('change', handleMedia2QueryChange)

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
      mediaQuery2.removeEventListener('change', handleMedia2QueryChange)
    }
  }, [])

  return (
    <StyledTechCloud>
      <Cloud
        options={{
          ...tagCanvasOptions,
          imageScale: 0.5
        }}
      >
        {icons}
      </Cloud>
    </StyledTechCloud>
  )
}

export default TechCloud
