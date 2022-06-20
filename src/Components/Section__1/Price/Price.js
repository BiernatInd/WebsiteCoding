import React, { useEffect } from 'react'
//CSS
import './Price.css'
//Images
import PriceImage from '../../../Images/17.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 


function Price() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".price__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".price__img__1")); });
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
    <div className="price__container">
        <div className="price__row">
            <div className="price__column__1">
                <h1 data-aos='fade-right' className='h1__price__1'>Cena za nasze usługi</h1>
                <h2 data-aos='fade-right' className='h2__price__1'>Cennik naszych usług nie jest ścieśle określony, natomiast jeśli by był, było by to skrajnie nieprofesjonalne, ponieważ nie możemy pozwolić sobie na stworzenie strony w cenie sklepu internetowego. Cena strony zależy od wielu czynników min. od typu strony (blog, strona wizytówkowa firmy, portfolio, sklep), ilości treści zawartych na stronie, jakim sposobem jest tworzona strona (WordPress - System CMS polegający na przeciąganiu elementów / React - System JSX, strona jest pisana kodem przez zespół programistów). Jeśli jesteś zainteresowany/a naszymi usługami proszę o skontaktowanie się z nami poprzez Chat albo formularz kontaktowy.</h2>
            </div>
            <div data-aos='fade-left' className="price__column__2">
                <img className='price__img__1' src={PriceImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default Price