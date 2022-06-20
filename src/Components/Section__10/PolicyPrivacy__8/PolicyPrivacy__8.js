import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__8.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__8() {
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
    <div className="policyprivacy__8__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__2">Istotne techniki marketingowe</h1>
        <ol className="ol__policyprivacy">
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Operator stosuje analizę statystyczną ruchu na stronie, poprzez Google Analytics (Google Inc. z siedzibą w USA). Operator nie przekazuje do operatora tej usługi danych osobowych, a jedynie zanonimizowane informacje. Usługa bazuje na wykorzystaniu ciasteczek w urządzeniu końcowym użytkownika. W zakresie informacji o preferencjach użytkownika gromadzonych przez sieć reklamową Google użytkownik może przeglądać i edytować informacje wynikające z plików cookies przy pomocy narzędzia: https://www.google.com/ads/preferences/.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__8