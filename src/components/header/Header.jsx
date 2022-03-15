import React from 'react'
import './Style-Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>
          Hola soy,
        </h5>
        <h1>
          Alejandro Navarro
        </h1>
        <h5 className="text-light">
          Frontend Developer
        </h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'>Desliza Hacia Abajo</a>
      </div>

    </header>

  )
}

export default Header