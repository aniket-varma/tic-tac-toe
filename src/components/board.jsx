import React from 'react'
import './board.css';
import Box from './box.jsx';
function Board({board,onClick}) {
  return (
    <div className="board">
        {
            board.map((char,idx)=>{
                return <Box value={char} onClick={()=>onClick(idx)}/>
            })
        }
    </div>
  )
}

export default Board