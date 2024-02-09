// Imported react utilities
import { Link } from 'react-router-dom'

// Imported assests
import logo from '../assets/shared/desktop/logo-light.svg'

export default function Footer() {
  return (
    <footer className='py-14 flex flex-col items-center bg-black'>
      <Link to='/'>
        <img src={logo} alt='Logo' width={170} height={16} />
      </Link>
    </footer>
  )
}
