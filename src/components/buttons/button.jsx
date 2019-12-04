import React from 'react';

function Button (props) {
  return (
    <button onClick={props.action}>                                                                                                                                                                                                                                                                                                                                                                                                                                                             ' id={props.id}>
      {props.name}
    </button>
  )
}

export default Button;
