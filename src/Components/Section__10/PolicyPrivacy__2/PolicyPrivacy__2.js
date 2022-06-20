import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__2.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__2() {
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
    <div className="policyprivacy__2__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__2">Informacje ogólne</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem url: websitecoding.pl.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Operatorem serwisu oraz Administratorem danych osobowych jest: Karol Biernat Partyzantów 4c, 27-600, Sandomierz.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Adres kontaktowy poczty elektronicznej operatora: websitecoding.ind@gmail.com.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Operator jest Administratorem Twoich danych osobowych w odniesieniu do danych podanych dobrowolnie w Serwisie.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Serwis wykorzystuje dane osobowe w następujących celach:</li>
            <ul data-aos='fade-right' data-aos-duration='1500' className='ul__policyprivacy'>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Prowadzenie forum internetowego</li>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Obsługa zapytań przez formularz</li>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Realizacja zamówionych usług</li>
            </ul>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Serwis realizuje funkcje pozyskiwania informacji o użytkownikach i ich zachowaniu w następujący sposób:</li>
            <ul className='ul__policyprivacy'>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Poprzez dobrowolnie wprowadzone w formularzach dane, które zostają wprowadzone do systemów Operatora.</li>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Poprzez zapisywanie w urządzeniach końcowych plików cookie (tzw. „ciasteczka”).</li>
            </ul>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__2