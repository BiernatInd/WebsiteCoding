import React, { useEffect } from 'react'
//CSS
import './AboutProgrammers.css'
//Images
import AboutProgrammersImage from '../../../Images/33.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function AboutProgrammers() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".aboutprogrammers__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".aboutprogrammers__img__1")); });
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
    <div className="aboutprogrammers__container">
        <div className="aboutprogrammers__row">
            <div className="aboutprogrammers__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__aboutprogrammers__1">Na jakie grupy dzielą się programiści?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__aboutprogrammers__1">Nasi pracownicy z działu programistycznego dzielą się na Front-End, Back-End i WordPress Developerów.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="aboutprogrammers__column__1">
                <img className='aboutprogrammers__img__1' src={AboutProgrammersImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default AboutProgrammers