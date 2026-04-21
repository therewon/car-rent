import React from 'react'
import FirstCar from '../assets/koinsegg.png'
import SecondCar from '../assets/nissan-gtr.png'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 sm:px-6 lg:px-0 gap-4 py-6 sm:py-8'>
      
      <div className='hero-banner-ks text-white p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[400px]'>
        <div className='w-full sm:w-[70%] lg:w-1/2 self-start'>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4'>
            The Best Platform for Car Rental
          </h2>
          <p className='mb-4 text-sm sm:text-base'>
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className='py-2 px-4 bg-[#3563E9] rounded-sm text-sm sm:text-base'>
            Rental Car
          </button>
        </div>

        <img
          src={FirstCar}
          alt=""
          className='self-center w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] mt-6 object-contain'
        />
      </div>

      <div className='hero-banner-gt text-white p-5 sm:p-6 md:p-8 rounded-2xl hidden lg:flex flex-col justify-between min-h-[320px] sm:min-h-[360px] md:min-h-[400px]'>
        <div className='w-full sm:w-[70%] lg:w-1/2 self-start'>
          <h2 className='text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4'>
            The Best Platform for Car Rental
          </h2>
          <p className='mb-4 text-sm sm:text-base'>
            Ease of doing a car rental safely and reliably. Of course at a low price.
          </p>
          <button className='py-2 px-4 bg-[#54A6FF] rounded-sm text-sm sm:text-base'>
            Rental Car
          </button>
        </div>

        <img
          src={SecondCar}
          alt=""
          className='self-center w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] mt-6 object-contain'
        />
      </div>
    </div>
  )
}

export default HeroSection