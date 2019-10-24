import React from 'react';

export default (props) => {
  return (
    <label for={props.id}>{props.inputName}
      <textarea 
      id={props.id}
      rows='10' cols='20'
      name={props.name}>
      </textarea>
    </label>
  )
}