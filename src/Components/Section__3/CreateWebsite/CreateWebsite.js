import React, { useEffect } from 'react'
//CSS
import './CreateWebsite.css'
//Images
import CreateWebsiteImage from '../../../Images/24.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css"

function CreateWebsite() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".createwebsite__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".createwebsite__img__1")); });
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
    <div className="createwebsite__container">
        <div className="createwebsite__row">
            <div className="createwebsite__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__createwebsite__1'>Dla kogo tworzymy strony internetowe?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className='h2__createwebsite__1'>Zbudujemy stronę dla każdego – małego i większego biznesu. Projekt strony firmowej jest także świetnym rozwiązaniem dla freelancerów i specjalistów, którzy chcą pokazać swoje portfolio. Z wielką chęcia przyjmujemy zlecenia od przedszkoli i szkół, ze względu na chęci nawiązania dalszej współpracy.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="createwebsite__column__2">
                <img className='createwebsite__img__1' src={CreateWebsiteImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default CreateWebsite