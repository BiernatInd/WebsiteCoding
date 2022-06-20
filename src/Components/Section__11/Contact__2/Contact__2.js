import React, { useEffect } from 'react'
//CSS
import './Contact__2.css'
//Components
import ContactInfo from '../ContactInfo/ContactInfo'
import ContactForm from '../ContactForm/ContactForm'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Contact__2() {
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
    <div className="contact__2__container">
      <div className="contact__2__background">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__contact__1">Kontakt</h1>
      </div>
      <ContactInfo />
      <ContactForm />
    </div>
  )
}

export default Contact__2