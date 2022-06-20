import React, { useEffect } from 'react'
//CSS
import './Website.css'
//Components
import CreateWebsite from '../CreateWebsite/CreateWebsite'
import Standards from '../Standards/Standards'
import BuildingWebsite from '../BuildingWebsite/BuildingWebsite'
import NeedWebsite from '../NeedWebsite/NeedWebsite'
import ResponsiveWebsite from '../ResponsiveWebsite/ResponsiveWebsite'
import PriceWebsite from '../PriceWebsite/PriceWebsite'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Websites() {
  //Aos
  useEffect(() => {
  Aos.init({ duration: 2000 });
  }, []);
  //Aos disabled on mobile devices
  Aos.init({
  disable: function() {
  var maxWidth = 1400;
  return window.innerWidth < maxWidth;
  }
  });
  return (
    <div className="websites__container">
        <div className="websites__background">
            <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__home__1'>Tworzymy profesjonalne strony internetowe</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__home__1'>Rozwiń swój biznes w internecie</h2>
            <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__home__1'>Solidnie wykonana strona zwiększy zyski twojej firmy</h3>
        </div>
        <CreateWebsite />
        <Standards />
        <BuildingWebsite />
        <NeedWebsite />
        <ResponsiveWebsite />
        <PriceWebsite />
    </div>
  )
}

export default Websites