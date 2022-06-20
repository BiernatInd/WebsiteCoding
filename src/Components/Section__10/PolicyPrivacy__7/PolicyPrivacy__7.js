import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__7.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__7() {
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
    <div className="policyprivacy__7__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__policyprivacy__2'>Logi administratora</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-right' data-aos-duration='1500' className='li__policyprivacy'>Informacje zachowaniu użytkowników w serwisie mogą podlegać logowaniu. Dane te są wykorzystywane w celu administrowania serwisem.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__7