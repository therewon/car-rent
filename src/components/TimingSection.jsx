import React from 'react'
import SwapIcon from '../assets/Swap.svg'
import MarkIcon from '../assets/mark.svg'

const TimingSection = () => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
  <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
    
    <div className='bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-6 w-full sm:flex-1'>
      <div className='flex gap-2 mb-4'>
        <img src={MarkIcon} alt="" />
        <h2 className='font-semibold'>Pick - Up</h2>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='py-2 md:pr-4 w-full'>
          <h3 className='font-bold'>Locations</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your city</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>

        <div className='py-2 md:px-4 w-full md:border-r md:border-l md:border-gray-200'>
          <h3 className='font-bold'>Date</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your date</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>

        <div className='py-2 md:pl-4 w-full'>
          <h3 className='font-bold'>Time</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your time</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>
      </div>
    </div>

    <div className='shrink-0'>
      <button className='p-4 bg-[#3563E9] rounded-xl'>
        <img src={SwapIcon} alt="" />
      </button>
    </div>

    <div className='bg-white rounded-2xl px-4 sm:px-6 lg:px-8 py-6 w-full sm:flex-1'>
      <div className='flex gap-2 mb-4'>
        <img src={MarkIcon} alt="" />
        <h2 className='font-semibold'>Drop - Off</h2>
      </div>

      <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='py-2 md:pr-4 w-full'>
          <h3 className='font-bold'>Locations</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your city</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>

        <div className='py-2 md:px-4 w-full md:border-r md:border-l md:border-gray-200'>
          <h3 className='font-bold'>Date</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your date</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>

        <div className='py-2 md:pl-4 w-full'>
          <h3 className='font-bold'>Time</h3>
          <select
            defaultValue="select"
            className="h-12 w-full pr-10 text-xs rounded-md bg-white text-black outline-none"
          >
            <option value="select" disabled>Select your time</option>
            <option value="baku">Baku</option>
            <option value="ganja">London</option>
            <option value="sumqayit">Berlin</option>
          </select>
        </div>
      </div>
    </div>

  </div>
</div>
    )
}

export default TimingSection
