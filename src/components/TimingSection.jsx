import React from 'react'
import SwapIcon from '../assets/Swap.svg'
import MarkIcon from '../assets/mark.svg'

const TimingSection = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex justify-between items-center gap-4'>
                <div className='bg-white rounded-2xl px-8 py-6 max-w-146'>
                    <div className='flex gap-2 '>
                        <img src={MarkIcon} alt="" />
                        <h2 className='font-semibold'> Pick - Up</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='py-2 pr-4'>
                            <h3 className='font-bold '> Locations</h3>
                            <select className="h-12 pr-10 text-xs rounded-md bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your city</option>
                                <option value="baku">Baku</option>
                                <option value="ganja">London</option>
                                <option value="sumqayit">Berlin</option>
                            </select>
                        </div>
                        <div className='border-r border-l border-gray-200 px-4 py-2'>
                            <h3 className='font-bold'>Date</h3>
                            <select className="h-12 pr-10 text-xs rounded-md bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your date</option>
                                <option value="baku">Baku</option>
                                <option value="ganja">London</option>
                                <option value="sumqayit">Berlin</option>
                            </select>
                        </div>
                        <div className='py-2 px-4'>
                            <h3 className='font-bold'>Time</h3>
                            <select className="h-12 pr-10 text-xs rounded-md bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your time</option>
                                <option value="baku">Baku</option>
                                <option value="ganja">London</option>
                                <option value="sumqayit">Berlin</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <button className='p-4 bg-[#3563E9] rounded-xl'><img src={SwapIcon} alt="" /></button>
                </div>
                <div className='bg-white rounded-2xl px-8 py-6  max-w-146'>
                    <div className='flex gap-2 '>
                        <img src={MarkIcon} alt="" />
                        <h2 className='font-semibold'>Drop - Off</h2>
                    </div>
                    <div className='flex justify-between'>
                        <div className='py-2 pr-4'>
                            <h3 className='font-bold '> Locations</h3>
                            <select className="h-12 pr-10 rounded-md text-xs bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your city</option>
                                <option value="baku">Baku</option>
                                <option value="ganja">London</option>
                                <option value="sumqayit">Berlin</option>
                            </select>
                        </div>
                        <div className='border-r border-l border-gray-200 px-4 py-2'>
                            <h3 className='font-bold'>Date</h3>
                            <select className="h-12 pr-10 text-xs rounded-md bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your date</option>
                                <option value="baku">Baku</option>
                                <option value="ganja">London</option>
                                <option value="sumqayit">Berlin</option>
                            </select>
                        </div>
                        <div className='py-2 px-4'>
                            <h3 className='font-bold'>Time</h3>
                            <select className="h-12 pr-10 text-xs rounded-md bg-white text-black outline-none -translate-x-1">
                                <option value="" disabled selected>Select your time</option>
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
