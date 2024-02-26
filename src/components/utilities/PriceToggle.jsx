export default function PriceToggle({ checked, handleChange }) {
  return (
    <div className='mt-16 flex justify-center items-center md:mt-28 lg:mt-[7.5rem]'>
      <div className='flex flex-row text-card-heading font-bold'>
        <span className={checked ? `opacity-50` : ``}>Monthly</span>
        <label
          htmlFor='checkbox'
          className={
            checked
              ? 'w-16 h-8 mx-8 bg-black rounded-full flex justify-end items-center cursor-pointer'
              : 'w-16 h-8 mx-8 bg-grey rounded-full flex items-center cursor-pointer'
          }
        >
          <span
            className={
              checked
                ? 'w-6 h-6 rounded-full bg-white mx-1'
                : 'w-6 h-6 rounded-full bg-black mx-1 '
            }
          ></span>
        </label>
        <input
          type='checkbox'
          id='checkbox'
          checked={checked}
          onChange={handleChange}
          className='hidden'
        />
        <span className={checked ? `` : `opacity-50`}>Yearly</span>
      </div>
    </div>
  )
}
