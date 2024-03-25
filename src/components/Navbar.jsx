// Imported react utilities
import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
// Imported GSAP utilties
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
// Imported assests
import logo from '../assets/shared/logo.svg'
import open from '../assets/shared/mobile/menu.svg'
import close from '../assets/shared/mobile/close.svg'
// Imported custom data
import menu from '../lib/data/menu.js'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef()
  const navRef = useRef()
  const tl = useRef()

  useGSAP(
    () => {
      tl.current = gsap
        .timeline()
        .to(navRef.current, {
          display: 'block',
          opacity: 1,
          duration: 0.1,
        })
        .to(menuRef.current, {
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
          duration: 0.5,
          ease: 'sine.out',
        })
        .reverse()
    },
    { scope: navRef }
  )

  const logoClick = () => {
    tl.current.reversed(!tl.current.reversed())
    setIsOpen(false)
    window.scrollTo(0, 0)
  }

  const handleClick = () => {
    tl.current.reversed(!tl.current.reversed())
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className='h-[72px] px-6 md:px-10 lg:px-40'>
      {/* logo*/}
      <div className='w-full h-full flex justify-between items-center lg:max-w-contain-d lg:mx-auto'>
        <Link to='/' onClick={logoClick}>
          <img src={logo} alt='Logo' width={170} height={16} />
        </Link>
        {/* tablet & desktop navigation */}
        <nav>
          <ul className='hidden md:flex gap-9 font-bold text-link uppercase'>
            {menu.map((item) => (
              <li
                key={item.key}
                className='transition-all ease-in-out duration-300 hover:opacity-30'
              >
                <Link to={item.src}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        {/* desktop CTA button */}
        <button className='hidden w-[9.875rem] h-10 bg-black text-white md:flex justify-center items-center text-link uppercase transition-all ease-in-out duration-500 hover:bg-grey hover:text-black'>
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
      <div
        ref={navRef}
        className={`w-100vw h-screen fixed top-0 left-0 bg-black/70 translate-y-[71px] z-10 hidden opacity-0`}
        onClick={handleClick}
      >
        <nav
          ref={menuRef}
          className='bg-white text-link font-bold uppercase mx-auto text-center pt-8 z-10 menu-clip'
        >
          <ul className='flex flex-col gap-5 pb-5 border-b border-black/25 mx-8'>
            {menu.map((item) => (
              <li key={item.key}>
                <Link to={item.src} onClick={handleClick}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <button className='w-[9.875rem] h-10 mt-5 mb-8 bg-black text-white md:flex justify-center items-center text-link uppercase transition-all ease-in-out duration-500 hover:bg-grey hover:text-black'>
            Get an invite
          </button>
        </nav>
      </div>
    </header>
  )
}
