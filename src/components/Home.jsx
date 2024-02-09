// Imported custom ddta
import benefitCards from '../lib/data/benefitCards'
import storyCards from '../lib/data/storyCards'
import featureCards from '../lib/data/featureCards'
// Imported assets
import hero from '../assets/home/mobile/create-and-share.jpg'
import arrowLight from '../assets/shared/arrowLight.svg'
import arrowDark from '../assets/shared/arrowDark.svg'

export default function Home() {
  return (
    <main>
      <section>
        <img src={hero} alt='hero image' className='w-full h-hero-img' />
        <div className='px-9 py-19 flex flex-col gap-6 bg-black text-white'>
          <h1 className='text-heading uppercase text-balance'>
            Create and share your photo stories.
          </h1>
          <p className='text-body text-white/60'>
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <button className='mt-2 flex items-center gap-[1.125rem] text-link font-bold uppercase text-left'>
            Get an invite
            <img src={arrowLight} alt='arrow' />
          </button>
        </div>
      </section>
      <section>
        {benefitCards.map((card) => (
          <div key={card.key}>
            <img
              src={`src/assets/home/mobile/${card.srcMobile}`}
              alt='section image'
              className='w-full h-card-img'
            />
            <div className='px-9 py-19 flex flex-col gap-6'>
              <h2 className='text-heading uppercase text-balance'>
                {card.heading}
              </h2>
              <p className='text-body'>{card.body}</p>
              <button className='mt-2 flex items-center gap-[1.125rem] text-link font-bold uppercase text-left'>
                View the stories
                <img src={arrowDark} alt='arrow' />
              </button>
            </div>
          </div>
        ))}
      </section>
      <section>
        {storyCards.map((card) => (
          <div
            key={card.key}
            className='h-story-img px-8 py-10 flex flex-col text-white'
            style={{
              background: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.66)), url(${card.srcMobile})`,
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
      <section className=' px-9 py-20 flex flex-col gap-14 '>
        {featureCards.map((card) => (
          <div key={card.key} className='text-center'>
            <img src={card.src} alt={card.heading} className='mx-auto mb-12' />
            <h3 className='mb-4 text-card-heading font-bold'>{card.heading}</h3>
            <p className='text-body'>{card.body}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
