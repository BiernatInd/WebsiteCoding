import React from 'react'
//CSS
import './Navbar.css'
//Script
import './ScriptNavbar'
//Packages
import { Link } from 'react-router-dom'
import $ from 'jquery'

function navbar() {
  return (
    <section className="navigation">
    <div className="nav-container">
      <div className="brand">
        <a href="/">WebsiteCoding</a>
      </div>
      <nav>
        <div className="nav-mobile"><a id="navbar-toggle" href="#!"><span></span></a></div>
        <ul className="nav-list">
          <li>
            <a href="/">Strona główna</a>
          </li>
          <li>
            <a href="#!">Oferta</a>
            <ul className="navbar-dropdown">
              <li><Link to='/blogi' target='_blank'><h1 className='h1__menu__1'>Blogi</h1 ></Link></li>
              <li><Link to='/strony-internetowe' target='_blank'><h1 className='h1__menu__1'>Strony Internetowe</h1 ></Link></li>
              <li><Link to='/sklepy-internetowe' target='_blank'><h1 className='h1__menu__1'>Sklepy Internetowe</h1 ></Link></li>
              <li><Link to='/pozycjonowanie' target='_blank'><h1 className='h1__menu__1'>Pozycjonowanie</h1 ></Link></li>
            </ul>
          </li>
          <li>
            <a href="#!">Nasze zrealizowane projekty</a>
          </li>
          <li>
            <a href="#!">Nasi pracownicy</a>
            <ul className="navbar-dropdown">
            <li><Link to='/programisci' target='_blank'><h1 className='h1__menu__1'>Programiści</h1 ></Link></li>
            <li><Link to='/graficy' target='_blank'><h1 className='h1__menu__1'>Graficy</h1 ></Link></li>
            </ul>
          </li>
          <li>
            <a href="#!">O nas</a>
            <ul className="navbar-dropdown">
              <li><Link to='/o-naszej-firmie' target='_blank'><h1 className='h1__menu__1'>O naszej firmie</h1 ></Link></li>
              <li><Link to='/wspolpraca' target='_blank'><h1 className='h1__menu__1'>Współpraca</h1 ></Link></li>
              <li><Link to='/polityka-prywatnosci' target='_blank'><h1 className='h1__menu__1'>Polityka Prywatności</h1 ></Link></li>
            </ul>
          </li>
          <li><Link to='/kontakt' target='_blank'><h1 className='h1__menu__1'>Kontakt</h1 ></Link></li>
        </ul>
      </nav>
    </div>
  </section>
  )
}

export default navbar