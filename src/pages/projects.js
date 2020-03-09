import React from 'react'
import Title from '../components/title'

function Projects() {
  return(
    <section className='main-wrapper'>
      <Title title='Projects'/>
      <div>
        {/** 
         * funcionalidad para crear los proyectos dinámicamente
        */}
        <p>I'm working on . . .</p>
      </div>
    </section>
  )
}

export default Projects