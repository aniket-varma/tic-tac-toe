import React from 'react'
import './Scoreboard.css'

function Scoreboard(props) {
    const xscore=props.scores.x
    const oscore = props.scores.o;
    const xPlaying = props.xPlaying;
  return (
    <div className="scoreboard">
        <span className={`score x-score ${!xPlaying && "inactive"}`}>X - {xscore}</span>
        <span className={`score o-score ${xPlaying && "inactive"}`}>O - {oscore}</span>
    </div>
  )
}
export function Card(props){
  return(
    <div className={`card ${props.xWon===0?"x-win":props.xWon===1?"y-win":""}`}>{props.message}</div>)
}

export default Scoreboard