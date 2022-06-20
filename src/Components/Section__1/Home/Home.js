import React, { useEffect } from 'react'
//CSS 
import './Home.css'
//Components
import Slider from '../Slider/Slider'
import Services from '../Services/Services'
import Client from '../Client/Client'
import Building from '../Building/Building'
import Responsive from '../Responsive/Responsive'
import Seo from '../Seo/Seo'
import Price from '../Price/Price'
import Contact from '../Contact/Contact'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Home() {
    //Aos
    useEffect(() => {
    Aos.init({ duration: 1500 });
    }, []);
    //Aos disabled on mobile devices
    Aos.init({
    disable: function() {
    var maxWidth = 1400;
    return window.innerWidth < maxWidth;
    }
    });
  return (
    <div className="home__container">
      <div className="home__background">
        <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__home__1'>Tworzymy profesjonalne strony internetowe</h1>
        <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__home__1'>Rozwiń swój biznes w internecie</h2>
        <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__home__1'>Solidnie wykonana strona www zwiększy zyski twojej firmy</h3>
        <div data-aos='fade-up' data-aos-duration='1500' className='button__container'>
        <a href='#' className="button-1">Skontaktuj się z nami!</a>
        </div>
      </div>
      <Slider />
      <Services />
      <Client />
      <Building />
      <Responsive />
      <Seo />
      <Price />
      <Contact />
    </div>
  )
}

export default Home