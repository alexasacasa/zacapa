import React from 'react';

export default (props) => {
  return (
    <label htmlFor={props.id}>{props.inputName}
      <textarea 
      id={props.id}
      value={props.value}
      rows='10' cols='20'
      name={props.name}
      onChange={props.change}>
      </textarea>
    </label>
  )
}