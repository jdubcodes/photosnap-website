import { useState } from 'react'
// Imported custom compoenents
import PriceToggle from './utilities/PriceToggle'
import Cta from './utilities/Cta'
// Imported assets
import pricingHero from '../assets/pricing/desktop/hero.jpg'

export default function Pricing() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <section className='bg-black text-white md:h-[30.625rem] md:grid md:grid-cols-home-tablet md:grid-rows-1 md:items-center lg:h-hero-tablet lg:grid-cols-home-tablet-reverse'>
        <img
          src={pricingHero}
          alt='hero image'
          className='w-full h-[294px] object-cover object-top md:h-full md:col-start-2 md:object-[55%]'
        />
        <div className='px-7 py-[4.5rem] flex flex-col gap-4 md:px-10 md:col-start-1 md:row-start-1 lg:mx-auto'>
          <h1 className='text-heading-mobile uppercase md:text-heading-tablet'>
            Pricing
          </h1>
          <p className='max-w-[24.063rem] text-body text-white/60'>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
      </section>
      <section>
        <PriceToggle
          checked={checked}
          handleChange={() => setChecked(!checked)}
        />
      </section>
      <section></section>
      <Cta />
    </>
  )
}
