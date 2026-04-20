import React from 'react'
import Car from '../assets/koinsegg.png'

const HeroSection = () => {
  return (
    <div className='max-w-7xl mx-auto flex justify-between gap-4'>
        <img src={Car} alt="" className='w-1/2 h-1/2'/>
        <img src={Car} alt="" className='w-1/2 h-1/2'/>
    </div>
  )
}

export default HeroSection
