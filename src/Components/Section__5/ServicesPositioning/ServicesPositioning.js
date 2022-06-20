import React, { useEffect } from 'react'
//CSS
import './ServicesPositioning.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function ServicesPositioning() {
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
    <div className="servicespositioning__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__servicespositioning__1'>Poznaj nasze pozycjonowanie</h1>
        <div className="servicespositioning__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="servicespositioning__column__1">
                <h2 className="h2__servicespositioning__1">Analiza strony i konkurencji</h2>
                <h3 className="h3__servicespositioning__1">Przeprowadzona analiza strony oraz liderów w branży pozwoli na ukierunkowanie przyszłych działań. Dzięki analizie konkurencji poznajemy sposoby ich promocji.</h3>
            </div>
            <div data-aos='fade-down' data-aos-duration='1500' className="servicespositioning__column__2">
                <h2 className="h2__servicespositioning__1">Audyt seo</h2>
                <h3 className="h3__servicespositioning__1">Pierwszy krok do wysokiej pozycji w wyszukiwarce to profesjonalna analiza strony internetowej pod kątem technicznym.</h3>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="servicespositioning__column__3">
                <h2 className="h2__servicespositioning__1">Regularna optymalizacja strony</h2>
                <h3 className="h3__servicespositioning__1">Dopracowanie technicznej części strony, wszystkich znaczników meta, usunięciu błędnych podstron, przekierowań, odpowiednia optymalizacja treści.</h3>
            </div>
        </div>
        <div className="servicespositioning__row__2">
            <div data-aos='fade-right' data-aos-duration='1500' className="servicespositioning__column__1">
                <h2 className="h2__servicespositioning__1">Zarządzanie Contentem</h2>
                <h3 className="h3__servicespositioning__1">Odpowiednia kreacja oraz optymalizacja treści na stronie pozwala nie tylko na zwiększenie widoczności strony internetowej w wyszukiwarce Google ale i również przyciągnięcie użytkowników na stronę, dzięki tzw. content marketing.</h3>
            </div>
            <div data-aos='fade-up' data-aos-duration='1500' className="servicespositioning__column__4">
                <h2 className="h2__servicespositioning__1">Content marketing</h2>
                <h3 className="h3__servicespositioning__1">Odpowiednia treść np. w postaci bloga jest pierwszym krokiem do sukcesu, jednak utworzoną treść należy odpowiednio wypromować poprzez tzw. działania on-site oraz off-site.</h3>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="servicespositioning__column__3">
                <h2 className="h2__servicespositioning__1">Link Building</h2>
                <h3 className="h3__servicespositioning__1">Budowa skutecznego profilu odnośników do pozycjonowanej strony jest w sztuką samą w sobie, dlatego warto powierzyć to działanie ekspertom, gdyż linki niskiej jakości mogą powodować efekt odwrotny niż zamierzony.</h3>
            </div>
        </div>
    </div>
  )
}

export default ServicesPositioning