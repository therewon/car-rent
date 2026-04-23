import React from 'react'
import { useStoreContext } from '../context/StoreContext'
import Card from '../components/Card'
import Cars from '../data'

const LikedCars = () => {
  const { likedCars } = useStoreContext()

  const likedData = Cars.filter((car) => likedCars.includes(car.id))

  return (
    <div className='bg-[#F6F7F9] min-h-screen'>
      <div className='max-w-7xl mx-auto py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8'>
        <h2 className='text-lg sm:text-xl lg:text-2xl text-[#90A3BF] py-4'>
          Liked Cars
        </h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {likedData.length > 0 ? (
            likedData.map((item) => {
              return <Card item={item} key={item.id} />
            })
          ) : (
            <div className='col-span-full text-center py-10'>
              <p className='text-[#90A3BF] text-base sm:text-lg'>Not found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LikedCars