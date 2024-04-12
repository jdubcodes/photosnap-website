import { useRef } from 'react'
// Imported custom ddta
import benefitCards from '../lib/data/benefitCards'
import storyCards from '../lib/data/storyCards'
import featureCards from '../lib/data/featureCards'
// Imported assets
import hero from '../assets/home/create-and-share.jpg'
import arrowLight from '../assets/shared/arrowLight.svg'
import arrowDark from '../assets/shared/arrowDark.svg'
// Imported components
import InviteArrowBtn from './utilities/InviteArrowBtn'
// Imported GSAP utilities
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const tl = useRef()

  useGSAP(() => {
    gsap.utils.toArray('.panel').forEach((panel) => {
      ScrollTrigger.create({
        trigger: panel,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      })
    })
  })

  return (
    <main>
      <section className='bg-black md:grid md:grid-cols-home-tablet overflow-x-hidden md:place-items-center lg:grid-cols-home-desktop panel'>
        <img
          src={hero}
          alt='hero image'
          className='w-full h-hero-mobile object-cover object-[50%_31%] md:h-hero-tablet md:col-start-2'
        />
        <div className='px-9 py-19 relative flex flex-col gap-6 text-white md:row-start-1 md:max-w-[378px] md:px-0 md:static'>
          <span className='w-[128px] h-[6px] bg-accent-mobile absolute top-0 md:w-[302px] md:top-[396px] md:-left-[148px] md:rotate-[-90deg] md:bg-accent-tablet'></span>
          <h1 className='text-heading-mobile uppercase text-balance md:text-heading-tablet md:text-wrap'>
            Create and share your photo stories.
          </h1>
          <p className='mb-2 max-w-[400px] text-body text-white/60'>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <InviteArrowBtn justify='start' />
        </div>
      </section>
      <section>
        {benefitCards.map((card) => (
          <div
            key={card.key}
            className={`bg-white md:min-h-[600px] md:grid md:place-items-center lg:grid-cols-home-desktop-reverse panel ${
              card.key == 1
                ? `md:grid-cols-home-tablet-reverse`
                : `md:grid-cols-home-tablet`
            }`}
          >
            <img
              src={`src/assets/home/${card.src}`}
              alt='section image'
              className={
                card.key == 1
                  ? `w-full h-card-img-mobile object-cover object-center md:h-card-img-tablet md:object-[15%]`
                  : `w-full h-card-img-mobile object-cover object-[50%_10%] md:h-card-img-tablet md:col-start-2`
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
              <button className='mt-2 flex items-center gap-[1.125rem] text-link font-bold uppercase text-left group'>
                <span
                  className='pb-[1px] relative transition-all w-min-content
          before:w-0 before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-black before:transition-all before:ease-in-out before:duration-500
          group-hover:before:w-full group-hover:before:left-0'
                >
                  View the stories
                </span>
                <img
                  src={arrowDark}
                  alt='arrow'
                  className='group-hover:translate-x-1 transition-all ease-in-out duration-300'
                />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section className='grid overflow-hidden relative bg-white md:grid-cols-2 lg:grid-cols-4'>
        {storyCards.map((card) => (
          <div
            key={card.key}
            className='h-story-img px-8 py-10 flex flex-col relative text-white transform-all duration-300 ease-in-out cursor-pointer group hover:-translate-y-6'
            style={{
              background: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.66)), url(${card.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 35%',
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
            <span className='w-full h-[6px] absolute bottom-0 -translate-x-8 translate-y-[6px] bg-accent-tablet'></span>
          </div>
        ))}
      </section>
      <section className='px-9 py-20 flex flex-col gap-14 bg-white lg:px-0 lg:flex-row lg:gap-[1.875rem] lg:justify-center items-end panel'>
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
