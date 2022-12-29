import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'
import BannerImg from '../images/bannerr.jpg'
import Footer from '../components/Footer'
import Brise from '../images/brisee.png'
import Logo from '../images/logo.png'
import Cards from '../components/Cards'
import CardImg from '../images/postre.jpg'
import CardImg1 from '../images/postre1.jpg'
import CardImg2 from '../images/postre2.jpg'
import CardImg3 from '../images/postre3.jpg'

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

const cardsData = [
  {
    image: CardImg,
    title: 'Cakes de frutas',
    description: 'Brise te ofrece una gran variedad de postres, desde cakes de frutas, todo hecho con mucho amor.'
  }, {
    image: CardImg1,
    title: 'Pasteles esponjosos',
    description: 'Nuestros biscochos son esponjosos y deliciosos, con una gran variedad de sabores y rellenos.'
  }, {
    image: CardImg2,
    title: 'Mousse de frutas',
    description: 'En Brisé las frutas son nuestra pasión, por eso te ofrecemos mousse de frutas, con una gran variedad de sabores.'
  }, {
    image: CardImg3,
    title: 'Cupcakes',
    description: 'Los cupcakes que ofrecemos en Brisé son deliciosos, con una gran variedad de sabores y rellenos.'
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
        button='Leer más'
      />
      <Cards
        data={cardsData}
      />
      <Footer
        image={Brise}
        year='2022'
      />
    </section>
  )
}
export default Home
