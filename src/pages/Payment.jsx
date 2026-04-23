import React from 'react'
import { useParams } from 'react-router-dom'
import Cars from '../data'
import Star from '../assets/star-active.png'
import NonStar from '../assets/star-nonactive.png'

const Payment = () => {
  const { id } = useParams()
  const car = Cars.find((item) => item.id === Number(id))
  const rating = Math.floor(car.rating)

  return (
    <div className='bg-[#F6F7F9] p-8 grid grid-cols-3 gap-8'>
      <div className='col-span-2 bg-white rounded-xl p-6'>
        <div>
          <h2 className='mb-1 text-[#1A202C] font-bold text-xl'>Biling Info</h2>
          <div className='flex justify-between mb-8 text-[#90A3BF] font-medium text-sm'>
            <p>Please enter your billing info</p>
            <p>Step 1 of 4</p>
          </div>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <h4 className='font-semibold mb-4'>Name</h4>
              <input type="text" placeholder='Your name' className='px-8 py-4 text-sm rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'/>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Phone Number</h4>
              <input type="text" placeholder='Phone number' className='px-8 py-4 text-sm rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'/>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Address</h4>
              <input type="text" placeholder='Address' className='px-8 py-4 text-sm rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'/>
            </div>
            <div>
              <h4 className='font-semibold mb-4'>Town / City</h4>
              <input type="text" placeholder='Town or city' className='px-8 py-4 text-sm rounded-2xl w-full bg-[#F6F7F9] text-[#90A3BF]'/>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-1 bg-white rounded-xl p-6'>
        <h2 className='font-bold text-xl mb-1'>Rental Summary</h2>
        <p className='font-medium text-[#90A3BF] text-sm mb-8'>Prices may change depending on the length of the rental and the price of your rental car.</p>
        <div className='flex border-b'>
          <div className=''>
            <img src={car.image} alt="" />
          </div>
          <div>
            <h1 className='font-bold text-[32px]'>{car.name}</h1>
            <div className='flex flex-wrap items-center gap-2 mb-6'>
              {[...Array(rating)].map((_, i) => (
                <img key={i} src={Star} alt='star' />
              ))}

              {car.rating > rating + 0.5 && <img src={NonStar} alt='half star' />}

              <div className='text-sm text-[#596780]'>{car.reviews.length}+ Reviewer</div>
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-between '>
            <div className='font-medium text-[#90A3BF]'>Subtotal</div>
            <div className='font-semibold '>${car.price}</div>
          </div>
          <div className='flex justify-between '>
            <div className='font-medium text-[#90A3BF]'>Tax</div>
            <div className='font-semibold'>$0</div>
          </div>
          <div className='px-8 py-4 bg-[#F6F7F9] rounded-2xl flex justify-between items-center'>
            <input type="text" placeholder='Apply promo code' className='text-[#90A3BF]'/>
            <button className='font-semibold text-[#1A202C]'>Apply now</button>
          </div>

          <div className='flex justify-between items-center'>
            <div>
              <h1 className='font-bold text-xl'>Total Rental Price</h1>
              <p className='font-medium text-sm text-[#90A3BF]'>Overall price and includes rental discount</p>
            </div>
            <div className='font-bold text-[32px]'>
              ${car.price}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
