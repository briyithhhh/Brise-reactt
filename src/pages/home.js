import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import BannerImg from '../images/bannerr.jpg'
import Footer from '../components/Footer'
import Brise from '../images/brisee.png'
import Logo from '../images/logo.png'

const navData = [
  {
    route: '#',
    label: 'Home'
  },
  {
    route: '#',
    label: 'About'
  },
  {
    route: '#',
    label: 'Contact'
  },
  {
    route: '#',
    label: 'Blog'
  }
]

function Home () {
  return (
    <section className='home'>
      <Navbar
        image={Logo}
        navlinks={navData}
      />
      <Banner
        image={BannerImg}
        title='Brisé'
        description='〰️"A mal tiempo, un buen postre"〰️'
        button='leer mas'
      />
      <Footer
        image={Brise}
        year='2022'
      />
    </section>
  )
}
export default Home
