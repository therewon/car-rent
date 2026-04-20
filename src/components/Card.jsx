import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        <div>
            <h2>{item.name}</h2>
            <IoHeart />
        </div>
        <p>{item.type}</p>
        
    </div>
  )
}

export default Card
