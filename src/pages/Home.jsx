import React from 'react'
import HeroSection from '../components/HeroSection'
import TimingSection from '../components/TimingSection'
import PopularCar from '../components/PopularCar'

const Home = () => {
  return (
    <div className='w-full bg-[#F6F7F9] '>
      <HeroSection />
      <TimingSection />
      <PopularCar />
    </div>
  )
}

export default Home
