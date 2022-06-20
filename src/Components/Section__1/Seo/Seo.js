import React, { useEffect } from 'react'
//CSS
import './Seo.css'
//Images
import SeoImg from '../../../Images/16.png'
//Packages
import $ from 'jquery'
import VanillaTilt from 'vanilla-tilt'
import Aos from 'aos'
import "aos/dist/aos.css" 


function Seo() {
  //VanillaTilt
  $(document).ready(function Main() { VanillaTilt.init(document.querySelectorAll(".seo__image__1")); });
  $(function() { VanillaTilt.init(document.querySelectorAll(".seo__image__1")); });
  //Aos
  useEffect(() => {
  Aos.init({ duration: 2000 });
  }, []);
  //Aos disabled on mobile devices
  Aos.init({
  disable: function() {
  var maxWidth = 800;
  return window.innerWidth < maxWidth;
  }
  });
  return (
    <div className="seo__container">
        <div className="seo__row">
            <div data-aos='fade-right' className="seo__column__1">
                <img className='seo__image__1' src={SeoImg} alt=''></img>
            </div>
            <div className="seo__column__2">
                <h1 data-aos='fade-left' className='h1__seo__1'>Pozycjonowanie stron internetowych (SEO)</h1>
                <h2 data-aos='fade-left' className='h2__seo__1'>Pozycjonowanie stron internetowych jest procesem, którego główny cel polega na zwiększeniu widoczności domeny w bezpłatnych (organicznych) wynikach wyszukiwania pod wybranymi frazami kluczowymi. Działania te polegają na optymalizacji wszystkich elementów witryny oraz budowania zaplecza backlinków (link building). Na pozycjonowanie składają się liczne procesy dotyczące działań SEO, które przeprowadza się on-site (na stronie) oraz off-site (poza stroną). Do off-site należy pozyskiwanie wartościowych linków przekierowujących do naszej witryny. On-site to: optymalizacja wszystkich publikowanych treści, kodu strony oraz wprowadzanie działań UX (User Expierience).</h2>
            </div>
        </div>
    </div>
  )
}

export default Seo