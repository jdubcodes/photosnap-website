import { useState } from 'react'
// Imported custom compoenents
import PriceToggle from './utilities/PriceToggle'
import PriceCard from './utilities/PriceCard'
import Cta from './utilities/Cta'
// Imported assets
import pricingHero from '../assets/pricing/desktop/hero.jpg'
// Imported custom data
import { basic, pro, business } from '../lib/data/priceCards'
import PricingFeatures from './utilities/PricingFeatures'

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
      <section className='mb-16 md:mb-28 lg:mb-40'>
        <PriceToggle
          checked={checked}
          handleChange={() => setChecked(!checked)}
        />
        <div className='mt-10 px-7 flex flex-col gap-6 items-center md:gap-0 lg:mt-12 lg:flex-row lg:justify-center lg:gap-[1.875rem]'>
          <PriceCard
            heading={basic.title}
            body={basic.body}
            price={checked ? basic.price.yearly : basic.price.monthly}
            time={checked ? 'year' : 'month'}
            cardBg='grey'
            textColor='black'
            btnBg='black'
            btnTextColor='white'
          />
          <PriceCard
            heading={pro.title}
            body={pro.body}
            price={checked ? pro.price.yearly : pro.price.monthly}
            time={checked ? 'year' : 'month'}
            cardBg='black'
            textColor='white'
            btnBg='white'
            btnTextColor='black'
            height='price-card'
          />
          <PriceCard
            heading={business.title}
            body={business.body}
            price={checked ? business.price.yearly : business.price.monthly}
            time={checked ? 'year' : 'month'}
            cardBg='grey'
            textColor='black'
            btnBg='black'
            btnTextColor='white'
          />
        </div>
      </section>
      <section className=''>
        <h3 className='hidden text-black text-heading-tablet text-center uppercase md:block md:mb-16'>
          Compare
        </h3>
        <PricingFeatures />
      </section>
      <Cta />
    </>
  )
}
