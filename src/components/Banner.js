/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/banner.css'

function Banner ({ title, image, description, button }) {
  return (
    <div className='banner'>
      <img
        src={image}
        alt='Banner'
        className='banner-img'
      />
      <div className='container' alt='fix'>
        <h1>
          <div className='banner-title'>
            {title}
          </div>
        </h1>

        <p className='banner-subtitle'>
          {description}
        </p>

        <a href='#' className='banner-btn'>
          {button}
        </a>
      </div>
    </div>
  )
}

export default Banner
