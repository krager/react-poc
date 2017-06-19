import React from 'react';

const Message = (props) => {
  return (
    <p>
      {props.text}<br />
      {props.counter}
    </p>
  )
}

export default Message;
