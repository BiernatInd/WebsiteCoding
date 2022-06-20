import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__5.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__5() {
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
    <div className="policyprivacy__5__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__policyprivacy__2'>Twoje prawa i dodatkowe informacje o sposobie wykorzystania danych</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-right' data-aos-duration='1500'className='li__policyprivacy'>W niektórych sytuacjach Administrator ma prawo przekazywać Twoje dane osobowe innym odbiorcom, jeśli będzie to niezbędne do wykonania zawartej z Tobą umowy lub do zrealizowania obowiązków ciążących na Administratorze. Dotyczy to takich grup odbiorców:</li>
            <ul className='ul__policyprivacy'>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>firma hostingowa na zasadzie powierzenia</li>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>ubezpieczyciele</li>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>upoważnieni pracownicy i współpracownicy, którzy korzystają z danych w celu realizacji celu działania strony</li>
            </ul>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Twoje dane osobowe przetwarzane przez Administratora nie dłużej, niż jest to konieczne do wykonania związanych z nimi czynności określonych osobnymi przepisami (np. o prowadzeniu rachunkowości). W odniesieniu do danych marketingowych dane nie będą przetwarzane dłużej niż przez 3 lata.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Przysługuje Ci prawo żądania od Administratora:</li>
            <ul className='ul__policyprivacy'>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>dostępu do danych osobowych Ciebie dotyczących,</li>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>ich sprostowania,</li>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>usunięcia,</li>
                <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>ograniczenia przetwarzania,</li>
                <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>oraz przenoszenia danych.</li>
            </ul>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Przysługuje Ci prawo do złożenia sprzeciwu w zakresie przetwarzania wskazanego w pkt 3.3 c) wobec przetwarzania danych osobowych w celu wykonania prawnie uzasadnionych interesów realizowanych przez Administratora, w tym profilowania, przy czym prawo sprzeciwu nie będzie mogło być wykonane w przypadku istnienia ważnych prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec Ciebie interesów, praw i wolności, w szczególności ustalenia, dochodzenia lub obrony roszczeń.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Na działania Administratora przysługuje skarga do Prezesa Urzędu Ochrony Danych Osobowych, ul. Stawki 2, 00-193 Warszawa.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Podanie danych osobowych jest dobrowolne, lecz niezbędne do obsługi Serwisu.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>W stosunku do Ciebie mogą być podejmowane czynności polegające na zautomatyzowanym podejmowaniu decyzji, w tym profilowaniu w celu świadczenia usług w ramach zawartej umowy oraz w celu prowadzenia przez Administratora marketingu bezpośredniego.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Dane osobowe nie są przekazywane od krajów trzecich w rozumieniu przepisów o ochronie danych osobowych. Oznacza to, że nie przesyłamy ich poza teren Unii Europejskiej.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__5