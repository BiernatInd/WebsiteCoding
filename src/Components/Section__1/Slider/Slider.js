import React, { useEffect } from 'react'
//CSS
import './Slider.css'
//Images
import SliderIcon1 from '../../../Images/4.png'
import SliderIcon2 from '../../../Images/3.png'
import SliderIcon3 from '../../../Images/5.png'
import SliderIcon4 from '../../../Images/6.png'
//Packages 
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Slider() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".slider__img")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".slider__img")); });
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
    <div className="slider__container">
      <div className="slider__heading">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__slider__1'>Jakie projekty tworzymy?</h1>
      </div>
      <div className="slider__row">
        <div data-aos='fade-right' data-aos-duration='1500' className="slider__column__1">
          <img className='slider__img' src={SliderIcon1} alt=''></img>
          <h2 className='h2__slider__1'>Strony Internetowe</h2>
          <a className='myButton' href='#'><span>Więcej</span></a>
        </div>
        <div data-aos='fade-right' data-aos-duration='1500' className="slider__column__2">
          <img className='slider__img' src={SliderIcon2} alt=''></img>
          <h2 className='h2__slider__1'>Sklepy Internetowe</h2>
          <a className='myButton' href='#'><span>Więcej</span></a>
        </div>
        <div data-aos='fade-left' data-aos-duration='1500' className="slider__column__3">
          <img className='slider__img' src={SliderIcon3} alt=''></img>
          <h2 className='h2__slider__1'>Blogi Internetowe</h2>
          <a className='myButton' href='#'><span>Więcej</span></a>
        </div>
        <div data-aos='fade-left' data-aos-duration='1500' className="slider__column__4">
          <img className='slider__img' src={SliderIcon4} alt=''></img>
          <h2 className='h2__slider__1'>Pozycjonowanie SEO</h2>
          <a className='myButton' href='#'><span>Więcej</span></a>
        </div>
      </div>
    </div>
  )
}

export default Slider