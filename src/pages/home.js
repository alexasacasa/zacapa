import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import Social from '../components/social'

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
        <h1 className='home__title'>Hi, I'm Alejandra</h1>
        <p>I'm Web Developer with strong Front-end skills. I consider myself a good team player and a proactive person, always looking for new challenges and the best ways to successfully complete my tasks.</p>
        <p>I have knowledge in Sass, React, Gatsby, Node.js, AJAX, Git, Grunt, Gulp, Bootstrap, Webpack, Drupal, PhotoShop, Illustrador, Figma and Sketch</p>
        <p>If I'm not coding or designing  I'm reading or eating cookies :)</p>
        <div classNAme='home__media'>
          <span>You can follow me on:</span>
          <Social />
        </div>

      </animated.div>
    </section>
  )
}

export default Home