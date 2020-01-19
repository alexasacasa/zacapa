import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return(
    <nav className={props.claxs}>
      <ul className='main-nav'>
        <li className='main-nav__item'>
          <Link className='main-nav__link' to='/'>Home</Link>
        </li>
        <li className='main-nav__item'>
          <Link className='main-nav__link' to='/about-me'>About me</Link>
        </li>
        <li className='main-nav__item'>
          <Link className='main-nav__link' to='/projects'>Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
