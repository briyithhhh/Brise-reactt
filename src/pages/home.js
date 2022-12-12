import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import BannerImg from '../images/bannerr.jpg'

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
        brand='Icon'
        navlinks={navData}
      />
      <Banner
        image={BannerImg}
        title='Brisé'
        description='〰️"A mal tiempo, un buen postre"〰️'
        button='leer mas'
      />
    </section>
  )
}
export default Home
