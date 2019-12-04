import React from 'react';

export default (props) => {
  return (
    <form >
      <label for={props.taskId}>Completed
        <input type="radio" id= {props.taskId} value={false} onChange={props.change}/>
      </label>
    </form>

  )
}
