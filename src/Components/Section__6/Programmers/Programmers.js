import React, { useEffect } from 'react'
//CSS
import './Programmers.css'
//Components
import AboutProgrammers from '../AboutProgrammers/AboutProgrammers'
import WhoProgrammers from '../WhoProgrammers/WhoProgrammers'
import SliderProgrammers from '../../Section__1/Slider/Slider'
import SkillsProgrammers from '../SkillsProgrammers/SkillsProgrammers/SkillsProgrammers'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Programmers() {
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
    <div className="programmers__container">
        <div className="programmers__background">
            <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__home__1">Tworzymy profesjonalny zespół programistów</h1>
            <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__home__1">Rozwiń swój biznes w internecie dzięki nam</h2>
            <h3 data-aos='fade-right' data-aos-duration='1500' className="h3__home__1">Stawiamy tylko na solidnie wykonane projekty</h3>
        </div>
        <AboutProgrammers />
        <WhoProgrammers />
        <SliderProgrammers />
        <SkillsProgrammers />
    </div>
  )
}

export default Programmers