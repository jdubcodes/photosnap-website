// Imported assests
import arrowLight from '../../assets/shared/arrowLight.svg'

export default function InviteArrowBtn() {
  return (
    <button className='flex gap-[1.125rem] items-center text-link text-white font-bold uppercase md:row-start-1 md:col-start-2 md:justify-end lg:col-start-3 lg:self-start'>
      Get An Invite
      <img src={arrowLight} alt='arrow' />
    </button>
  )
}
