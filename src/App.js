import './App.css';
import Board from './components/board.jsx';
import Scoreboard,{Card} from './components/Scoreboard.jsx';
import React,{useState} from 'react';
import Reset from './components/Reset';
function App() {
  const winConditions=[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  let checkFilled = (board) => {
    for( let i = 0; i < board.length ; i++ ){
      if(board[i]===null) return false;
    }
    return true;
  }
  let clearBoard = () => {
    setBoard(Array(9).fill(null));
    setxPlaying(true);
    setgameOver(false);
    setMessage("");
    setWon(-1);
  }
  const [board,setBoard]=useState(Array(9).fill(null));
  const [xPlaying,setxPlaying] = useState(true);
  const [score,setScores] = useState({x:0,o:0});
  const [gameOver,setgameOver] = useState(false);
  const [xWon,setWon] = useState(-1);
  const [message,setMessage] = useState("");
  const handleBoxClick = (boxId) => {
    if(board[boxId]!==null || gameOver) return;
    const update = board.map((val,idx)=>{
      if(idx===boxId){
        return xPlaying?"X":"O";
      }
      return val;
    })
    if(checkWinner(update)){
      setgameOver(true);
      if(xPlaying){
        let updateScores = { x:score.x + 1, o:score.o };
        setWon(0);
        setMessage('Congratulations!!! Player X Won')
        setScores(updateScores);
      }
      else{
        let updateScores = { x:score.x, o:score.o + 1 };
        setWon(1);
        setMessage('Congratulations!!! Player O Won')
        setScores(updateScores);
      }
      setTimeout(()=>clearBoard(),2000)
    }
    else if(checkFilled(update)){
      setMessage('Match Draw!!!')
      setWon(-1);
      setgameOver(true);
      setTimeout(()=>clearBoard(),2000)
    }
    else setxPlaying(!xPlaying);
    setBoard(update);
  }
  const checkWinner = (board) => {
    for( let i = 0; i < winConditions.length; i++){
      const [x, y, z] = winConditions[i];
      if( board[x] && board[x] === board[y] && board[y] === board[z] ){
        return board[x];
      }
    }
  } 
  return (<>
    <div className="App">Tic Tac Toe</div>
    <Scoreboard scores={score} xPlaying={xPlaying}/>
    <Card message={message} xWon={xWon}/>
    <Board board={board} onClick={handleBoxClick} />
    <Reset func={clearBoard}/>
    </>
  );
}

export default App;
