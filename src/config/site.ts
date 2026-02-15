export interface NavLink {
  id: string
  title: string
}

export const colours = {
  primary: '#090909',
  secondary: '#efefef',
  tertiary: '#141414'
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

