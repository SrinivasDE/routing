import React from 'react';

const YellowButton = (props) => {
  return (
    <button value="Yellow" onClick={props.data} className="btn yellow">Yellow</button>
  )
}

export default YellowButton;