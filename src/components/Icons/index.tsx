import React from 'react'
import styled from 'styled-components'
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
  SiAzuredevops,
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
  SiLinkedin,
  SiStripe,
  SiNetlify,
  SiFirebase
} from '@icons-pack/react-simple-icons'

const VueJsIcon = styled(SiVuedotjs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #50c08d;
`
const ReactIcon = styled(SiReact)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #5bcfed;
`

const NextJsIcon = styled(SiNextdotjs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #f2f2f2;
`

const ReduxIcon = styled(SiRedux)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #7047b3;
`

const MapBoxIcon = styled(SiMapbox)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3e5fee;
`

const DockerIcon = styled(SiDocker)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #2493e6;
`

const PostgresIcon = styled(SiPostgresql)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3e64d3;
`

const NestJsIcon = styled(SiNestjs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #df224e;
`

const TypescriptIcon = styled(SiTypescript)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3178c6;
`

const AzureDevopsIcon = styled(SiAzuredevops)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #0178d7;
`

const ElasticSearchIcon = styled(SiElasticsearch)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #015470;
`

const PostmanIcon = styled(SiPostman)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #fc6a36;
`
const PythonIcon = styled(SiPython)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3675aa;
`
const KafkaIcon = styled(SiApachekafka)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #04a0d5;
`
const BambooIcon = styled(SiBamboo)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #267cf2;
`
const ArtifactoryIcon = styled(SiArtifacthub)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3d9844;
`

const NodeJsIcon = styled(SiNodedotjs)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #3d9844;
`
const JavascriptIcon = styled(SiJavascript)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #dfc920;
`
const GithubIcon = styled(SiGithub)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: white;
`
const JUnitIcon = styled(SiJunit5)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #d24d46;
`

export const GithubIconLink = styled(SiGithub)`
  align-self: center;
  fill: white;
`

export const LinkedInIconLink = styled(SiLinkedin)`
  align-self: center;
  fill: white;
`

export const StripeIcon = styled(SiStripe)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #635bff;
`

export const NetlifyIcon = styled(SiNetlify)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #05bdba;
`
export const FirebaseIcon = styled(SiFirebase)`
  height: 20px;
  padding: 0px 5px;
  align-self: center;
  fill: #fda513;
`

export const IconDictionary: {
  [key: string]: any
} = {
  react: <ReactIcon key="react" />,
  nextjs: <NextJsIcon key="nextjs" />,
  mapbox: <MapBoxIcon key="mapbox" />,
  redux: <ReduxIcon key="redux" />,
  typescript: <TypescriptIcon key="typescript" />,
  nestjs: <NestJsIcon key="nestjs" />,
  postgres: <PostgresIcon key="postgres" />,
  docker: <DockerIcon key="docker" />,
  vuejs: <VueJsIcon key="vuejs" />,
  postman: <PostmanIcon key="postman" />,
  elasticsearch: <ElasticSearchIcon key="elasticsearch" />,
  azuredevops: <AzureDevopsIcon key="azuredevops" />,
  python: <PythonIcon key="python" />,
  kafka: <KafkaIcon key="kafka" />,
  bamboo: <BambooIcon key="bamboo" />,
  artifactory: <ArtifactoryIcon key="artifactory" />,
  nodejs: <NodeJsIcon key="nodejs" />,
  github: <GithubIcon key="github" />,
  javascript: <JavascriptIcon key="javascript" />,
  junit: <JUnitIcon key="junit" />,
  stripe: <StripeIcon key="stripe" />,
  netlify: <NetlifyIcon key="netlify" />,
  firebase: <FirebaseIcon key="firebase" />
}
