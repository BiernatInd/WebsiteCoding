import React, { useEffect } from 'react'
//CSS
import './ContactInfo.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function ContactInfo() {
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
    <div className="contactinfo__container">
        <h1 data-aos='fade-up' data-aos-duration='1500' className='h1__contactinfo__1'>Skontaktuj się z nami poprzez poniższy formularz kontaktowy albo chat messenger</h1>
    </div>
  )
}

export default ContactInfo