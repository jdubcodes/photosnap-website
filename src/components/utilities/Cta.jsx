// Imported custom componenets
import InviteArrowBtn from './InviteArrowBtn'

export default function Cta() {
  return (
    <div className='h-[18rem] px-6 bg-cta-mobile bg-center bg-cover flex flex-col justify-center'>
      <h3 className='pb-8 text-heading-mobile text-white uppercase'>
        We're in beta. Get your invite today!
      </h3>
      <InviteArrowBtn />
    </div>
  )
}
