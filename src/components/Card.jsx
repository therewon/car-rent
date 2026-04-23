import React, { useEffect, useState } from 'react'
import GasIcon from '../assets/gas-station-icon.svg'
import ProfileIcon from '../assets/profile-icon.svg'
import TransmitionIcon from '../assets/transmition-icon.svg'
import { IoHeart } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useStoreContext } from '../context/StoreContext';

const Card = ({ item }) => {
  const { likedCars, setLikedCars } = useStoreContext()
  const favorite = likedCars.includes(item.id)

  useEffect(() => {
    localStorage.setItem('likedCars', JSON.stringify(likedCars))
  }, [likedCars])

  const handleLike = () => {
    favorite
      ? setLikedCars((prev) => prev.filter((e) => e !== item.id))
      : setLikedCars((prev) => [...prev, item.id])
  }
  return (
    <div className='bg-white p-4 sm:p-5 md:p-6 rounded-xl w-full'>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h2 className='font-bold text-lg sm:text-xl'>{item.name}</h2>
          <p className='text-[#90A3BF] text-xs sm:text-sm font-bold'>{item.type}</p>
        </div>
        <div onClick={handleLike}>
          <IoHeart size={22} color={favorite ? 'red' : '#D1D5DB'} />
        </div>
      </div>

      <div className='flex justify-center items-center my-8 sm:my-10 md:my-12'>
        <img
          src={item.image}
          className='w-full max-w-55 sm:max-w-62.5 md:max-w-70 h-auto object-contain'
          alt=""
        />
      </div>

      <div className='flex flex-wrap gap-y-3 gap-x-4 text-sm font-medium justify-between mb-6'>
        <div className='flex gap-1 items-center'>
          <img src={GasIcon} alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
          <p className='text-[#90A3BF] text-xs sm:text-sm font-medium'>{item.fuel}</p>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={TransmitionIcon} alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
          <p className='text-[#90A3BF] text-xs sm:text-sm font-medium'>{item.transmission}</p>
        </div>

        <div className='flex gap-1 items-center'>
          <img src={ProfileIcon} alt="" className='w-4 h-4 sm:w-5 sm:h-5' />
          <p className='text-[#90A3BF] text-xs sm:text-sm font-medium'>{item.capacity}</p>
        </div>
      </div>

      <div className='flex justify-between items-center gap-3'>
        <div className='font-bold'>
          <div className='text-base sm:text-lg md:text-xl'>
            ${item.price}/ <span className='text-xs sm:text-sm text-[#90A3BF]'>day</span>
          </div>
          {item.oldPrice && (
            <div className='font-bold text-xs sm:text-sm line-through text-[#90A3BF]'>
              ${item.oldPrice}
            </div>
          )}
        </div>

        <Link to={`/category/${item.id}`} onClick={() => window.scrollTo({top: 0,behavior: "smooth"})} className='bg-[#3563E9] text-white font-semibold text-sm sm:text-base px-3 sm:px-4 py-2 rounded whitespace-nowrap'>
          Rent Now
        </Link>
      </div>
    </div>
  )
}

export default Card