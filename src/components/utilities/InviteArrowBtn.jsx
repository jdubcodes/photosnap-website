// Imported assests
import arrowLight from '../../assets/shared/arrowLight.svg'

export default function InviteArrowBtn({ justify }) {
  return (
    <button
      className={`flex gap-[1.125rem] items-center text-link text-white font-bold uppercase md:row-start-1 md:col-start-2 md:justify-${justify} lg:col-start-3 lg:self-start group`}
    >
      <span
        className='pb-[1px] relative transition-all w-min-content
          before:w-0 before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-white before:transition-all before:ease-in-out before:duration-500
          group-hover:before:w-full group-hover:before:left-0'
      >
        Get An Invite
      </span>
      <img
        src={arrowLight}
        alt='arrow'
        className='group-hover:translate-x-[2px] transition-all ease-in-out duration-300'
      />
    </button>
  )
}
