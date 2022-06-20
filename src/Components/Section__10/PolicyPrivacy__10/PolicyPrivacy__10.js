import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__10.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__10() {
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
    <div className="policyprivacy__10__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__2">Zarządzanie plikami cookies - jak w praktyce wyrażać i cofać zgodę?</h1>
        <ol className="ol__policyprivacy">
            <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Jeśli użytkownik nie chce otrzymywać plików cookies, może zmienić ustawienia przeglądarki. Zastrzegamy, że wyłączenie obsługi plików cookies niezbędnych dla procesów uwierzytelniania, bezpieczeństwa, utrzymania preferencji użytkownika może utrudnić, a w skrajnych przypadkach może uniemożliwić korzystanie ze stron www.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">W celu zarządzania ustawienia cookies wybierz z listy poniżej przeglądarkę internetową, której używasz i postępuj zgodnie z instrukcjami:</li>
            <ul className="ul__policyprivacy">
                <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Edge</li>
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Internet Explorer</li>
                <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Chrome</li>
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Safari</li>
                <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Firefox</li>
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Opera</li>
            </ul>
            <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__policyprivacy__3'>Urządzenia mobilne:</h1>
            <ul className="ul__policyprivacy">
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Android</li>
                <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Safari (iOS)</li>
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Windows Phone</li>
            </ul>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__10