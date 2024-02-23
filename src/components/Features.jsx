// Imported custom data
import features from '../lib/data/features'
// Imported custom components
import Cta from './utilities/Cta'
// Imported assets
import featuresHero from '../assets/features/mobile/hero.jpg'

export default function Features() {
  return (
    <>
      <section className='bg-black text-white'>
        <img
          src={featuresHero}
          alt='hero image'
          className='w-full h-[294px] object-cover object-top md:hidden'
        />
        <div className='px-7 py-[4.5rem] flex flex-col gap-4'>
          <h1 className='text-heading-mobile uppercase md:text-headline-tablet'>
            Features
          </h1>
          <p className='text-body text-white/60'>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </section>
      <section className='my-16 flex flex-col gap-14'>
        {features.map((feature) => (
          <div
            key={feature.key}
            className='mx-auto max-w-[19.375rem] text-center md:max-w-[28.625rem] lg:max-w-[22rem] lg:mx-0 lg:flex lg:justify-center lg:items-center lg:flex-col'
          >
            <img
              src={feature.src}
              alt={feature.heading}
              className='w-[72px] h-[72px] mx-auto mb-8'
            />
            <h3 className='mb-4 text-card-heading font-bold'>
              {feature.heading}
            </h3>
            <p className='text-body lg:h-[4.75rem] lg:text-pretty'>
              {feature.body}
            </p>
          </div>
        ))}
      </section>
      <Cta />
    </>
  )
}
