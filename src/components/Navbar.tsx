import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles'
import { navLinks } from '../constants'
import { MenuIcon, CloseIcon } from '../assets'
import { colours } from '../constants'
import BubbleText from './BubbleText/BubbleText'
import FuzzyBackground from './FuzzyBackground/FuzzyBackground'

interface NavBarListProps {
  active: string
  setActive: (link: string) => void
  toggle: boolean
  setToggle: (bool: boolean) => void
  inMenu: boolean
}

const NavBarList: React.FC<NavBarListProps> = ({
  active,
  setActive,
  toggle,
  setToggle,
  inMenu
}) => {
  const onClickLink = (title: string) => {
    if (inMenu) {
      setToggle(!toggle)
    }
    setActive(title)
  }

  return (
    <ul
      className={
        inMenu
          ? 'list-none flex justify-end items-start flex-col gap-4'
          : 'list-none hidden sm:flex flex-row gap-10'
      }
    >
      {navLinks.map((link) => (
        <li
          key={link.id}
          onClick={() => onClickLink(link.title)}
          className={`
            ${
              active === link.title
                ? '!font-normal'
                : 'font-extralight text-secondary'
            }
            ${
              inMenu
                ? 'text-[16px] cursor-pointer'
                : 'text-[18px] cursor-pointer '
            }
          `}
        >
          <a href={`#${link.id}`}>
            <BubbleText
              off={active === link.title || inMenu}
              id={link.id}
              bubbleText={link.title}
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>('')
  const [toggle, setToggle] = useState<boolean>(false)

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('')
            window.scrollTo(0, 0)
          }}
        >
          <div className="text-[18px] flex cursor-pointer w-25  font-extralight text-secondary">
            <BubbleText id="name" bubbleText="Patrick Randell" />
          </div>
        </Link>
        <NavBarList
          toggle={toggle}
          setToggle={setToggle}
          active={active}
          setActive={setActive}
          inMenu={false}
        />
        <div className="sm:hidden flex flex-1 justify-end items-center">
          {toggle ? (
            <CloseIcon
              fill={colours.secondary}
              onClick={() => setToggle(!toggle)}
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            />
          ) : (
            <MenuIcon
              fill={colours.secondary}
              onClick={() => setToggle(!toggle)}
              className="w-[28px] h-[28px] object-contain cursor-pointer"
            />
          )}

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 absolute top-[55px] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-l`}
          >
            <FuzzyBackground
              className={`${
                !toggle ? 'hidden' : 'unset'
              }  absolute left-0 top-0 rounded-l w-[100%] h-[100%]`}
            ></FuzzyBackground>
            <NavBarList
              toggle={toggle}
              setToggle={setToggle}
              inMenu
              active={active}
              setActive={setActive}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
