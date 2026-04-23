import React from 'react'
import Cars from '../data'
import Card from './Card'
import { Link } from 'react-router-dom'

const RecomendationCar = () => {
  return (
    <div className='max-w-7xl mx-auto my-12'>
  <h4 className='text-[#90A3BF] px-4 py-2 mb-5 font-semibold'>
    Recomendation Car
  </h4>

  <div className='px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
    {
      Cars.filter((item) => item.id >= 5).map((item, index) => {
        return <Card item={item} key={index} />
      })
    }
  </div>

  <div className='my-10 sm:my-12 lg:my-16 px-4 flex flex-col sm:flex-row justify-between items-center gap-4'>
    <div className='hidden sm:block'></div>

    <Link to='/category' onClick={() => window.scrollTo({top: 0,behavior: "smooth"})}  className='bg-[#3563E9] rounded text-white px-5 py-2.5 w-full sm:w-auto'>
      Show more car
    </Link>

    <p className='text-[#90A3BF]'>{Cars.length} Car</p>
  </div>
</div>
  )
}

export default RecomendationCar
