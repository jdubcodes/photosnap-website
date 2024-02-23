// Imported react utilities
import { Link } from 'react-router-dom'
// Imported custom data
import menu from '../lib/data/menu'
import socials from '../lib/data/socials'
// Imported custom components
import LightInviteBtn from './utilities/InviteArrowBtn'
// Imported assests
import logo from '../assets/shared/desktop/logo-light.svg'

export default function Footer() {
  return (
    <footer className='w-screen bg-black'>
      <div className='py-14 flex flex-col items-center md:max-w-[52rem] md:mx-auto md:px-10 md:grid md:grid-cols-2 md:grid-rows-footer-tablet lg:max-w-[73rem] lg:grid-cols-footer-desktop lg:grid-rows-footer-desktop'>
        <Link to='/' className='row-start-1 lg:self-start'>
          <img src={logo} alt='Logo' width={170} height={16} />
        </Link>
        <div
          id='socials'
          className='mt-8 flex gap-3 md:row-start-3 lg:row-start-2 lg:self-end'
        >
          {socials.map((social) => (
            <Link to='/' key={social.key}>
              <img src={social.src} alt={social.name} width={20} height={20} />
            </Link>
          ))}
        </div>
        <nav className='md:row-start-2 md:col-start-1 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:justify-self-start'>
          <ul className='mt-12 mb-[7.5rem] flex flex-col gap-5 text-link text-white text-center font-bold uppercase md:mb-16 md:flex-row lg:my-0 lg:ml-[6.875rem] lg:flex-col'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {menu.map((item) => (
              <li key={item.key}>
                <Link to={item.src}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <LightInviteBtn />
        <p className='mt-8 text-white opacity-50 md:row-start-3 md:col-start-2 md:justify-self-end lg:col-start-3 lg:row-start-2 lg:self-end'>
          Copyright 2019. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
