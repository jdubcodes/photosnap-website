// Imported custom ddta
import benefitCards from '../lib/data/benefitCards'
import storyCards from '../lib/data/storyCards'
import featureCards from '../lib/data/featureCards'
// Imported assets
import heroMobile from '../assets/home/mobile/create-and-share.jpg'
import heroTablet from '../assets/home/tablet/create-and-share.jpg'
import heroDesktop from '../assets/home/desktop/create-and-share.jpg'
import arrowLight from '../assets/shared/arrowLight.svg'
import arrowDark from '../assets/shared/arrowDark.svg'
// Imported components
import InviteArrowBtn from './utilities/InviteArrowBtn'

export default function Home() {
  return (
    <main>
      <section className='bg-black md:grid md:grid-cols-home-tablet md:place-items-center lg:grid-cols-home-desktop'>
        <img
          src={heroDesktop}
          alt='hero image'
          className='w-full h-hero-mobile object-cover object-[50%_31%] md:h-hero-tablet md:col-start-2'
        />
        <div className='px-9 py-19 flex flex-col gap-6 text-white md:row-start-1 md:max-w-[378px] md:px-0'>
          <h1 className='text-heading-mobile uppercase text-balance md:text-heading-tablet md:text-wrap'>
            Create and share your photo stories.
          </h1>
          <p className='mb-2 max-w-[400px] text-body text-white/60'>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <InviteArrowBtn />
        </div>
      </section>
      <section>
        {benefitCards.map((card) => (
          <div
            key={card.key}
            className={
              card.key == 1
                ? `md:min-h-[600px] md:grid md:grid-cols-home-tablet-reverse md:place-items-center lg:grid-cols-home-desktop-reverse`
                : `md:min-h-[600px] md:grid md:grid-cols-home-tablet md:place-items-center lg:grid-cols-home-desktop`
            }
          >
            <img
              src={`src/assets/home/${card.srcDesktop}`}
              alt='section image'
              className={
                card.key == 1
                  ? `w-full h-card-img-mobile object-cover object-center md:h-card-img-tablet`
                  : `w-full h-card-img-mobile object-cover object-center md:h-card-img-tablet md:col-start-2`
              }
            />
            <div
              className={
                card.key == 1
                  ? `px-9 py-19 flex flex-col gap-6 md:max-w-[378px] md:px-0 md:text-pretty`
                  : `px-9 py-19 flex flex-col gap-6 md:max-w-[378px] md:px-0 md:text-pretty md:row-start-1`
              }
            >
              <h2 className='text-heading-mobile uppercase text-balance md:text-heading-tablet md:text-wrap'>
                {card.heading}
              </h2>
              <p className='max-w-[400px] text-body'>{card.body}</p>
              <button className='mt-2 flex items-center gap-[1.125rem] text-link font-bold uppercase text-left'>
                View the stories
                <img src={arrowDark} alt='arrow' />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className='grid md:grid-cols-2 lg:grid-cols-4'>
        {storyCards.map((card) => (
          <div
            key={card.key}
            className='h-story-img px-8 py-10 flex flex-col text-white'
            style={{
              background: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.66)), url(${card.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <h3 className='mt-auto text-card-heading font-bold'>
              {card.heading}
            </h3>
            <p className='pb-4 border-b border-grey/25 text-author'>
              by {card.author}
            </p>
            <button className='w-full mt-4 flex items-center justify-between text-link uppercase font-bold'>
              Read story
              <img src={arrowLight} alt='arrow' />
            </button>
          </div>
        ))}
      </section>
      <section className='px-9 py-20 flex flex-col gap-14 lg:px-0 lg:flex-row lg:gap-[1.875rem] lg:justify-center items-end'>
        {featureCards.map((card) => (
          <div
            key={card.key}
            className='mx-auto text-center max-w-[19.375rem] md:max-w-[28.625rem] lg:max-w-[22rem] lg:mx-0 lg:flex lg:justify-center lg:items-center lg:flex-col'
          >
            <img
              src={card.src}
              alt={card.heading}
              className='w-[72px] h-[72px] mx-auto mb-12'
            />
            <h3 className='mb-4 text-card-heading font-bold'>{card.heading}</h3>
            <p className='text-body lg:h-[4.75rem] lg:text-pretty'>
              {card.body}
            </p>
          </div>
        ))}
      </section>
    </main>
  )
}
