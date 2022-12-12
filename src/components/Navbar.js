/* eslint-disable react/prop-types */
import React from 'react'
import '../assets/styles/Navbar.css'

function Navbar ({ brand, navlinks }) {
  return (
    <nav className='navbar'>
      <h1 className='Brand'>{brand}</h1>
      <ul className='elements'>
        {
          navlinks.map((element, index) => {
            return (
              <li key={index} className='element'>
                <a href={element.route}>
                  {element.label}
                </a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}

export default Navbar
