import React, { useEffect } from 'react'
//CSS
import './AboutPositioning.css'
//Images
import AboutPositioningImage from '../../../Images/31.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function AboutPositioning() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".aboutpositioning__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".aboutpositioning__img__1")); });
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
    <div className="aboutpositioning__container">
        <div className="aboutpositioning__row">
            <div className="aboutpositioning__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__aboutpositioning__1'>Jak pozycjonujemy strony www?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className='h2__aboutpositioning__1'>Stosowane przez nas metody opieramy o najnowsze i bezpieczne techniki, które minimalizują ryzyko spadku pozycji. Dzięki pozycjonowaniu strony zwiększysz swoją widoczność w wynikach wyszukiwania, ilość potencjalnych klientów oraz świadomość marki. Działania w zakresie pozycjonowania to m.in.: analiza serwisu, konkurencji i słów kluczowych, optymalizacja strony, opracowanie strategi link building, content marketing i budowa profilu odnośników.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="aboutpositioning__column__2">
                <img className='aboutpositioning__img__1' src={AboutPositioningImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default AboutPositioning