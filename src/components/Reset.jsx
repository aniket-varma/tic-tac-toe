import React from 'react'
import './Reset.css';
function Reset(props) {
  return (
    <button className="Resetbtn" onClick={props.func}>Reset</button>
  )
}

export default Reset