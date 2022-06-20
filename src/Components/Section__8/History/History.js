import React, { useEffect } from 'react'
//CSS
import './History.css'
//Images
import HistoryImage from '../../../Images/39.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function History() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".history__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".history__img__1")); });
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
    <div className="history__container">
        <div className="history__row">
            <div className="history__column__1">
                <h1 data-aos='fade-right' data-aos-duration='1500' className="h1__history__1">Nasza historia</h1>
                <h2 data-aos='fade-right' data-aos-duration='1500' className="h2__history__1">Jesteśmy grupą znajomych, którzy zaczynali od zera, a teraz jesteśmy tutaj. Razem tworzymy coś naprawdę wielkiego. Nasza historia zaczyna się skromnie. Chcieliśmy coś osiagąć, uważaliśmy, że technikum nie zapewni nam takiej przyszłości jaką byśmy chcieli. Zaczeliśmy kombinować z różnymi technologiami, szukaliśmy tego co nas interesuje, aż w końcu doszeliśmy tutaj. Zagłębiliśmy się w strony internetowe, które robimy z największą dokładnością. Nasza praca nie jest po to, aby ją tylko zrobić, jest ona natomiast po to, aby spełnić wasze oczekiwania! Służymy pomocą i jesteśmy dostępni cały czas, dostosowywujemy się do klientów, dbamy o nich i o ich potrzeby!</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="history__column__2">
                <img className='history__img__1' src={HistoryImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default History