import React from 'react';

function Input (props) {
  return (
    <label className='form-label' 
      htmlFor={props.id}> {props.inputName}
      <input className='form-input'
      id={props.id}
      type={props.type}
      name={props.name}
      onChange={props.change}
      />
    </label>
  )
}

export default Input;
