import React from 'react'

function H1(props) {
  let { text ,styles} = props;
  return <h1 style={props}>{text}</h1>;
}

export default H1       