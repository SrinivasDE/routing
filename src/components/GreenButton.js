import React from 'react';

const GreenButton = (props) => {
  return (
    <button value="Green" onClick={props.data} className="btn green">Green</button>
  )
}

export default GreenButton;