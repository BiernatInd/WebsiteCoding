import React, { useEffect } from 'react'
//CSS
import './NeedWebsite.css'
//Images
import NeedWebsiteImage from '../../../Images/26.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function NeedWebsite() {
    //VanillaTilt
    $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".needwebsite__img__1")); });
    $(function() { VanillaTilt.init(document.querySelectorAll(".needwebsite__img__1")); });
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
    <div className="needwebsite__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__needwebsite__1'>Co powinna zawierać strona internetowa?</h1>
        <div className="needwebsite__row">
            <div className="needwebsite__column__1">
                <ol className='ol__needwebsite__1'>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Nazwę marki i logo.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Menu.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Szyfrowane dane za pomocą protokołu SSL.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Zabezpieczenie adresu IP.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Profesjonalny i przyjemny wygląd.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Dobrą optymalizacje.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Responsywność (Dopasowywanie rozdzielczości strony do urządzeń mobilnych).</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Linki do podpiętych mediów społecznościowych.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Formularz kontaktowy z podpiętym własnym adresem e-mail.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Chat pomocy technicznej.</li>
                    <li data-aos='fade-right' data-aos-duration='1500' className='li__needwebsite__1'>Stopka.</li>
                </ol>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="needwebsite__column__2">
                <img className='needwebsite__img__1' src={NeedWebsiteImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default NeedWebsite