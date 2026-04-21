import React from 'react'
import GasIcon from '../assets/gas-station-icon.svg'
import ProfileIcon from '../assets/profile-icon.svg'
import TransmitionIcon from '../assets/transmition-icon.svg'
import { IoHeart } from "react-icons/io5";

const Card = ({ item }) => {
  return (
    <div className='bg-white p-4 sm:p-5 md:p-6 rounded-xl w-full'>
      <div className='flex items-start justify-between gap-3'>
        <div>
          <h2 className='font-bold text-lg sm:text-xl'>{item.name}</h2>
          <p className='text-[#90A3BF] text-xs sm:text-sm font-bold'>{item.type}</p>
        </div>
        <IoHeart size={22} color={item.favorite ? 'red' : '#D1D5DB'} />
      </div>

      <div className='flex justify-center items-center my-8 sm:my-10 md:my-12'>
        <img
          src={item.image}
          className='w-full max-w-[220px] sm:max-w-[250px] md:max-w-[280px] h-auto object-contain'
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

        <button className='bg-[#3563E9] text-white font-semibold text-sm sm:text-base px-3 sm:px-4 py-2 rounded whitespace-nowrap'>
          Rent Now
        </button>
      </div>
    </div>
  )
}

export default Card