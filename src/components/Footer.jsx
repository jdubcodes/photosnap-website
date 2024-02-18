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
    <footer className='py-14 flex flex-col items-center bg-black'>
      <Link to='/'>
        <img src={logo} alt='Logo' width={170} height={16} />
      </Link>
      <div id='socials' className='mt-8 flex gap-3'>
        {socials.map((social) => (
          <Link to='/' key={social.key}>
            <img src={social.src} alt={social.name} width={20} height={20} />
          </Link>
        ))}
      </div>
      <nav>
        <ul className='mt-12 mb-[7.5rem] flex flex-col gap-5 text-link text-white text-center font-bold uppercase'>
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
      <p className='mt-8 text-white opacity-50'>
        Copyright 2019. All Rights Reserved
      </p>
    </footer>
  )
}
