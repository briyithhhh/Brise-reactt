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
              <img src={card.image} />
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
