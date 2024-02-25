// Imported react utilities
import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
// Imported GSAP utilties
import { gsap } from '../lib/config/gsapConfig.jsx'
import { useGSAP } from '@gsap/react'
// Imported assests
import logo from '../assets/shared/desktop/logo.svg'
import open from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'
// Imported custom data
import menu from '../lib/data/menu.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const mobileMenuRef = useRef()

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className='w-screen h-[72px] px-6 md:px-10 lg:px-40'>
      {/* logo*/}
      <div className='w-full h-full flex justify-between items-center lg:max-w-contain-d lg:mx-auto'>
        <Link to='/'>
          <img src={logo} alt='Logo' width={170} height={16} />
        </Link>
        {/* tablet & desktop navigation */}
        <nav>
          <ul className='hidden md:flex gap-9 font-bold text-link uppercase'>
            {menu.map((item) => (
              <li key={item.key}>
                <Link to={item.src}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* desktop CTA button */}
        <button className='hidden w-[9.875rem] h-10 bg-black text-white md:flex justify-center items-center text-link uppercase'>
          Get an invite
        </button>
        {/* mobile menu button */}
        <button onClick={handleClick} className='md:hidden'>
          {isOpen ? (
            <img src={close} alt='menu button' width={20} height={6} />
          ) : (
            <img src={open} alt='menu button' width={20} height={6} />
          )}
        </button>
      </div>
      {/* mobile dropdown menu */}
      <nav ref={mobileMenuRef} className='hidden'>
        <ul>
          {menu.map((item) => (
            <li key={item.key}>
              <Link to={item.src}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
