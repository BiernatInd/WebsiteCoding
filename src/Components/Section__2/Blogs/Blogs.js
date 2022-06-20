import React, { useEffect } from 'react'
//CSS
import './Blogs.css'
//Components
import AboutBlog from '../About/AboutBlog'
import Achievement from '../Achievement/Achievement'
import Slider from '../../Section__1/Slider/Slider'
import NeedBlog from '../NeedBlog/NeedBlog'
import BlogSupport from '../BlogSupport/BlogSupport'
//Packages
import Aos from 'aos'
import "aos/dist/aos.css" 

function Blogs() {
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
    <div className="blogs__container">
      <div className="blogs__background">
        <h1 data-aos='fade-right' data-aos-duration='1500' className='h1__home__1'>Tworzymy profesjonalne blogi internetowe</h1>
        <h2 data-aos='fade-left' data-aos-duration='1500' className='h2__home__1'>Rozwiń swój biznes w internecie</h2>
        <h3 data-aos='fade-right' data-aos-duration='1500' className='h3__home__1'>Solidnie wykonany blog pomoże Ci poznać opinie klientów</h3>
      </div>
      <AboutBlog />
      <Achievement />
      <Slider />
      <NeedBlog />
      <BlogSupport />
    </div>
  )
}

export default Blogs