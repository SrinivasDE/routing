import React from 'react';

const RedButton = (props) => {
  return (
    <button value="Red" onClick={props.data} className="btn red">Red</button>
  )
}

export default RedButton;