import React, { useEffect } from 'react'
//CSS
import './SkillsProgrammers.css'
//Images
import SkillsProgrammersImage from '../../../../Images/34.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function SkillsProgrammers() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".skillsprogrammers__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".skillsprogrammers__img__1")); });
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
    <div className="skillsprogrammers__container">
    <div className="skillsprogrammers__row">
        <div data-aos='fade-right' data-aos-duration='1500' className="skillsprogrammers__column__1">
            <img className='skillsprogrammers__img__1' src={SkillsProgrammersImage} alt=''></img>
        </div>
        <div className="skillsprogrammers__column__2">
            <h1 data-aos='fade-left' data-aos-duration='1500' className="h1__skillsprogrammers__1">Co powinien potrafić programista?</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__skillsprogrammers__1">W pracy programisty nie może zabraknąć umiejętności pracy zespołowej.</h2>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__skillsprogrammers__1">Samodzielne działania programisty często do niczego nie prowadzą. Tylko we współpracy z back-end developerem i webmasterem programiści front-end mogą tworzyć funkcjonalne i efektowne projekty.</h2>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__skillsprogrammers__1">Oczywiście, front-endowiec musi znać języki programowania, takie jak np. HTML, CSS czy JavaScript. Co więcej, front-end developer powinien znać najnowsze frameworki oraz technologie pomocne w pracy, takie jak React czy Redux.</h2>
        </div>
    </div>
</div>
  )
}

export default SkillsProgrammers