import React, { useEffect } from 'react'
//CSS
import './ShopClient.css'
//Images
import ClientImage from '../../../Images/8.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function ShopClient() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".client__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".client__img__1")); });
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
    <div className="shopclient__container">
    <div className="client__row">
      <div data-aos='fade-right' data-aos-duration='1500' className="client__column__1">
          <img className='client__img__1' src={ClientImage} alt='' />
      </div>
      <div className="client__column__2">
          <h1 data-aos='fade-left' data-aos-duration='1500' className='h1__client__1'>Elastyczność wobec klienta</h1>
          <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__client__1'>Jesteśmy bardzo cierpliwi oraz wyrozumiali dla naszych klientów. Na wypadek zmian w projekcie jesteśmy zawsze pod kontaktem telefonicznym.</h2>
      </div>
    </div>
  </div>
  )
}

export default ShopClient