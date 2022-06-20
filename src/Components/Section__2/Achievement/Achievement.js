import React, { useEffect } from 'react'
//CSS
import './Achievement.css'
//Images
import AchievementImage from '../../../Images/21.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function Achievement() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".achievement__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".achievement__img__1")); });
  //Aos
  useEffect(() => {
  Aos.init({ duration: 1500 });
  }, []);
  //Aos disabled on mobile devices
  Aos.init({
  disable: function() {
  var maxWidth = 1400;
  return window.innerWidth < maxWidth;
  }
  });
  return (
    <div className="achievement__container">
        <div className="achievement__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="achievement__column__1">
                <img className='achievement__img__1' src={AchievementImage} alt=''></img>
            </div>
            <div className="achievement__column__2">
                <h1 data-aos='fade-left' data-aos-duration='1500' className='h1__achievement__1'>Co możemy osiągnąć przez posiadanie bloga?</h1>
                <ol className='ol__achievement__1'>
                    <li data-aos='fade-left' data-aos-duration='1500' className='li__achievement__1'>Blog tworzy większy ruch na stronie www, dzięki czemu strona będzie lepiej wyświetlana w wyszukiwarce i będzie przyciągać więcej potencjalnych klientów.</li>
                    <li data-aos='fade-left' data-aos-duration='1500' className='li__achievement__1'>Dzielenie się wiedzą z różnymi ludźmi pomaga budować marke przez porady dostarczane do czytelników.</li>
                    <li data-aos='fade-left' data-aos-duration='1500' className='li__achievement__1'>Możemy zobaczyć jakie są wady i zalety naszego biznesu przez opinie naszych klientów.</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default Achievement