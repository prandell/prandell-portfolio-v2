export interface NavLink {
  id: string
  title: string
}

export const colours = {
  primary: '#050816',
  secondary: '#a5b3fc',
  tertiary: '#151030'
}

export const navLinks: NavLink[] = [
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
  blurb: `I'm a lead engineer at LabEleven, currently embedded with a large Australian crypto company founded by an experienced DeFi founder.
  I work across frontend, backend, contracts, and data systems on high-trust product surfaces like wallet balances, asset metadata, growth systems, and real-time game mechanics.
  I focus on shipping ambitious products while keeping correctness, reliability, and user trust as first-class requirements.
  Outside work I'm usually gaming, cooking, or snowboarding. You can also track what I'm currently playing via the live Steam panel.`
}
