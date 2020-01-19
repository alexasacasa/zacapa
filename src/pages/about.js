import React from 'react'
import Title from '../components/title'
import Subtitle from '../components/subtitle'
import Paragraph from '../components/paragraph'
import Skill from '../components/skills'
import Social from '../components/social'

function About() {
  return(
    <section className='wrapper-about main-wrapper'>
      <div className='about--info'>
        <Title title='About me'/>
        <Paragraph text='I’m a Web Developer with strong Front-end and UX-UI skills. I consider myself a good team player and a proactive person, always looking for new challenges and the best ways to successfully complete my tasks.'/>
        <Paragraph text='As a professional web developer and designer I have been accountable in the projects I have worked and with the people I have worked with'/>
        <Paragraph text=' > >> You can follow me an see more projects in ...'/>
        <Social />
      </div>
      <div className='about--skills'>
        <Subtitle title='Skills'/>
        <div className='skills__list'>
          <Skill item='1' title='Develop' list='HTML, CSS, JavaScript, Sass, Drupal, Node.js, React, Gatsby, Git, Grunt, Webpack' />
          <Skill item='2' title='Design' list='UI design, UX design, Adobe Photoshop, Adobe Illustrador, Sketch, Figma' />
          <Skill item='3' title='Soft-skills' list='Non-violent Communication, Design Thinking, Team work' />
        </div>
        </div> 
    </section>
  )
}

export default About
