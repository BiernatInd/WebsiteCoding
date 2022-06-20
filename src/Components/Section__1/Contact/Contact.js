import React, { useEffect } from 'react'
//CSS
import './Contact.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Contact() {
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
    <div className="heading__container">
      <h1 data-aos='fade-down' className='container__contact'>Kontakt</h1>
    <div data-aos='flip-down' className='form__container'>
    <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic"><h1 className='address__h1__1'>Adres</h1></div>
          <div className="text-one"><h1 className='address__h1__2'>Sandomierz, 27-600</h1></div>
          <div className="text-two"><h1 className='address__h1__2'>Partyzantów, 4c</h1></div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic"><h1 className='phone__h1__1'>Numer telefonu</h1></div>
          <div className="text-one"><h1 className='phone__h1__2'>+48 733 001 533</h1></div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic"><h1 className='email__h1__1'>E-mail</h1></div>
          <div className="text-one"><h1 className='email__h1__2'>websitecoding.ind@gmail.com</h1></div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Skontaktuj się z nami</div>
      <form name='myForm' action="" /* onSubmit={sendEmail} */>
        <div className="input-box">
          <input type="text" name='name' placeholder="Wprowadź swoje Imię" required/>
        </div>
        <div className="input-box">
          <input type="text" name='surname' placeholder="Wprowadź swoje Nazwisko" required/>
        </div>
        <div className="input-box">
          <input type="text" name='phone' placeholder="Wprowadź swój numer telefonu" required/>
        </div>
        <div className="input-box">
          <input type="text" name='user_email' placeholder="Wprowadź swój E-mail" required/>
        </div>
        <div className="input-box message-box">
            <textarea name='message' placeholder='Napisz wiadomość' required></textarea>
        </div>
        <div className="button">
          <button className="btn3 btn3-slide-top" /* onClick={myfunction} */>Wyślij</button>
        </div>
        <div className="button">
          <button className="btn3 btn3-slide-top" type='reset'>Zresetuj</button>
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Contact