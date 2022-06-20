import React, { useEffect } from 'react'
//CSS
import './AboutOurCompany.css'
//Components
import History from '../History/History'
import Time from '../Time/Time'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function AboutOurCompany() {
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
    <div className="aboutourcompany__container">
        <div className="aboutourcompany__background">
            <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__home__1">Jesteśmy firmą działającą na Europejskim rynku programistycznym</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__home__1">Rozwiń swój biznes w internecie</h2>
            <h3 data-aos='fade-right' data-aos-duration='1500' className="h3__home__1">Zajmujemy się tworzeniem i sprzedażą stron, blogów i sklepów internetowych, oraz projektów graficznych</h3>
        </div>
        <History />
        <Time />
    </div>
  )
}

export default AboutOurCompany