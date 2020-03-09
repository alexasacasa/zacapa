import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'

function Layout( {children} ) {

  return(
    <div className='main-wrapper'>
      <header className='main-header'>
        <Link to='/' className='header__logo'>
          <img src='./img/logo.png' alt='Logo' />
        </Link>
        <Nav claxs='header-nav' />
      </header>
      {children}
      <footer>
        <p>Made with love and React  |  Dec - 2019  |  San José, Costa Rica</p>
      </footer>
    </div>
  )

}

export default Layout
