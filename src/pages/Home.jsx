import React from 'react'
import HeroSection from '../components/HeroSection'
import TimingSection from '../components/TimingSection'
import PopularCar from '../components/PopularCar'
import RecomendationCar from '../components/RecomendationCar'

const Home = () => {
  return (
    <div className='w-full bg-[#F6F7F9] pb-16'>
      <HeroSection />
      <TimingSection />
      <PopularCar />
      <RecomendationCar />
    </div>
  )
}

export default Home
