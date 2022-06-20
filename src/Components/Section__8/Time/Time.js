import React, { useEffect } from 'react'
//CSS
import './Time.css'
//Images
import TimeImage from '../../../Images/40.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Time() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".time__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".time__img__1")); });
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
    <div className="time__container">
        <div className="time__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="time__column__1">
                <img className='time__img__1' src={TimeImage} alt=''></img>
            </div>
            <div className="time__column__2">
                <h1 data-aos='fade-left' data-aos-duration='1500' className="h1__time__1">Ile jesteśmy na rynku i jak działamy?</h1>
                <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__time__1">Jesteśmy na rynku programistycznym od niedawna, co nie zniechęca nas do działania, wiemy, że konkurencja jest ogromna, a my kochamy wyzwania! Jeśli zdecydowałeś się na nasze usługi i zadzwoniłeś na początku wysłuchujemy czego potrzebujesz, tłumaczymy wszystkie ważne zagadnienia i dobieramy zespół programistów i grafików do danego zlecenia. Na początku prosimy o wysłanie niedużej zaliczki, później nasi programiści od razu biorą się do pracy. Jesteśmy elastyczni i to my dostosowywujemy się do klienta, a nie klient do nas, nie martwią nas nagłe zmiany w projekcie, pracujemy na bieżąco.</h2>
            </div>
        </div>
    </div>
  )
}

export default Time