import React from 'react';

export default (props) => {

  return (
    <div id={`task${props.id}`} className={props.customStyle}>
      <header>
        <h3>{props.title}</h3>
        <button onClick={props.delete} >x</button>
      </header>
      <div>
        <p>{props.descrip}</p>
        <p>{props.date}</p>
        <p>{props.deadline}</p>
      </div>
    </div>
  )
}
