import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy__4.css'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy__4() {
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
    <div className="policyprivacy__4__container">
        <h1 data-aos='fade-down' data-aos-duration='1500' className='h1__policyprivacy__2'>Hosting</h1>
        <ol className='ol__policyprivacy'>
            <li data-aos='fade-left' data-aos-duration='1500' className='li__policyprivacy'>Serwis jest hostowany (technicznie utrzymywany) na serwerach operatora: Hostinger.</li>
        </ol>
    </div>
  )
}

export default PolicyPrivacy__4