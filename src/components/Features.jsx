// Imported custom data
import features from '../lib/data/features'
// Imported custom components
import Cta from './utilities/Cta'
// Imported assets
import featuresHero from '../assets/features/hero.jpg'

export default function Features() {
  return (
    <>
      <section className='bg-black text-white md:h-[30.625rem] md:grid md:grid-cols-home-tablet md:grid-rows-1 md:items-center lg:h-hero-tablet lg:grid-cols-home-tablet-reverse'>
        <img
          src={featuresHero}
          alt='hero image'
          className='w-full h-[294px] object-cover object-top md:h-full md:col-start-2 md:object-[30%] lg:object-[30%_15%]'
        />
        <div className='px-7 py-[4.5rem] flex flex-col gap-4 relative md:px-10 md:static md:col-start-1 md:row-start-1 lg:mx-auto'>
          <span className='w-[128px] h-[6px] bg-accent-mobile absolute top-0 md:w-[144px] md:top-[318px] md:-left-[69px] md:rotate-[-90deg] md:bg-accent-tablet lg:top-[398px]'></span>
          <h1 className='text-heading-mobile uppercase md:text-heading-tablet'>
            Features
          </h1>
          <p className='max-w-[24.063rem] text-body text-white/60'>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </section>
      <section className='my-16 flex flex-col gap-14 md:max-w-contain-t md:mx-auto md:px-10 md:grid md:grid-cols-2 md:gap-x-3.5 md:gap-y-[72px] lg:max-w-contain-d lg:py-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-[101px]'>
        {features.map((feature) => (
          <div
            key={feature.key}
            className='mx-auto max-w-[19.375rem] text-center md:max-w-[21.25rem] lg:max-w-[22rem] lg:mx-0 lg:flex lg:justify-center lg:items-center lg:flex-col'
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
