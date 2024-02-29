// Imported assets
import arrowLight from '../../assets/shared/arrowLight.svg'

export default function Cta() {
  return (
    <div className='h-[18rem] px-6 bg-cta bg-center bg-cover flex items-center justify-center md:px-0'>
      <div className='max-w-[20.5rem] flex flex-col justify-center md:w-full md:max-w-contain-t md:px-10 md:flex-row md:justify-between md:items-center lg:max-w-contain-d'>
        <h3 className='max-w-[400px] pb-8 text-heading-mobile text-white uppercase md:py-0 md:text-heading-tablet'>
          We're in beta. Get your invite today!
        </h3>
        <button className='flex gap-[1.125rem] items-center text-link text-white font-bold uppercase md:row-start-1 md:col-start-2 md:justify-end lg:col-start-3 group'>
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
      </div>
    </div>
  )
}
