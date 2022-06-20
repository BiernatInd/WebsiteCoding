import React, { useEffect } from 'react'
//CSS
import './Building.css'
//Images
import BuildingImage1 from '../../../Images/9.png'
import BuildingImage2 from '../../../Images/10.png'
import BuildingImage3 from '../../../Images/11.png'
import BuildingImage4 from '../../../Images/12.png'
import BuildingImage5 from '../../../Images/13.png'
import BuildingImage6 from '../../../Images/14.png'
//Packages 
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Building() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".building__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".building__img__1")); });
  //Aos
  useEffect(() => {
  Aos.init({ duration: 2000 });
  }, []);
  //Aos disabled on mobile devices
  Aos.init({
  disable: function() {
  var maxWidth = 800;
  return window.innerWidth < maxWidth;
  }
  });
  return (
    <div className="building__container">
        <h1 data-aos='fade-down' className='h1__building__1'>Jak tworzymy stronę?</h1>
        <div className="building__row">
            <div data-aos='fade-right' className="building__column__1">
                <img className='building__img__1' src={BuildingImage1} alt=''></img>
                <h1 className='h1__building__2'>Planowanie</h1>
                <h2 className='h2__building__1'>Na początku kontaktujemy się z Tobą i zadajemy parę pytań, aby poznać plan projektu.</h2>
            </div>
            <div data-aos='fade-down' className="building__column__2">
            <img className='building__img__1' src={BuildingImage2} alt=''></img>
                <h1 className='h1__building__2'>Projektowanie</h1>
                <h2 className='h2__building__1'>Po zebraniu informacji tworzymy projekt graficzny strony Twojej strony internetowej.</h2>
            </div>
            <div data-aos='fade-left' className="building__column__3">
            <img className='building__img__1' src={BuildingImage3} alt=''></img>
            <h1 className='h1__building__2'>Programowanie</h1>
                <h2 className='h2__building__1'>Kiedy nasi graficy stworzą projekt graficzny, nasz zespół programistów przystępuje do realizacji zlecenia.</h2>
            </div>
        </div>
        <div className="building__row__2">
            <div data-aos='fade-right' className="building__column__1">
                <img className='building__img__1' src={BuildingImage4} alt=''></img>
                <h1 className='h1__building__2'>Testowanie</h1>
                <h2 className='h2__building__1'>To etap w którym upewniamy się sprawdzając całą stronę czy spełnia wymagania klienta oraz jej funkcjonalność.</h2>
            </div>
            <div data-aos='fade-up' className="building__column__2">
            <img className='building__img__1' src={BuildingImage5} alt=''></img>
                <h1 className='h1__building__2'>Ostateczna konsultacja z klientem</h1>
                <h2 className='h2__building__1'>Strona jest już gotowa do przesłania klientowi, oczekujemy na akceptację.</h2>
            </div>
            <div data-aos='fade-left' className="building__column__3">
            <img className='building__img__1' src={BuildingImage6} alt=''></img>
                <h1 className='h1__building__2'>Wdrażanie</h1>
                <h2 className='h2__building__1'>Czas na radość z własnej profesjonalnej strony internetowej! Publikujemy Twoją witrynę w Internecie.</h2>
            </div>
        </div>
    </div>
  )
}

export default Building