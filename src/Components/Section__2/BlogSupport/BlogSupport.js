import React, { useEffect } from 'react'
//CSS
import './BlogSupport.css'
//Images
import BlogSupportImage from '../../../Images/22.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 

function BlogSupport() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".blogsupport__img__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".blogsupport__img__1")); });
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
    <div className="blogsupport__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__blogsupport__1'>Wsparcie nad blogiem</h1>
        <div className="blogsupport__row">
            <div data-aos='fade-right' data-aos-duration='1500' className="blogsupport__column__1">
                <img className='blogsupport__img__1' src={BlogSupportImage} alt=''></img>
            </div>
            <div data-aos='flip-up' data-aos-duration='1500' className="blogsupport__column__2">
                <h2 className='h2__blogsupport__1'>W swoich usługach oferujemy profesjonalne wsparcie i opiekę nad stroną która jest wliczona w koszty przez pierwszy.</h2>
                <h2 className='h2__blogsupport__1'>Oferujemy krótkie przeszkolenie w zakresie zarządzania blogiem.</h2>
                <h2 className='h2__blogsupport__1'>Jeśli ktoś nie ma czasu, ani chęci na samodzielne wstawianie lub edytowanie treści i zarządzanie swoją stroną, mamy w swojej ofercie za niską kwotę zarządzanie które jest płatne z góry za miesiąc.</h2>
                <h2 className='h2__blogsupport__1'>W zarządzenie stroną wchodzi edycja lub wstawianie nowych tekstów, zdjęć, edytowanie kodu źródłowego, stała optymalizacja strony, oraz dopasowywanie responsywności pod wszystkie urządzenia mobilne.</h2>
            </div>
            <div data-aos='fade-left' data-aos-duration='1500' className="blogsupport__column__3">
                <img className='blogsupport__img__1' src={BlogSupportImage} alt=''></img>
            </div>
        </div>
    </div>
  )
}

export default BlogSupport