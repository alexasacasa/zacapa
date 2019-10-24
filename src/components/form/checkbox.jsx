import React from 'react';

export default (props) => {
  return (
    <label for={props.taskId}>
      <input 
      type="radio" 
      id= {props.taskId}
      value="completed"/>
    </label>
  )
}
