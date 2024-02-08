// Imported react utilities
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// Imported GSAP utilties
import { gsap } from '../lib/config/gsapConfig.jsx'
import { useGSAP } from '@gsap/react'
// Imported assests
import logo from '../assets/shared/desktop/logo.svg'
import menu from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'
// Imported components

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-screen h-[72px] px-6 md:px-10 lg:px-40'>
      {/* logo*/}
      <div className='w-full h-full flex justify-between items-center'>
        <Link to='/'>
          <img src={logo} alt='Logo' width={170} height={16} />
        </Link>
        {/* tablet & desktop navigation */}
        <nav>
          <ul className='hidden md:flex gap-9 font-bold text-navLinks uppercase'>
            <li>
              <Link to='/stories'>Stories</Link>
            </li>
            <li>
              <Link to='/features'>Features</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
          </ul>
        </nav>
        {/* desktop CTA button */}
        <button className='hidden w-[9.875rem] h-10 bg-black text-white md:flex justify-center items-center text-navLinks uppercase'>
          Get an invite
        </button>
        {/* mobile menu button */}
        <button onClick={handleClick} className='md:hidden'>
          {isOpen ? (
            <img src={close} alt='menu button' width={20} height={6} />
          ) : (
            <img src={menu} alt='menu button' width={20} height={6} />
          )}
        </button>
      </div>
      {/* mobile dropdown menu */}
      <nav ref={mobileMenuRef} className='hidden'>
        <ul>
          <li>
            <Link to='/stories'>Stories</Link>
            <Link to='/features'>Features</Link>
            <Link to='/pricing'>Pricing</Link>
          </li>
        </ul>
      </nav>
      {/* desktop menu */}
    </header>
  )
}
