import React, { useEffect } from 'react'
//CSS
import './NeedShop.css'
//Images
import NeedShopImage from '../../../Images/29.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function NeedShop() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".needshop__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".needshop__img__1")); });
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
    <div className="needshop__container">
        <div className="needshop__row">
            <div className="needshop__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__needshop__1'>Co możemy osiągnąć przez posiadanie sklepu internetowego?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className='h2__needshop__1'>Sklep internetowy jest podstawą w dzisiejszym biznesie. Jest bardzo wygodny w użytku oraz przyjemny dla oka przez co ludzie chętniej robią w nim zakupy. Jeśli twój sklep jest dobrze wypozycjonowany sam będzie przyciągać potencjalnych klientów.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="needshop__column__2">
                <img className='needshop__img__1' src={NeedShopImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default NeedShop