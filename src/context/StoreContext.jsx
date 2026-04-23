import React, { createContext, useContext, useState } from 'react'

const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
 const [likedCars, setLikedCars] = useState(() => {
  try {
    const saved = localStorage.getItem('likedCars')
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
})
  const [search, setSearch] = useState('')

  return (
    <StoreContext.Provider value={{ isFilterOpen, setIsFilterOpen,search, setSearch, likedCars, setLikedCars}}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStoreContext = () => useContext(StoreContext)