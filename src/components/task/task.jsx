import React from 'react';
import Input from '../form/checkbox'

export default (props) => {

  return (
    <div id={`task${props.id}`} className={props.customStyle}>
      <header>
        <h3>{props.title}</h3>
        <button onClick={props.delete} >x</button>
      </header>
      <div>
        <Input change={props.completed} />
        <p>{props.deadline}</p>
        <p>{props.descrip}</p>
        <p>{props.date}</p>
      </div>
    </div>
  )
}
