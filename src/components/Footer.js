import React from 'react'
import '../assets/styles/Footer.css'
import { BsWhatsapp, BsInstagram, BsFacebook } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

// eslint-disable-next-line react/prop-types
function Footer ({ year, image }) {
  return (
    <>
      <footer>
        <img
          src={image}
          alt='Brise'
          className='footer-img'
        />
        <div className='container-icons'>
          <a href='#'><BsWhatsapp className='icons' /></a>
          <a href='#'><BsInstagram className='icons' /></a>
          <a href='#'><BsFacebook className='icons' /></a>
          <a href='#'><FiMail className='icons' /></a>
        </div>
        <ul className='container-menu'>
          <li className='item'>Privacidad</li>
          <li className='item'>Políticas</li>
          <li className='item'>Envíos</li>
          <li className='item'>Nosotros</li>
          <li className='item'>Atención al cliente</li>
        </ul>
        <span className='copyright'>{year}, Brisé Coffee & Bakery. Todos los derechos reservados</span>
      </footer>
    </>
  )
}

export default Footer
