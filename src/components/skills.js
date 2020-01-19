import React from 'react'
import Paragraph from './paragraph'

export default (props) => {
  return(
    <div className={`skill--item skill__item-${props.item}`}>
      <h4>{props.title}</h4>
      <Paragraph className='skill-item__text' text={props.list} />
    </div>
  )
}
