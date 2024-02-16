// Imported assests
import arrowLight from '../../assets/shared/arrowLight.svg'

export default function InviteArrowBtn() {
  return (
    <button className='flex gap-[1.125rem] items-center text-link text-white font-bold uppercase'>
      Get An Invite
      <img src={arrowLight} alt='arrow' />
    </button>
  )
}
