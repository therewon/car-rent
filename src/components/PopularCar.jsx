import React from 'react'
import Cars from '../data'
import Card from './Card'

const PopularCar = () => {
  return (
    <div className='max-w-7xl mx-auto my-12'>
  <div className='flex justify-between px-4 items-center py-2 mb-5'>
    <h4 className='text-gray-400 font-semibold'>Popular Car</h4>
    <button className='text-[#3563E9] font-semibold'>View All</button>
  </div>

  <div className='overflow-x-auto px-4'>
    <div className='flex gap-4 min-w-max md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:min-w-0'>
      {
        Cars.filter((item) => item.id < 5).map((item, index) => {
          return (
            <div key={index} className='w-[260px] sm:w-[280px] md:w-auto shrink-0'>
              <Card item={item} />
            </div>
          )
        })
      }
    </div>
  </div>
</div>
  )
}

export default PopularCar
