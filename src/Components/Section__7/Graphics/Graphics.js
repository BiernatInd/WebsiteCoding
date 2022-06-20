import React, { useEffect } from 'react'
//CSS
import './Graphics.css'
//Components
import Projects from '../Projects/Projects'
import GraphicSkills from '../GraphicSkills/GraphicSkills'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Graphics() {
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
    <div className="graphics__container">
      <div className="graphics__background">
        <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__home__1">Tworzymy profesjonalne projekty graficzne</h1>
        <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__home__1">Postaw na solidnie wykonany projekt</h2>
        <h3 data-aos='fade-right' data-aos-duration='1500' className="h3__home__1">Nie pozwól amatorom zniszczyć twojego biznesu</h3>
      </div>
      <Projects />
      <GraphicSkills />
    </div>
  )
}

export default Graphics