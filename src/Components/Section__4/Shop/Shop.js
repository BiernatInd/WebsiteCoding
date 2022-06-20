import React, { useEffect } from 'react'
//CSS
import './Shop.css'
//Components
import AboutShop from '../AboutShop/AboutShop'
import ShopClient from '../../Section__4/ShopClient/ShopClient'
import NeedShop from '../NeedShop/NeedShop'
import ShopResponsive from '../ShopResponsive/ShopResponsive'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Shop() {
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
    <div className="shop__container">
        <div className="shop__background">
            <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__home__1'>Tworzymy profesjonalne sklepy internetowe</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__home__1'>Rozwiń swój biznes w internecie</h2>
            <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__home__1'>Solidnie wykonany sklep internetowy, podniesie zyski twojej firmy.</h3>
        </div>
        <AboutShop />
        <ShopClient />
        <NeedShop />
        <ShopResponsive />
    </div>
  )
}

export default Shop