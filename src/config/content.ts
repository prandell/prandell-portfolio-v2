import type { ReactNode } from 'react'
import { rcomics, map } from '../assets'
import { IconDictionary } from '../components/Icons'

export interface Experience {
  title: string
  company_name: string
  icon: string | string[]
  iconBg: string
  date: string
  points: string[]
}

const experiences: Experience[] = [
  {
    title: 'Lead Engineer',
    company_name: 'LabEleven | Large Australian crypto company',
    icon: '/labeleven.webp',
    iconBg: 'black',
    date: 'April 2024 - Present',
    points: [
      'Core and lead full-stack engineer on a non-custodial cross-chain crypto super app (wallet, perps, swaps, earn).',
      'Owned critical wallet balance and asset metadata systems where correctness and uptime are directly tied to user trust.',
      'Built a fantasy crypto card game end-to-end, including backend architecture, contracts, frontend implementation, and launch operations.',
      'Designed a distributed game engine using Cloudflare Durable Objects with per-user state and central real-time leaderboard coordination.',
      'Built incentive campaign infrastructure (loot boxes and raffles) using persisted randomness, idempotent durable execution, and ledger-backed reward accounting.',
      'Drove technical direction, incident ownership, mentoring, and cross-team coordination across product, engineering, and operations.',
      'During this phase, the platform scaled from ~100 users to ~500k users and reached a valuation above $150M.'
    ]
  },
  {
    title: 'Working Ski Holiday',
    company_name: 'Whistler, BC, Canada',
    icon: '/favicon.ico',
    iconBg: 'black',
    date: 'October 2023 - April 2024',
    points: [
      'Took a season off to live and work in Whistler — worked in a ski hire store, made great tips, and spent 70 days on the mountain.',
    ]
  },
  {
    title: 'Senior Consultant',
    company_name: 'Deloitte Australia',
    icon: 'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/deloitte-logo.webp',
    iconBg: 'black',
    date: 'January 2021 - March 2024',
    points: [
      'Built and led delivery across supply chain analytics products spanning frontend, backend, and data engineering.',
      'Owned complex feature delivery from database through API and UI, with a strong focus on product quality and performance.',
      'Contributed to client-facing innovation programs and regularly presented technical outcomes to stakeholders and large audiences.'
    ]
  },
  {
    title: 'Software Engineering Internships',
    company_name: 'ANZ + Deloitte',
    icon: [
      'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/anz-logo.png',
      'https://storage.googleapis.com/prandell-portfolio.appspot.com/company-logos/deloitte-logo.webp'
    ],
    iconBg: 'black',
    date: 'November 2019 - February 2020',
    points: [
      'Contributed to production systems in Python and Java, and gained early exposure to CI/CD, testing, and event-driven engineering concepts.',
      'Built a strong foundation in ownership, delivery discipline, and collaborative software development.'
    ]
  }
]

export interface Project {
  name: string
  description: string
  tags: { name: string; icon: ReactNode }[]
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
