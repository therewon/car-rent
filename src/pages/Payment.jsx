import React from 'react'
import { useParams } from 'react-router-dom'
import Cars from '../data'
import Star from '../assets/star-active.png'
import NonStar from '../assets/star-nonactive.png'
import Mark from '../assets/mark.svg'
import Visa from '../assets/Visa.png'
import Bitcoin from '../assets/Bitcoin.png'
import PayPal from '../assets/PayPal.png'
import Safety from '../assets/ic-security-safety.png'

const Payment = () => {
  const { id } = useParams()
  const car = Cars.find((item) => item.id === Number(id))
  const rating = Math.floor(car.rating)

  return (
    <div className='bg-[#F6F7F9] md:px-8 px-6 py-8'>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 items-start max-w-7xl mx-auto'>

        <div className='col-span-2 lg:order-first order-last'>

          <div className='bg-white rounded-xl md:p-6 p-4 mb-4 '>
            <div className='flex justify-between md:items-end items-start mb-8'>
              <div>
                <h2 className='mb-1 text-[#1A202C] font-bold md:text-xl text-base'>Biling Info</h2>
                <p className='text-[#90A3BF] font-medium md:text-sm text-xs'>Please enter your billing info</p>
              </div>
              <div className='text-[#90A3BF] font-medium md:text-sm text-xs'>
                <p>Step 1 of 4</p>
              </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5'>
              <div>
                <h4 className='font-semibold mb-4 md:text-base text-sm'>Name</h4>
                <input type="text" placeholder='Your name' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]' />
              </div>
              <div>
                <h4 className='font-semibold mb-4 md:text-base text-sm'>Phone Number</h4>
                <input type="text" placeholder='Phone number' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]' />
              </div>
              <div>
                <h4 className='font-semibold mb-4 md:text-base text-sm'>Address</h4>
                <input type="text" placeholder='Address' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]' />
              </div>
              <div>
                <h4 className='font-semibold mb-4 md:text-base text-sm'>Town / City</h4>
                <input type="text" placeholder='Town or city' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl md:p-6 p-4 mb-4'>
            <div className='flex justify-between md:items-end items-start mb-8'>
              <div>
                <h2 className='mb-1 text-[#1A202C] font-bold md:text-xl text-base'>Rental Info</h2>
                <p className='text-[#90A3BF] font-medium md:text-sm text-xs'>Please enter your rental info</p>
              </div>
              <div className='text-[#90A3BF] font-medium md:text-sm text-xs'>
                <p>Step 2 of 4</p>
              </div>
            </div>
            <div className='flex gap-2 mb-6'>
              <img src={Mark} alt="" />
              <h4 className='font-semibold'>Pick - Up</h4>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5 mb-8'>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Locations</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your city</option>
                  </select>
                </div>
              </div>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Date</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your date</option>
                  </select>
                </div>
              </div>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Time</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your time</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='flex gap-2 mb-6'>
              <img src={Mark} alt="" />
              <h4 className='font-semibold'>Drop - Off</h4>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-5'>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Locations</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your city</option>
                  </select>
                </div>
              </div>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Date</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your date</option>
                  </select>
                </div>
              </div>
              <div>
                <h4 className='font-semibold md:text-base text-sm mb-4'>Time</h4>
                <div className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'>
                  <select type="text" className='w-full' >
                    <option value="">Select your time</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl md:p-6 p-4 mb-4'>
            <div className='flex justify-between md:items-end items-start mb-8'>
              <div>
                <h2 className='mb-1 text-[#1A202C] font-bold md:text-xl text-base'>Payment Method</h2>
                <p className='text-[#90A3BF] font-medium md:text-sm text-xs'>Please enter your payment method</p>
              </div>
              <div className='text-[#90A3BF] font-medium md:text-sm text-xs'>
                <p>Step 3 of 4</p>
              </div>
            </div>

            <div className='bg-[#F6F7F9] md:p-6 p-4 rounded-xl mb-6'>
              <div className='flex justify-between items-center mb-8'>
                <div className='flex gap-2'>
                  <img src={Mark} alt="" />
                  <h4 className='font-semibold'>Credit Card</h4>
                </div>
                <img src={Visa} alt="" />
              </div>
              <div className='grid md:grid-cols-2 md:gap-8 gap-5'>
                <div>
                  <h4 className='font-semibold md:text-base text-sm mb-4'>Card Number</h4>
                  <input type="text" placeholder='Card number' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-white text-[#90A3BF]' />
                </div>
                <div>
                  <h4 className='font-semibold md:text-base text-sm mb-4'>Expration Date</h4>
                  <input type="text" placeholder='DD/MM/YY' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-white text-[#90A3BF]' />
                </div>
                <div>
                  <h4 className='font-semibold md:text-base text-sm mb-4'>Card Holder</h4>
                  <input type="text" placeholder='Card holder' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-white text-[#90A3BF]' />
                </div>
                <div>
                  <h4 className='font-semibold md:text-base text-sm mb-4'>CVC</h4>
                  <input type="text" placeholder='CVC' className='md:px-8 px-6 py-4 md:text-sm text-xs rounded-2xl w-full bg-white text-[#90A3BF]' />
                </div>
              </div>
            </div>

            <div className='bg-[#F6F7F9] md:py-6 md:px-8 p-4 rounded-xl flex justify-between items-center mb-6'>
              <div className='flex md:gap-5 gap-2 items-center'>
                <input type="radio" className='md:w-6 md:h-6 h-4 w-4' />
                <p className='font-semibold md:text-base text-sm'>PayPal</p>
              </div>
              <img src={PayPal} alt="" />
            </div>

            <div className='bg-[#F6F7F9] md:py-6 md:px-8 p-4 rounded-xl flex justify-between items-center'>
              <div className='flex md:gap-5 gap-2 items-center'>
                <input type="radio" className='md:w-6 md:h-6 h-4 w-4' />
                <p className='font-semibold md:text-base text-sm'>Bitcoin</p>
              </div>
              <img src={Bitcoin} alt="" />
            </div>
          </div>

          <div className='bg-white rounded-xl md:p-6 p-4 mb-4'>
            <div className='flex justify-between md:items-end items-start mb-8'>
              <div className='w-2/3'>
                <h2 className='mb-1 text-[#1A202C] font-bold md:text-xl text-base'>Confirmation</h2>
                <p className='text-[#90A3BF] font-medium md:text-sm text-xs'>We are getting to the end. Just few clicks and your rental is ready!</p>
              </div>
              <div className='text-[#90A3BF] font-medium md:text-sm text-xs'>
                <p>Step 4 of 4</p>
              </div>
            </div>

            <div className='mb-8'>
              <div className='bg-[#F6F7F9] flex md:px-8 px-4 py-4 rounded-xl mb-6'>
                <input type="checkbox" className='md:w-6 w-4 mr-5' />
                <p className='font-semibold md:text-base text-sm'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
              </div>
              <div className='bg-[#F6F7F9] flex md:px-8 px-4 py-4 rounded-xl'>
                <input type="checkbox" className='md:w-6 w-4 mr-5' />
                <p className='font-semibold md:text-base text-sm'>I agree with our terms and conditions and privacy policy.</p>
              </div>
            </div>

            <button className='bg-[#3563E9] rounded-xl font-bold text-white md:py-4 py-2.5 px-4 md:px-8 mb-8'>
              Rent Now
            </button>

            <div>
              <img src={Safety} alt="" className='mb-4' />
              <h2 className='font-semibold mb-2'>All your data are safe</h2>
              <p className='text-[#90A3BF] font-medium'>We are using the most advanced security to provide you the best experience ever.</p>
            </div>
          </div>

        </div>
        <div className='lg:col-span-1 col-span-2 lg:order-last order-first bg-white rounded-xl md:p-6 p-4'>
          <h2 className='font-bold md:text-xl text-base mb-1'>Rental Summary</h2>
          <p className='font-medium text-[#90A3BF] md:text-sm text-xs mb-8'>Prices may change depending on the length of the rental and the price of your rental car.</p>
          <div className='flex border-b md:pb-8 pb-6 border-[#C3D4E966] gap-4'>
            <div className='hero-banner-gt flex items-center px-2 py-9 rounded-xl'>
              <img src={car.image} alt="" className='w-29' />
            </div>
            <div>
              <h1 className='font-bold md:text-[32px] text-xl md:mb-2 mb-3'>{car.name}</h1>
              <div className='mb-6'>
                <div className='mr-2 flex flex-wrap items-center md:gap-0.5 gap-1 mb-1'>
                  {[...Array(rating)].map((_, i) => (
                    <img key={i} src={Star} alt='star' className='md:w-5 w-3' />
                  ))}

                  {car.rating > rating + 0.5 && <img src={NonStar} alt='half star' className='md:w-5 w-3' />}

                </div>
                <div className='text-sm text-[#596780]'>{car.reviews.length} + Reviewer</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:gap-6 gap-3 md:my-8 my-6'>
            <div className='flex justify-between items-center'>
              <div className='font-medium text-[#90A3BF] md:text-base text-xs'>Subtotal</div>
              <div className='font-semibold'>${car.price}</div>
            </div>
            <div className='flex justify-between items-center'>
              <div className='font-medium text-[#90A3BF] md:text-base text-xs'>Tax</div>
              <div className='font-semibold'>$0</div>
            </div>
            <div className='md:px-8 px-5  md:py-4 py-2.5 bg-[#F6F7F9] md:rounded-2xl rounded-lg flex justify-between items-center mb-8'>
              <input type="text" placeholder='Apply promo code' className='text-[#90A3BF] md:text-base text-xs' />
              <button className='font-semibold text-[#1A202C]  md:text-base text-xs'>Apply now</button>
            </div>

            <div className='flex justify-between items-center'>
              <div>
                <h1 className='font-bold md:text-xl text-base'>Total Rental Price</h1>
                <p className='font-medium md:text-sm text-xs text-[#90A3BF] w-2/3'>Overall price and includes rental discount</p>
              </div>
              <div className='font-bold md:text-[32px] text-xl'>
                ${car.price}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
