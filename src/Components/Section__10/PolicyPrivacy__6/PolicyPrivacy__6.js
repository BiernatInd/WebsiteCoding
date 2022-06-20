import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__6.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__6() {
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
    <div className="policyprivacy__6__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__policyprivacy__2'>Informacje w formularzach</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Serwis zbiera informacje podane dobrowolnie przez użytkownika, w tym dane osobowe, o ile zostaną one podane.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Serwis może zapisać informacje o parametrach połączenia (oznaczenie czasu, adres IP).</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Serwis, w niektórych wypadkach, może zapisać informację ułatwiającą powiązanie danych w formularzu z adresem e-mail użytkownika wypełniającego formularz. W takim wypadku adres e-mail użytkownika pojawia się wewnątrz adresu url strony zawierającej formularz.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Dane podane w formularzu są przetwarzane w celu wynikającym z funkcji konkretnego formularza, np. w celu dokonania procesu obsługi zgłoszenia serwisowego lub kontaktu handlowego, rejestracji usług itp. Każdorazowo kontekst i opis formularza w czytelny sposób informuje, do czego on służy.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__6