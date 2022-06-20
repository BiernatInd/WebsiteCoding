import React, { useEffect } from 'react'
//CSS
import './AboutBlog.css'
//Images
import BlogsImage from '../../../Images/20.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function AboutBlog() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".about__blog__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".about__blog__img__1")); });
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
    <div className='about__blog__container'>
      <div className="about__blog__row">
        <div className="about__blog__column__1">
          <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__about__blog__1'>Dla kogo projektujemy blogi?</h1>
          <h2 data-aos='fade-right' data-aos-duration='1500' className='h2__about__blog__1'>Zbudujemy blog dla każdego – małego i większego biznesu. Tworzymy również dla szkół, przedszkoli, klinik lekarskich prawników, osób prywatnych i wiele więcej. </h2>
        </div>
        <div className="about__blog__column__2">
          <img data-aos='fade-left' data-aos-duration='1500' className='about__blog__img__1' src={BlogsImage} alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default AboutBlog