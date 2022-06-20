import React, { useEffect } from 'react'
//CSS
import './Projects.css'
//Images
import ProjectsImage from '../../../Images/36.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Projects() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".projects__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".projects__img__1")); });
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
    <div className="projects__container">
        <div className="projects__row">
            <div className="projects__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__projects__1">Jakie projekty tworzymy?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__projects__1">Podejmujemy się wszystkich wyzwań, projektujemy wszelkiego rodzaju loga, banery reklamowe, banery internetowe, grafiki na billboardy, projekty graficzne stron internetowych, okładki na książki, projekty wizytówek oraz wiele więcej.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="projects__column__2">
                <img className='projects__img__1' src={ProjectsImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Projects