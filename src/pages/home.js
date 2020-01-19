import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Social from '../components/social'
import Flower from '../components/svg/flowerHome'

function Home() {
  const props = useSpring({opacity: 1, 
    from: {
      opacity: 0,
      duration: '3s',
    }
  })

  return(
    <section className='main-wrapper home-wrapper'>

      <animated.div style={props} className='home-asd'>
        <h1 className='home__title'>Hi, I'm <br/>Alejandra</h1>
        <p className='home__sub'>Web developer</p>
        <Link to='/projects' className='home__link'> >> See my projects</Link>
        <Social />      
      </animated.div>
      <Flower />

    </section>
  )
}

export default Home
