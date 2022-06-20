import React, { useEffect } from 'react'
//CSS
import './GraphicSkills.css'
//Images
import GraphicSkillsImage from '../../../Images/37.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function GraphicSkills() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".graphicskills__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".graphicskills__img__1")); });
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
    <div className="graphicskills__container">
        <div className="graphicskills__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="graphicskills__column__1">
                <img className='graphicskills__img__1' src={GraphicSkillsImage} alt=''></img>
            </div>
            <div className="graphicskills__column__2">
                <h1 data-aos='fade-left' data-aos-duration='1500' className="h1__graphicskills__1">Co powinien potrafić grafik?</h1>
                <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__graphicskills__1">Przede wszystkim musi być kreatywny, mieć zmysł artystyczny i wysoko rozwinięte wyczucie estetyki.</h2>
                <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__graphicskills__1">Grafik komputerowy powinien ponadto sprawnie posługiwać się komputerem, w tym umieć korzystać z programów takich jak Adobe Photoshop, Adobe inDesign, Corel Draw czy Adobe Illustrator, które są nieodłącznym elementem jego pracy. Tak naprawdę grafików komputerowych można podzielić na dwie grupy: warsztatowców oraz wirtuozów.</h2>
                <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__graphicskills__1">Grafik komputerowy powinien poza tym umieć pracować pod presją czasu, być komunikatywnym, a także być na bieżąco z nowymi trendami ze świata multimediów, marketingu, designu, reklamy czy ogólnie pojętego projektowania graficznego. Dodatkowym atutem jest zawsze znajomość CSS, HTML oraz innych języków programowania.</h2>
            </div>
        </div>
    </div>
  )
}

export default GraphicSkills