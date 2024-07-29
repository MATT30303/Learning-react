import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import Gamepieces from './gamepieces.jsx'

export const Gamestate = () => {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(parseInt(localStorage.getItem('highScore')) || 0);
    const [gameOver, setGameover] = useState(false);
    const [collision, setColissionType] = useState("");

    const handleGameOver = (type) =>{
        setGameover(true);

        if(score > highScore){
            setHighScore(score)
            localStorage.setItem("highScore", score.toString());
        }
        setColissionType(type)
    }

    const handleResetGame = () =>{
        setScore(0);
        setGameover(false);
    }
    useEffect(() =>{
        const handleKeyPress = (e)=>{
            if(gameOver && e.key === "Enter"){
                handleResetGame()
            }
        }
        window.addEventListener("keydown", handleKeyPress);
    },[gameOver]);

  return (
    <div>
        <span className='snake-tittle'>SNAKE GAME</span>
        <div className='text-container'>
        <span className='score'>Score: {score}</span>
        <span className='highScore'>HighScore: {highScore}</span>
        </div>
        {
            gameOver && (
                <div className='gameOver-container'>
                    <p className='gameOverText'>Game over {collision === "wall" ? "you hit a wall" : "you ate ur self"}</p>
                    <p className='resetText'>Please press <span className='enter-text'>enter</span> to reset the game</p>
                </div>
            )
        }{
            !gameOver && (
                <Gamepieces
                score={score}
                setScore={setScore}
                gameOver={(type)=> handleGameOver(type)}/>
            )
        }
        
    </div>
  )
}
export default Gamestate
