export default function PriceCard({
  heading,
  body,
  price,
  time,
  cardBg,
  textColor,
  btnBg,
  btnTextColor,
  height,
}) {
  return (
    <div
      className={
        height
          ? `max-w-[20rem] pt-14 px-6 pb-10 bg-${cardBg} flex flex-col gap-10 justify-center text-center md:max-w-full md:w-[43.063rem] md:pt-10 md:px-10 md:text-left md:relative lg:w-[21.875rem] lg:h-price-card lg:pt-14 lg:flex lg:items-center lg:text-center`
          : `max-w-[20rem] pt-14 px-6 pb-10 bg-${cardBg} flex flex-col gap-10 justify-center text-center md:max-w-full md:w-[43.063rem] md:pt-10 md:px-10 md:text-left md:relative lg:w-[21.875rem] lg:pt-14 lg:flex lg:items-center lg:text-center`
      }
    >
      <div className={`text-${textColor}`}>
        <h5 className='mb-6 text-price-title'>{heading}</h5>
        <p className='text-body opacity-60 text-balance md:max-w-[16.875rem] md:text-wrap lg:text-balance'>
          {body}
        </p>
      </div>
      <div
        className={`flex flex-col text-${textColor} md:absolute md:top-10 md:right-10 lg:static`}
      >
        <span className='text-heading-tablet'>${price}</span>
        <span className='text-price-time opacity-60 md:text-right md:pr-2 lg:text-center'>
          per {time}
        </span>
      </div>
      <button
        className={`w-full h-10 bg-${btnBg} text-${btnTextColor} text-price-btn uppercase md:w-[16.875rem]`}
      >
        Pick plan
      </button>
    </div>
  )
}
