import React, { useState } from 'react'

import Icons from './Icons'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import "./App.css"

let tictoctoeArray = new Array(9).fill("");
const App = () => {


  let [iscross, setIscross] = useState(true);
  let [winner, setWinner] = useState("");


  //playAgain == set all to default values

  function playAgain() {
    tictoctoeArray.fill("");
    setIscross(true);
    setWinner("");
  }

  //console.log(winner)


  //Find winner == 8 condition to find winner
  function findwinner() {
    //row
    if (
      tictoctoeArray[0] == tictoctoeArray[1] && tictoctoeArray[0] == tictoctoeArray[2] && tictoctoeArray[0] != ""
    ) {
      setWinner(`${tictoctoeArray[0]} has won`)
    }
    else if (
      tictoctoeArray[3] == tictoctoeArray[4] && tictoctoeArray[3] == tictoctoeArray[5] && tictoctoeArray[3] != ""
    ) {
      setWinner(`${tictoctoeArray[3]} has won`)
    }
    else if (
      tictoctoeArray[6] == tictoctoeArray[7] && tictoctoeArray[6] == tictoctoeArray[8] && tictoctoeArray[6] != ""
    ) {
      setWinner(`${tictoctoeArray[6]} has won`)
    }

    //column

    else if (
      tictoctoeArray[0] == tictoctoeArray[3] && tictoctoeArray[0] == tictoctoeArray[6] && tictoctoeArray[0] != ""
    ) {
      setWinner(`${tictoctoeArray[0]} has won`)
    }
    else if (
      tictoctoeArray[1] == tictoctoeArray[4] && tictoctoeArray[1] == tictoctoeArray[7] && tictoctoeArray[1] != ""
    ) {
      setWinner(`${tictoctoeArray[1]} has won`)
    }
    else if (
      tictoctoeArray[2] == tictoctoeArray[5] && tictoctoeArray[2] == tictoctoeArray[8] && tictoctoeArray[2] != ""
    ) {
      setWinner(`${tictoctoeArray[2]} has won`)
    }

    //diagonal
    else if (
      tictoctoeArray[0] == tictoctoeArray[4] && tictoctoeArray[0] == tictoctoeArray[8] && tictoctoeArray[0] != ""
    ) {
      setWinner(`${tictoctoeArray[0]} has won`)
    }
    else if (
      tictoctoeArray[2] == tictoctoeArray[4] && tictoctoeArray[2] == tictoctoeArray[6] && tictoctoeArray[2] != ""
    ) {
      setWinner(`${tictoctoeArray[2]} has won`)
    }

    //draw 
    else if (tictoctoeArray.indexOf("") == -1) {
      setWinner("Game Draw")
    }


  }


  //ChangeIcon == change icon turm

  function ChangeIcon(index) {

    if(winner != ""){
      return toast("Game Over")
    }
    if (tictoctoeArray[index] !="") {
     return toast ("Already Filled");
    }
    else if (tictoctoeArray[index] == "") {
      tictoctoeArray[index] = iscross? "Cross" : "Circle"
      setIscross(!iscross);
      findwinner();

    }
  }



  return (
    <div className='tik'>
        <ToastContainer position="top-left" theme="dark" autoClose={2000}/>

      <div><h1>Welcome to Tic-Toc-Toe Game</h1></div>
      <div className='grid'>
        {tictoctoeArray.map((value, index) => {
          return (<div onClick={() => ChangeIcon(index)} className='box'>
            <Icons user_icon={value} />
          </div>)
        })}
      </div>

      {winner == "" ?
        (<div className='turn'>
          <h1>Hey {iscross ? "cross" : "circle"} Your turn</h1>
        </div>) :
        
        (<div className='winner'>
          <h1>{winner}</h1>
          <button className='button' onClick={()=>playAgain()} type="button" class="btn btn-secondary">PlayAgain</button>
          <Confetti
      width={1500}
      height={500}
    />
        </div>)
      }

    </div>
  )
}

export default App