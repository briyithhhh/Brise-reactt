import React from "react";

function Footer = ({title, information, image, icons,})  {
  return(
      <div className='information-footer'>
        <h3>
            <span className='titles-footer'>{title}</span>
        </h3>
        <p className='information-footer'>{information}</p>
      </div>
    <div className='map-icon'>
      <img
          src={image}
          alt='Map'
          className='map-img'
        />
      
      
  )
}
