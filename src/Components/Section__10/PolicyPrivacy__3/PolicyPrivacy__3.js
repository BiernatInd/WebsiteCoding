import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__3.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__3() {
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
    <div className="policyprivacy__3__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__2">Wybrane metody ochrony danych stosowane przez operatora</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Miejsca logowania i wprowadzania danych osobowych są chronione w warstwie transmisji (certyfikat SSL). Dzięki temu dane osobowe i dane logowania, wprowadzone na stronie, zostają zaszyfrowane w komputerze użytkownika i mogą być odczytane jedynie na docelowym serwerze.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Dane osobowe przechowywane w bazie danych są zaszyfrowane w taki sposób, że jedynie posiadający Operator klucz może je odczytać. Dzięki temu dane są chronione na wypadek wykradzenia bazy danych z serwera.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Hasła użytkowników są przechowywane w postaci hashowanej. Funkcja hashująca działa jednokierunkowo - nie jest możliwe odwrócenie jej działania, co stanowi obecnie współczesny standard w zakresie przechowywania haseł użytkowników.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Operator okresowo zmienia swoje hasła administracyjne.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>W celu ochrony danych Operator regularnie wykonuje kopie bezpieczeństwa.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Istotnym elementem ochrony danych jest regularna aktualizacja wszelkiego oprogramowania, wykorzystywanego przez Operatora do przetwarzania danych osobowych, co w szczególności oznacza regularne aktualizacje komponentów programistycznych.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__3