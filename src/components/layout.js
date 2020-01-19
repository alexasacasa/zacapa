import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/nav'

function Layout() {

  return(
    <div>
      <header className='main-header main-wrapper'>
        <Link to='/' className='header__logo'>
          <img src='./img/logo.png' alt='Logo' />
        </Link>
        <Nav claxs='header-nav' />
      </header>
    </div>
  )

}

export default Layout
