import React, { useEffect } from 'react'
//CSS
import './Services.css'
//Images
import ServicesImg from '../../../Images/7.png'
//Packages 
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Services() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".services__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".services__img__1")); });
  //Aos
  useEffect(() => {
  Aos.init({ duration: 1500 });
  }, []);
  //Aos disabled on mobile devices
  Aos.init({
  disable: function() {
  var maxWidth = 800;
  return window.innerWidth < maxWidth;
  }
  });
  return (
    <div className="services__container">
        <div className="services__row">
            <div className="services__column__1">
                <h1 data-aos='fade-right' className='h1__services__1'>Dla kogo są nasze usługi?</h1>
                <h2 data-aos='fade-right' className='h2__services__1'>Zbudujemy stronę dla każdego – małego i większego biznesu. Projekt strony firmowej jest także świetnym rozwiązaniem dla freelancerów i specjalistów, którzy chcą pokazać swoje portfolio.</h2>
                <div className="button__services__container">
                    <a data-aos='fade-right' href='#' className="button-2">Zobacz nasze usługi!</a>
                </div>
            </div>
            <div data-aos='fade-left' className="services__column__2">
                <img className='services__img__1' src={ServicesImg} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Services