/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/Cards.css'

function Cards ({ data }) {
  return (
    <div className='card-container'>
      {
        data.map((card, index) => {
          return (
            <div key={index} className='cards' style={{ zIndex: '999999' }}>
              <div className='card-img'>
                <img src={card.image} alt='Card' />
              </div>
              <h1>{card.title}</h1>
              <p>{card.description}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards
