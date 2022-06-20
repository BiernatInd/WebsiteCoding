import React, { useEffect } from 'react'
//CSS
import './Teamwork.css'
//Images
import TeamworkImage from '../../../Images/42.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Teamwork() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".teamwork__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".teamwork__img__1")); });
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
    <div className="teamwork__container">
        <div className="teamwork__row">
            <div className="teamwork__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__teamwork__1">Jesteśmy na rynku programistycznym od niedawna, wiemy, że konkurencja jest ogromna, ale to nas nie zniechęca</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__teamwork__1">Kochamy wyzwania!</h2>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__teamwork__1">Jesteśmy otwarci na wszystkie propozycje współpracy.</h2>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__teamwork__1">Prosimy o kontakt mailowy.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="teamwork__column__2">
                <img className='teamwork__img__1' src={TeamworkImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Teamwork