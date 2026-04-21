import React from 'react'
import Cars from '../data'

const Category = () => {
  return (
    <div className='grid grid-cols-4 bg-[#F6F7F9]'>
      <div className='col-span-1 bg-white h-screen p-8'>
        <div className="text-white">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
            Type
          </p>

          <div className="space-y-4 text-xl">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-blue-500 accent-blue-500" defaultChecked />
              <span className=" font-medium text-[#596780]">Sport (10)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-blue-500 accent-blue-500" defaultChecked />
              <span className="font-medium text-[#596780]">SUV (12)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-gray-400 accent-blue-500" />
              <span className=" font-medium text-[#596780]">MPV (16)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-gray-400 accent-blue-500" />
              <span className=" font-medium text-[#596780]">Sedan (20)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-gray-400 accent-blue-500" />
              <span className=" font-medium text-[#596780]">Coupe (14)</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="h-5 w-5 rounded border border-gray-400 accent-blue-500" />
              <span className=" font-medium text-[#596780]">Hatchback (14)</span>
            </label>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Category
