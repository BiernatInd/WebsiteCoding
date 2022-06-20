import React, { useEffect } from 'react'
//CSS
import './AboutShop.css'
//Images
import AboutShopImage from '../../../Images/28.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function AboutShop() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".aboutshop__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".aboutshop__img__1")); });
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
    <div className="aboutshop__container">
        <div className="aboutshop__row">
            <div className="aboutshop__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__aboutshop__1'>Tworzenie sklepów internetowych</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className='h2__aboutshop__1'>Tworzenie sklepów internetowych to specjalność naszej Agencji. Sklep Internetowy to idealny kanał dystrybucji produktów, a także świetne uzupełnienie sklepu tradycyjnego.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="aboutshop__column__2">
                <img className='aboutshop__img__1' src={AboutShopImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default AboutShop