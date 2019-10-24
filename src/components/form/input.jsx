import React from 'react';

export default (props) => {
  return (
    <label for={props.id}>{props.inputName}
      <input 
      id={props.id}
      type={props.type}
      name={props.name}
      />
    </label>
  )
}
