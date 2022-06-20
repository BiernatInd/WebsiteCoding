import React, { useEffect } from 'react'
//CSS
import './Collaboration.css'
//Components
import Teamwork from '../Teamwork/Teamwork'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css"

function Collaboration() {
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
    <div className="collaboration__container">
        <div className="collaboration__background">
            <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__home__1">Jesteśmy firmą działającą na Europejskim rynku programistycznym</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__home__1">Rozwiń swój biznes współpracując z nami</h2>
            <h3 data-aos='fade-right' data-aos-duration='1500' className="h3__home__1">Stawiamy na najlepszą jakość usług</h3>
        </div>
        <Teamwork />
    </div>
  )
}

export default Collaboration