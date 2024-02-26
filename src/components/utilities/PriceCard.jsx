export default function PriceCard({
  heading,
  body,
  price,
  time,
  cardBg,
  textColor,
  btnBg,
  btnTextColor,
}) {
  return (
    <div
      className={`max-w-[20rem] pt-14 px-6 pb-10 bg-${cardBg} flex flex-col gap-10 justify-center text-center`}
    >
      <div className={`text-${textColor}`}>
        <h5 className='mb-6 text-price-title'>{heading}</h5>
        <p className='text-body opacity-60 text-balance'>{body}</p>
      </div>
      <div className={`flex flex-col text-${textColor}`}>
        <span className='text-heading-tablet'>${price}</span>
        <span className='text-price-time opacity-60'>per {time}</span>
      </div>
      <button
        className={`w-full h-10 bg-${btnBg} text-${btnTextColor} text-price-btn uppercase`}
      >
        Pick plan
      </button>
    </div>
  )
}
