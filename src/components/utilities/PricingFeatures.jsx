import { Fragment } from 'react'
// Imported assets
import checkmark from '../../assets/shared/checkmark.svg'
// Imported custom data
import pricingTable from '../../lib/data/pricingTable'

export default function PricingFeatures() {
  return (
    <>
      <h3 className='w-[20.875rem] mb-6 mx-auto pb-6 text-price-btn uppercase border-b border-black md:hidden'>
        The Features
      </h3>
      <table className='mx-auto mb-10 md:hidden'>
        <tbody>
          {pricingTable.map((feature, index) => (
            <Fragment key={index}>
              <tr className='w-[20.875rem]'>
                <th
                  colSpan='3'
                  className='pb-4 text-price-btn uppercase text-left'
                >
                  {feature.name}
                </th>
              </tr>
              <tr className='w-[20.875rem] mb-6 pr-12 pb-6 flex justify-between border-b border-grey text-package-name uppercase'>
                <td>
                  <span className='opacity-50'>Basic</span>
                  {feature.basic && (
                    <img src={checkmark} alt='checkmark' className='mt-2' />
                  )}
                </td>
                <td>
                  <span className='opacity-50'>Pro</span>
                  {feature.pro && (
                    <img src={checkmark} alt='checkmark' className='mt-2' />
                  )}
                </td>
                <td>
                  <span className='opacity-50'>Business</span>
                  {feature.business && (
                    <img src={checkmark} alt='checkmark' className='mt-2' />
                  )}
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <table className='hidden mx-auto mb-28 px-10 md:flex'>
        <tbody className='mx-auto lg:w-[56rem]'>
          <tr className='hidden pb-6 border-b border-black justify-between text-price-btn uppercase md:flex'>
            <th className='mr-auto pl-6'>The Features</th>
            <th className='min-w-[8.75rem]'>Basic</th>
            <th className='min-w-[8.75rem]'>Pro</th>
            <th className='min-w-[8.75rem]'>Business</th>
          </tr>
          {pricingTable.map((feature, index) => (
            <tr
              key={index}
              className='my-6 pb-6 flex justify-center border-b border-grey'
            >
              <td className='mr-auto pl-6 text-price-btn uppercase'>
                {feature.name}
              </td>
              {/* Display checkmark if true, else return empty <td> */}
              {feature.basic ? (
                <td className='min-w-[8.75rem] flex justify-center items-center'>
                  <img src={checkmark} alt='checkmark' />
                </td>
              ) : (
                <td></td>
              )}
              {feature.pro ? (
                <td className='min-w-[8.75rem] flex justify-center items-center'>
                  <img src={checkmark} alt='checkmark' />
                </td>
              ) : (
                <td></td>
              )}
              {feature.business && (
                <td className='min-w-[8.75rem] flex justify-center items-center'>
                  <img src={checkmark} alt='checkmark' />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
