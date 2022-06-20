import React, { useEffect } from 'react'
//CSS
import './ResponsiveWebsite.css'
//Images
import ResposiveImage from '../../../Images/15.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function ResponsiveWebsite() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".responsive__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".responsive__img__1")); });
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
    <div className="responsive__container">
    <div className="responsive__row">
        <div data-aos='fade-right' data-aos-duration='1500' className="responsive__column__2">
            <img className='responsive__img__1' src={ResposiveImage} alt=''></img>
        </div>
        <div className="responsive__column__1">
            <h1 data-aos='fade-left' data-aos-duration='1500' className='h1__responsive__1'>Nasza strona na urządzeniach mobilnych</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__responsive__1'>Obecnie bardzo duża część ruchu w internecie generowana jest przez smartfony, a większość z nas korzysta z Facebooka, Instagrama czy innych portali społecznościowych. Dlatego wychodząc na przeciw tym trendom, staramy się aby nasze strony internetowe działały perfekcyjnie na każdym urządzeniu, zaczynając od smartfonów, kończąc na komputerach PC. Wprowadzamy także integracje z najpopularniejszymi portalami społecznościowymi jak Facebook, Instagram i tym podobne.</h2>
        </div>
    </div>
</div>
  )
}

export default ResponsiveWebsite