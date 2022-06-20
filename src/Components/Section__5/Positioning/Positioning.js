import React, { useEffect } from 'react'
//CSS
import './Positioning.css'
//Components
import AboutPositioning from '../AboutPositioning/AboutPositioning'
import ServicesPositioning from '../ServicesPositioning/ServicesPositioning'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Positioning() {
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
    <div className="positioning__container">
        <div className="positioning__background">
            <h1 data-aos='fade-right' className="h1__home__1">Pozycjonujemy strony i sklepy internetowe</h1>
            <h2 data-aos='fade-left' className="h2__home__1">Rozwiń swój biznes w internecie</h2>
            <h3 data-aos='fade-right' className="h3__home__1">Wypozycjonujemy twoja strone w TOP 10 wynikach wyszukiwarki</h3>
        </div>
        <AboutPositioning />
        <ServicesPositioning />
    </div>
  )
}

export default Positioning