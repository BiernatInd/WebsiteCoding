import React, { useEffect } from 'react'
//CSS
import './NeedBlog.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function NeedBlog() {
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
    <div className="needblog__container">
    <div className="needblog__row">
        <h1 data-aos='flip-down' data-aos-duration='1500' className='h1__needblog__1'>Co powinien zawierać blog?</h1>
        <ol className='ol__needblog__1'>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Nazwę marki i logo.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Menu.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Responsywność.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Wyszukiwarkę do postów.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Mape tagów.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Linki do podpiętych mediów społecznościowych.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Możliwość dodawania i odpowiadania na wpisy.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Zapis na newsletter.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>System rezerwacji z własną bazą danych.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>System opinii.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>System logowania i rejestracji.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Formularz kontaktowy podpięty z własnym adresem e-mail.</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Szyfrowane dane za pomocą protokołu SSL.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Zabezpieczony adres IP</li>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__needblog__1'>Dobrą optymalizację.</li>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__needblog__1'>Stopka</li>
        </ol>
    </div>
</div>
  )
}

export default NeedBlog