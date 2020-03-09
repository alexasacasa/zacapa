import React from 'react'

function Social({children}) {
  return(
    <div className='social--wrapper'>
      <a className='social-item__link' href='https://www.linkedin.com/in/alejandra-sacasa-0aa238169/'>
        <img className='item__linkedin' alt='Link to linkedin' src='./img/linkedin.png'/>
      </a>
      <a className='social-item__link' href='https://github.com/alexasacasa'>
        <img className='item__github' alt='link to github' src='./img/github.png'/>
      </a>
      <a className='social-item__link' href='https://twitter.com/sad_algorythm'>
        <img className='item__github' alt='link to github' src='./img/twitter.png'/>
      </a>
    </div>
  )
}

export default Social
