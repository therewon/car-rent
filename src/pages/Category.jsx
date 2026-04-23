import React, { useState } from 'react'
import Cars from '../data'
import TimingSection from '../components/TimingSection'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { useStoreContext } from '../context/StoreContext.jsx'

const Category = () => {
  const types = [...new Set(Cars.map((item) => item.type))]
  const capacities = [...new Set(Cars.map((item) => item.capacity))]
  const [price , setPrice] = useState(100)
  const [capacity, setCapacity] = useState(capacities)
  const [type, setType] = useState(types)

  const { isFilterOpen, setIsFilterOpen,search } = useStoreContext()



  return (
    <div className='bg-[#F6F7F9] min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        
        {/* overlay mobile */}
        {isFilterOpen && (
          <div
            className='fixed inset-0 bg-black/40 z-40 lg:hidden'
            onClick={() => setIsFilterOpen(false)}
          ></div>
        )}

        {/* sidebar / filters */}
        <div
          className={`
            fixed top-0 left-0 h-full w-70 bg-white p-6 flex flex-col gap-12 z-50
            transition-transform duration-300
            ${isFilterOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:static lg:translate-x-0 lg:h-auto lg:w-auto lg:col-span-1 lg:p-8
          `}
        >
          {/* mobile close */}
          <div className='flex justify-between items-center lg:hidden'>
            <h2 className='text-lg font-semibold'>Filters</h2>
            <button onClick={() => setIsFilterOpen(false)}>
              <IoClose size={24} />
            </button>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#90A3BF]">
              Type
            </p>

            <div className="flex flex-col gap-5">
              {types.map((item, index) => {
                const count = Cars.filter((car) => car.type === item).length

                return (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="h-5 w-5 rounded border border-blue-500 accent-blue-500"
                      onChange={()=> setType((prev) => prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item])}
                    />
                    <span className="font-medium text-black text-sm sm:text-base">
                      {item} <span className='text-[#90A3BF]'>({count})</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#90A3BF]">
              Capacity
            </p>

            <div className="flex flex-col gap-5">
              {capacities.map((item, index) => {
                const count = Cars.filter((car) => car.capacity === item).length

                return (
                  <label key={index} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={()=> setCapacity((prev) => prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item])}    // burda umumi capacity-den deyeri cixmaq lazimdi cunki hamsi defaultCheckeddi
                      className="h-5 w-5 rounded border border-blue-500 accent-blue-500"
                    />
                    <span className="font-medium text-black text-sm sm:text-base">
                      {item} Person <span className='text-[#90A3BF]'>({count})</span>
                    </span>
                  </label>
                )
              })}
            </div>
          </div>

          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#90A3BF]">
              Price
            </p>

            <input type="range" className='price-range-input w-full' min="0" max="100" value={price} onChange={(e)=> setPrice(e.target.value)} />
            <p className='mt-4 text-sm font-semibold text-[#596780]'>Max. ${price}</p>
          </div>
        </div>

        {/* content */}
        <div className='lg:col-span-3 py-4 sm:py-6 lg:py-8'>
          <div className='px-4 sm:px-6 lg:px-4'>
            <TimingSection />
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 lg:gap-8'>
          {Cars
            .filter((item)=> capacity.includes(item.capacity))
            .filter((item)=> item.price < price)
            .filter((item)=> type.includes(item.type))
            .filter((item)=> item.name.toLowerCase().includes(search.toLowerCase()))
            .map((item) => {
                return <Card key={item.id} item={item} />
            })}
          </div>

          <div className='my-10 sm:my-12 lg:my-16 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='hidden sm:block'></div>

            <Link
              to='/category'
              className='bg-[#3563E9] rounded text-white px-5 py-2.5 w-full sm:w-auto text-center'
            >
              Show more car
            </Link>

            <p className='text-[#90A3BF]'>{Cars.length} Car</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category