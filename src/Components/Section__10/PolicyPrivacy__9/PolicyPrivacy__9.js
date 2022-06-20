import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__9.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__9() {
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
    <div className="policyprivacy__9__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__2">Informacja o plikach cookies</h1>
        <ol className="ol__policyprivacy">
            <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Serwis korzysta z plików cookies.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Pliki cookies wykorzystywane są w następujących celach:</li>
            <ol className="ol__policyprivacy__2">
                <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">utrzymanie sesji użytkownika Serwisu (po zalogowaniu), dzięki której użytkownik nie musi na każdej podstronie Serwisu ponownie wpisywać loginu i hasła;</li>
                <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">realizacji celów określonych powyżej w części "Istotne techniki marketingowe";</li>
            </ol>
            <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Oprogramowanie do przeglądania stron internetowych (przeglądarka internetowa) zazwyczaj domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać zmiany ustawień w tym zakresie. Przeglądarka internetowa umożliwia usunięcie plików cookies. Możliwe jest także automatyczne blokowanie plików cookies Szczegółowe informacje na ten temat zawiera pomoc lub dokumentacja przeglądarki internetowej.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className="li__policyprivacy">Ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className="li__policyprivacy">Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu wykorzystywane mogą być również przez współpracujące z operatorem Serwisu podmioty, w szczególności dotyczy to firm: Google (Google Inc. z siedzibą w USA), Facebook (Facebook Inc. z siedzibą w USA), Twitter (Twitter Inc. z siedzibą w USA).</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__9