import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import circle_icon from "../../assets/circle.png"
import cross_icon from "../../assets/cross.png"
import './tictac.css'

let data = ["","","","","","","","",""]



export const tictac = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let playerRef = useRef(null);
    let box0 = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box_array = [box0,box1,box2,box3,box4,box5,box6,box7,box8]

    const toggle = (e,num) =>{
        if(lock){
            return 0;
        }
        if(count%2 === 0){
            e.target.innerHTML= `<img class="cross" src='${cross_icon}'>`;
            data[num]="x";
            setCount(++count);
            playerRef.current.innerHTML = `O's turn`;
        }
        else{
            e.target.innerHTML= `<img class="circle" src='${circle_icon}'>`;
            data[num]="o";
            setCount(++count);
            playerRef.current.innerHTML = `X's turn`;
        }
        checkWin();
    }

    const checkWin = () =>{
        if(data[0] === data[1] && data[1]===data[2] && data[2]!== ""){won(data[2]);}
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){won(data[5]);}
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){won(data[8]);}

        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){won(data[6]);}
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){won(data[7]);}
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){won(data[8]);}

        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){won(data[8]);}
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){won(data[6]);}
        console.log(count);
        if(count===9){
            playerRef.current.innerHTML = `It's a draw!`;
        }
    }

    const won = (winner) =>{
        setLock(true);
        if(winner === "x"){
            playerRef.current.innerHTML = `Congratulations: <img class="xWin" src=${cross_icon}> wins the game!!`;
        }
        else{
            playerRef.current.innerHTML = `Congratulations: <img class="xWin" src=${circle_icon}> wins the game!!`;
        }
    }
    const reset = ()=>{
        setLock(false);
        data = ["","","","","","","","",""];
        playerRef.current.innerHTML = `X's turn`;
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

  return (
    <div className='container'>
        <h1 className='title' ref={titleRef}>Tic Tac Toe</h1>
        <span className='player' ref={playerRef}>X's turn</span>
        <Link to="/index">
        <span className='button' id='home'>Home</span>
        </Link>

        <div className="board">
            <div className="row1">
                <div className="boxes" ref={box0} onClick={(e)=>{toggle(e,0)}} ></div>
                <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,1)}} ></div>
                <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,2)}} ></div>
            </div>
            <div className="row2">
                <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,3)}} ></div>
                <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,4)}} ></div>
                <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,5)}} ></div>
            </div>
            <div className="row3">
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,6)}} ></div>
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,7)}} ></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,8)}} ></div>
                </div>
        </div>
        <button className="button" onClick={()=>reset()} >Reset</button>
    </div>
  )
}
export default tictac