import React, { useEffect } from 'react'
//CSS
import './Standards.css'
//Images
import StandardsImage from '../../../Images/25.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Standards() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".standards__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".standards__img__1")); });
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
    <div className="standards__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__standards__1'>Gwarantujemy najwyższe standardy</h1>
        <div className="standards__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="standards__column__1">
                <img className='standards__img__1' src={StandardsImage} alt=''></img>
            </div>
            <div className="standards__column__2">
                <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__standards__1'>Jakość</h2>
                <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__standards__1'>Nasza firma zawsze stawia na najlepszą jakość wykonywanej usługi, niezależnie od ceny.</h3>
                <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__standards__1'>Legalne oprogramowanie</h2>
                <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__standards__1'>Przy tworzeniu strony internetowej wykorzystujemy oryginalne szablony i dodatki.</h3>
                <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__standards__1'>System React</h2>
                <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__standards__1'>Tworzymy strony i sklepy w React, jeśli zależy Ci na profesjonalnej stronie, która jest kodowana.</h3>
            </div>
        </div>
    </div>
  )
}

export default Standards