// Imported custom data
import stories from '../lib/data/stories'

// Imported assets
import arrowLight from '../assets/shared/arrowLight.svg'
import moonMobile from '../assets/stories/mobile/moon-of-appalacia.jpg'
import moonTablet from '../assets/stories/mobile/moon-of-appalacia.jpg'

export default function Stories() {
  return (
    <>
      <section className='min-h-vp-mobile grid grid-row-2 bg-black text-white md:min-h-0 md:h-[40.625rem] md:bg-stories-tablet md:bg-cover md:bg-center md:flex md:items-center lg:bg-stories-desktop lg:bg-top'>
        <img
          src={moonMobile}
          alt='mountains'
          className='w-full h-[317px] object-cover object-top md:hidden'
        />
        <div className='px-7 py-12 md:pl-10 md:pr-0 md:py-0 lg:pl-40'>
          <p className='text-link text-bold uppercase'>
            Last month's featured story
          </p>
          <h1 className='max-w-[300px] my-4 text-heading-mobile uppercase text-balance md:text-heading-tablet'>
            Hazy Full Moon of Appalachia
          </h1>
          <p className='text-author'>
            <span className='opacity-75 mr-2'>March 2nd 2020 </span>
            <span>by John Appleseed</span>
          </p>
          <p className='mt-6 mb-8 text-body text-white/60 md:text-balance md:max-w-[24rem] lg:text-wrap'>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>
          <button className='w-full mt-4 flex items-center justify-between text-link uppercase font-bold md:justify-normal md:gap-4'>
            Read the story
            <img src={arrowLight} alt='arrow' />
          </button>
        </div>
      </section>
      <section className='md:grid md:grid-cols-2 lg:grid-cols-4'>
        {stories.map((story) => (
          <div
            key={story.key}
            className='h-story-img px-8 py-10 flex flex-col text-white'
            style={{
              background: `linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.66)), url(${story.srcMobile})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <p className='mt-auto text-author'>{story.date}</p>
            <h3 className='my-1 text-card-heading font-bold'>
              {story.heading}
            </h3>
            <p className='pb-4 border-b border-grey/25 text-author'>
              by {story.author}
            </p>
            <button className='w-full mt-4 flex items-center justify-between text-link uppercase font-bold'>
              Read story
              <img src={arrowLight} alt='arrow' />
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
