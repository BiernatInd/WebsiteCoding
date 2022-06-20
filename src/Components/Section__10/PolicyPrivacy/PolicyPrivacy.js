import React, { useEffect } from 'react'
//CSS
import './PolicyPrivacy.css'
//Components
import PolicyPrivacy__2 from '../PolicyPrivacy__2/PolicyPrivacy__2'
import PolicyPrivacy__3 from '../PolicyPrivacy__3/PolicyPrivacy__3'
import PolicyPrivacy__4 from '../PolicyPrivacy__4/PolicyPrivacy__4'
import PolicyPrivacy__5 from '../PolicyPrivacy__5/PolicyPrivacy__5'
import PolicyPrivacy__6 from '../PolicyPrivacy__6/PolicyPrivacy__6'
import PolicyPrivacy__7 from '../PolicyPrivacy__7/PolicyPrivacy__7'
import PolicyPrivacy__8 from '../PolicyPrivacy__8/PolicyPrivacy__8'
import PolicyPrivacy__9 from '../PolicyPrivacy__9/PolicyPrivacy__9'
import PolicyPrivacy__10 from '../PolicyPrivacy__10/PolicyPrivacy__10'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function PolicyPrivacy() {
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
    <div className="policyprivacy__container">
      <div className="policyprivacy__background">
        <h1 data-aos='fade-down' data-aos-duration='1500' className="h1__policyprivacy__1">Polityka Prywatności</h1>
      </div>
      <PolicyPrivacy__2 />
      <PolicyPrivacy__3 />
      <PolicyPrivacy__4 />
      <PolicyPrivacy__5 />
      <PolicyPrivacy__6 />
      <PolicyPrivacy__7 />
      <PolicyPrivacy__8 />
      <PolicyPrivacy__9 />
      <PolicyPrivacy__10 />
    </div>
  )
}

export default PolicyPrivacy