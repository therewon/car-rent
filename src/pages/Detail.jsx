import React, { useEffect } from 'react'
import Cars from '../data'
import { Link, useParams } from 'react-router-dom'
import { IoHeart } from 'react-icons/io5'
import { useStoreContext } from '../context/StoreContext'
import Star from '../assets/star-active.png'
import NonStar from '../assets/star-nonactive.png'
import ProfilePicture from '../assets/male.png'
import { IoIosArrowDown } from 'react-icons/io'
import RecentCar from '../components/RecentCar'
import RecomendationCar from '../components/RecomendationCar'

const Detail = () => {
  const { id } = useParams()
  const { likedCars, setLikedCars } = useStoreContext()
  const favorite = likedCars.includes(Number(id))

  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars))
  }, [likedCars])

  const handleLike = () => {
    favorite
      ? setLikedCars((prev) => prev.filter((e) => e !== Number(id)))
      : setLikedCars((prev) => [...prev, Number(id)])
  }

  const car = Cars.find((item) => item.id === Number(id))
  const rating = Math.floor(car.rating)


  return (
    <div className='bg-[#F6F7F9] pb-8'>
  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 py-6 lg:py-8'>

      <div>
        <div className='hero-banner-gt rounded-xl flex flex-col p-4 sm:p-6 mb-4 sm:mb-6'>
          <h2 className='font-semibold text-2xl sm:text-[28px] lg:text-[32px] w-full sm:w-5/6 text-white leading-tight'>
            {car.type} car with the best design and acceleration
          </h2>

          <p className='text-white font-medium my-4 w-full sm:w-2/3 lg:w-1/2 text-sm sm:text-base'>
            Safety and comfort while driving a futuristic and elegant {car.type} car
          </p>

          <img
            className='w-full max-w-[420px] self-center object-contain'
            src={car.image}
            alt={car.name}
          />
        </div>

        <div className='grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6'>
          <div className='hero-banner-gt rounded-xl p-3 sm:p-4 h-24 sm:h-32 lg:h-40 flex items-center justify-center'>
            <img src={car.image} alt={car.name} className='w-full h-full object-contain' />
          </div>
          <div className='hero-banner-gt rounded-xl p-3 sm:p-4 h-24 sm:h-32 lg:h-40 flex items-center justify-center'>
            <img src={car.image} alt={car.name} className='w-full h-full object-contain' />
          </div>
          <div className='hero-banner-gt rounded-xl p-3 sm:p-4 h-24 sm:h-32 lg:h-40 flex items-center justify-center'>
            <img src={car.image} alt={car.name} className='w-full h-full object-contain' />
          </div>
        </div>
      </div>

      <div className='bg-white p-4 sm:p-6 rounded-xl'>
        <div className='flex justify-between items-start gap-4 mb-3'>
          <h1 className='text-2xl sm:text-[28px] lg:text-[32px] font-bold leading-tight'>
            {car.name}
          </h1>

          <div onClick={handleLike} className='shrink-0 cursor-pointer'>
            <IoHeart size={24} color={favorite ? 'red' : '#D1D5DB'} />
          </div>
        </div>

        <div className='flex flex-wrap items-center gap-2 mb-6'>
          {[...Array(rating)].map((_, i) => (
            <img key={i} src={Star} alt='star' />
          ))}

          {car.rating > rating + 0.5 && <img src={NonStar} alt='half star' />}

          <div className='text-sm text-[#596780]'>{car.reviews.length}+ Reviewer</div>
        </div>

        <p className='text-base sm:text-lg lg:text-xl text-[#596780] mb-6 sm:mb-8 leading-7'>
          {car.description}
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10 sm:mb-14 lg:mb-20'>
          <div className='flex justify-between text-base sm:text-lg lg:text-xl gap-4'>
            <p className='text-[#90A3BF]'>Type Car</p>
            <span className='font-semibold'>{car.type}</span>
          </div>

          <div className='flex justify-between text-base sm:text-lg lg:text-xl gap-4'>
            <p className='text-[#90A3BF]'>Capacity</p>
            <span className='font-semibold'>{car.capacity} Person</span>
          </div>

          <div className='flex justify-between text-base sm:text-lg lg:text-xl gap-4'>
            <p className='text-[#90A3BF]'>Steering</p>
            <span className='font-semibold'>{car.transmission}</span>
          </div>

          <div className='flex justify-between text-base sm:text-lg lg:text-xl gap-4'>
            <p className='text-[#90A3BF]'>Gasoline</p>
            <span className='font-semibold'>{car.fuel}</span>
          </div>
        </div>

        <div className='flex justify-between items-center gap-3 mt-8'>
          <div className='font-bold'>
            <div className='text-xl sm:text-2xl lg:text-[28px]'>
              ${car.price}/ <span className='text-sm sm:text-base lg:text-xl text-[#90A3BF]'>day</span>
            </div>

            {car.oldPrice && (
              <div className='font-bold text-sm sm:text-base line-through text-[#90A3BF]'>
                ${car.oldPrice}
              </div>
            )}
          </div>

          <Link
            to={`/payment/${car.id}`}
            className='bg-[#3563E9] text-white font-semibold text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 rounded whitespace-nowrap'
          >
            Rent Now
          </Link>
        </div>
      </div>
    </div>

    <div className='p-4 sm:p-6 bg-white rounded-xl flex flex-col'>
      <h2 className='font-semibold text-lg sm:text-xl mb-6 sm:mb-8'>
        Reviews
        <span className='ml-3 p-1 px-3 sm:px-4 text-white bg-[#3563E9] rounded'>
          {car.reviews.length}
        </span>
      </h2>

      <div className='flex flex-col gap-6'>
        {car.reviews.map((item) => {
          return (
            <div key={item.id}>
              <div className='flex gap-4 items-center mb-4'>
                <img src={ProfilePicture} className='w-10 h-10 object-cover' alt={item.user} />
                <h2 className='font-bold text-lg sm:text-xl'>{item.user}</h2>
              </div>
              <p className='text-sm sm:text-base text-[#596780] leading-7'>{item.comment}</p>
            </div>
          )
        })}
      </div>

      <button className='my-8 text-[#90A3BF] font-semibold flex items-center gap-4 self-center'>
        Show All <IoIosArrowDown />
      </button>
    </div>

    <RecentCar />
    <RecomendationCar />
  </div>
</div>
  )
}

export default Detail
