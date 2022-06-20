import React, { useEffect } from 'react'
//CSS
import './WhoProgrammers.css'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function WhoProgrammers() {
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
    <div className="whoprogrammers__container">
        <div className="whoprogrammers__row">
            <div className="whoprogrammers__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__whoprogrammers__1'>Kim jest Front-End Developer?</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__whoprogrammers__1">Ich głównym zadaniem jest stworzenie programu, który atrakcyjnie wygląda i sprawnie działa. W dzisiejszych bardzo ważnym elementem tworzenia oprogramowania jest responsywność. Front-end developerzy muszą więc napisać kod, który zapewni sprawne działanie strony lub aplikacji na wszystkich urządzeniach mobilnych i we wszystkich przeglądarkach.</h2>
            </div>
            <div className="whoprogrammers__column__2">
                <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__whoprogrammers__1'>Kim jest Back-End Developer?</h1>
                <h2 data-aos='fade-up' data-aos-duration='1500' className="h2__whoprogrammers__1">Programista back-end to osoba, która odpowiada za tworzenie kodu strony lub aplikacji. Przeciętni użytkownicy nie widzą jednak efektów jego pracy. Program można porównać do organizmu człowieka – widzimy tylko to, co jest na zewnątrz, ale najważniejsze dla życia procesy dzieją się wewnątrz. Tak samo back-end developer odpowiada za wydajność i poprawne funkcjonowanie produktu końcowego.</h2>
            </div>
            <div className="whoprogrammers__column__3">
                <h1 data-aos='fade-left' data-aos-duration='1500' className='h1__whoprogrammers__1'>Kim jest WordPress Developer?</h1>
                <h2 data-aos='fade-left' data-aos-duration='1500' className="h2__whoprogrammers__1">WordPress to system CMS, który oczywiście obsługuje back-end ale dostarcza też prosty system szablonowania. Chcąc nie chcąc, WordPress Developer to tak naprawdę Full-Stack Developer wyspecjalizowany w tym konkretnym środowisku. W średnich i dużych projektach może nastąpić specjalizacja na Front-End WordPress Developera i Back-End WordPress Developera.</h2>
            </div>
        </div>
    </div>
  )
}

export default WhoProgrammers