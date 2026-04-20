import React from 'react'
import FirstCar from '../assets/koinsegg.png'
import SecondCar from '../assets/nissan-gtr.png'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-2 gap-4 py-8'>
        <div className='hero-banner-ks text-white p-6 rounded-2xl flex flex-col'>
            <div className='w-1/2 self-start'>
                <h2 className='text-3xl font-semibold mb-4'>The Best Platform for Car Rental</h2>
                <p className='mb-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className='py-2 px-4 bg-[#3563E9] rounded-sm'>Rental Car</button>
            </div>
            <img src={FirstCar} alt="" className='self-center'/>
        </div>
        <div className='hero-banner-gt text-white p-6 rounded-2xl flex flex-col'>
            <div className='w-1/2 self-start'>
                <h2 className='text-3xl font-semibold mb-4'>The Best Platform for Car Rental</h2>
                <p className='mb-4'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                <button className='py-2 px-4 bg-[#54A6FF] rounded-sm'>Rental Car</button>
            </div>
            <img src={SecondCar} alt="" className='self-center'/>
        </div>
    </div>
  )
}

export default HeroSection
