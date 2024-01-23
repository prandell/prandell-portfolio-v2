import { rcomics, map } from '../assets'
import { IconDictionary } from '../components/Icons'

export const colours = {
  primary: '#050816',
  secondary: '#a5b3fc',
  tertiary: '#151030'
}

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

export const aboutMe = {
  blurb: `I am a senior full-stack developer recently working with LLM's and generative AI.
  I am currently on a 6-month working holiday in Whistler, back in Melbourne in April.
  I am a fast learner and love new challenges. When I can't snowboard, I'm typically cooking or gaming.
  Here you track the game I'm currently playing, fetched via the steam API.`
}

export interface Experience {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const experiences: Experience[] = [
  {
    title: 'Project Lead - Senior Consultant',
    company_name: 'Deloitte Australia - Illuminate',
    icon: 'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/deloitte-logo.webp',
    iconBg: 'black',
    date: 'June 2023 - Present',
    points: [
      'Created streamlined data pipelines to aid downstream ingestion (Data engineering)',
      `Created a multi-faceted chatbot using LLM's and vector databases to extract structured information from user queries and answer questions over source documents.`,
      'Contributed to popular open-source generative AI software libraries',
      'Regularly demonstrated new features to large audiences (30+)',
      'Managed and mentored team members, contributing to their learning and developement'
    ]
  },
  {
    title: 'Project Lead - Consultant',
    company_name: 'Deloitte Australia - Illuminate',
    icon: 'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/deloitte-logo.webp',
    iconBg: 'black',
    date: 'July 2022 - June 2023',
    points: [
      `Lead a small team to deliver a modern web application that enhances the capability and usability of the application for it's users`,
      'Collaborating with cross-functional teams including designers, product managers, and stakeholders to deliver a quality finaln product',
      'Managed and assigned tasks, reviewed work, and organized delivery plans',
      'Exhibited complete autonomy and initiative in delivering high-quality software features and troubleshooting issues'
    ]
  },
  {
    title: 'Full-stack Developer - Graduate',
    company_name: 'Deloitte Australia - Illuminate',
    icon: 'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/deloitte-logo.webp',
    iconBg: 'black',
    date: 'April 2021 - July 2022',
    points: [
      'Worked in a team behind an application that uses machine learning and data visualizations to help clients understand and optimize their supply network operations and respond to risks',
      'Deloitte Illuminate saved $16M in costs for their clients in 2021',
      'Contributed to the development of several major features, from front-end to back-end',
      'Designed and implemented graph traversal algorithms in PostgresSQL'
    ]
  },
  {
    title: 'Summer Vacationer',
    company_name: 'ANZ',
    icon: 'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/anz-logo.png',
    iconBg: 'black',
    date: 'Nov 2019 - Feb 2020',
    points: [
      'Working on a Python controller used to migrate applications across on-premises locations.',
      'Working on a controller used to migrate applications across on-premises location'
    ]
  }
]

export interface Project {
  name: string
  description: string
  tags: { name: string; icon: any }[]
  image: string
  sourceCodeLink?: string
  liveDemoLink?: string
  photos?: string[]
}

const projects: Project[] = [
  {
    name: 'Randell Comics',
    description:
      'Web application to learn basic concepts of react and modern web developement. The website itself is a mock comic e-shop.',
    tags: [
      { name: 'react', icon: IconDictionary['react'] },
      { name: 'typescript', icon: IconDictionary['typescript'] },
      { name: 'redux', icon: IconDictionary['redux'] },
      { name: 'firebase', icon: IconDictionary['firebase'] },
      { name: 'netlify', icon: IconDictionary['netlify'] },
      { name: 'stripe', icon: IconDictionary['stripe'] }
    ],
    image: rcomics,
    sourceCodeLink: 'https://github.com/prandell/randell-comics',
    liveDemoLink: 'https://unrivaled-naiad-04eaf8.netlify.app/'
  },
  {
    name: 'Illuminate',
    description:
      'Corporate web application that helps clients analyse their supply chains and respond to risks. Code unavailable, Click to view images.',
    tags: [
      { name: 'react', icon: IconDictionary['react'] },
      { name: 'typescript', icon: IconDictionary['typescript'] },
      { name: 'redux', icon: IconDictionary['nextjs'] },
      { name: 'firebase', icon: IconDictionary['mapbox'] },
      { name: 'netlify', icon: IconDictionary['elasticsearch'] },
      { name: 'stripe', icon: IconDictionary['azuredevops'] },
      { name: 'postgres', icon: IconDictionary['postgres'] },
      { name: 'docker', icon: IconDictionary['docker'] },
      { name: 'vuejs', icon: IconDictionary['vuejs'] },
      { name: 'nestjs', icon: IconDictionary['nestjs'] }
    ],
    image: map,
    photos: []
  }
]

export { experiences, projects }
