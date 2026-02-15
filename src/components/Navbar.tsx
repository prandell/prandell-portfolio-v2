import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../config/styles'
import { navLinks } from '../config'
import { MenuIcon, CloseIcon } from '../assets'
import { colours } from '../config'
import { copy } from '../lib/copy'

interface NavBarListProps {
  active: string
  setActive: (link: string) => void
  inMenu?: boolean
  onClickLink?: () => void
}

const NavBarList: React.FC<NavBarListProps> = ({
  active,
  setActive,
  inMenu = false,
  onClickLink
}) => {
  const baseClass = inMenu
    ? 'flex flex-col items-start gap-2'
    : 'hidden sm:flex flex-row items-center gap-2'

  return (
    <ul className={baseClass}>
      {navLinks.map((link) => {
        const isActive = active === link.title
        return (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={() => {
                setActive(link.title)
                onClickLink?.()
              }}
              className={`font-display inline-flex px-3 py-2 text-xs uppercase tracking-[0.16em] transition ${
                isActive
                  ? 'bg-white/12 text-white'
                  : 'text-[#d7d2c9] hover:bg-white/8 hover:text-white'
              }`}
            >
              {link.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-[var(--page-gutter)] right-[var(--page-gutter)] z-40 h-20 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#090909e8] backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className={`${styles.paddingX} mx-auto flex h-full w-full max-w-7xl items-center justify-between`}
      >
        <Link
          to="/"
          className={`group transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <p className="font-display text-sm uppercase tracking-[0.2em] text-white transition group-hover:text-secondary sm:text-base">
            {copy.nav.name}
          </p>
          <p className="font-mono mt-1 text-[9px] uppercase tracking-[0.2em] text-[#9f9a90] sm:text-[10px]">
            {copy.nav.subtitle}
          </p>
        </Link>

        <div className={`transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <NavBarList active={active} setActive={setActive} />
        </div>

        <div className="sm:hidden flex items-center">
          {toggle ? (
            <CloseIcon
              fill={colours.secondary}
              onClick={() => setToggle(false)}
              className="h-7 w-7 cursor-pointer"
            />
          ) : (
            <MenuIcon
              fill={colours.secondary}
              onClick={() => setToggle(true)}
              className="h-7 w-7 cursor-pointer"
            />
          )}

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } absolute right-0 top-20 mx-4 min-w-[220px] bg-[#111111f2] p-4 backdrop-blur-sm`}
          >
            <NavBarList
              inMenu
              active={active}
              setActive={setActive}
              onClickLink={() => setToggle(false)}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
