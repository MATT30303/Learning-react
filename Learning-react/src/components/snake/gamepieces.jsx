import React, { useEffect, useRef, useState } from 'react'

export default function gamepieces({score, setScore, gameOver}) {

    const canvasRef = useRef();
    const snake_Speed=10;
    const [apple, setApple] = useState({x: 180, y:100});
    const [snake, setSnake] = useState([{x:100, y:50},{x:95, y:50}]);
    const [direction,setDirection] = useState(null);
    const [moving, setMoving] = useState("");
    const [appleEaten, setAppleEaten] = useState(false);

    useEffect (()=>{
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        const drawSnake = () =>{
            snake.forEach((snakePark) =>{
                ctx.beginPath();
                ctx.rect(snakePark.x, snakePark.y, 14, 14);
                ctx.fillStyle = "#90EE90";
                ctx.fill();
                ctx.closePath();
            })
        }
        const drawApple = () =>{
            ctx.beginPath();
            ctx.rect(apple.x, apple.y, 14, 14);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();  
        }

        const moveSnake = () =>{
            if(direction){
                setSnake((prevSnake)=>{
                    const newSnake = [...prevSnake];
                    const snakeHead = {x: newSnake[0].x, y: newSnake[0].y};
                
                    for(let i = newSnake.length -1; i>0 ; i-- ){
                        newSnake[i].x = newSnake[i-1].x;
                        newSnake[i].y = newSnake[i-1].y;
                    }

                    switch(direction){
                        case "right":
                            if(moving !== "left"){
                            snakeHead.x += snake_Speed;
                            setMoving("right");
                            }else{
                                snakeHead.x -= snake_Speed;
                            }
                            break;
                        case "left":
                            if(moving !== "right"){
                            snakeHead.x -= snake_Speed;
                            setMoving("left");
                            }else{
                                snakeHead.x += snake_Speed;
                            }
                            break;
                        case "up":
                            if(moving !== "down"){
                            snakeHead.y -= snake_Speed;
                            setMoving("up");
                            }else{
                                snakeHead.y += snake_Speed;
                            }
                            break;
                        case "down":
                            if(moving !== "up"){
                            snakeHead.y += snake_Speed;
                            setMoving("down");
                            }else{
                                snakeHead.y -= snake_Speed;
                            }
                            break;
                        default:
                            break;
                    }

                    newSnake[0] = snakeHead;
                    handleAppleCollision(newSnake);
                    handleWallCollision(snakeHead);
                    handleBodyCollision(newSnake);
                    return newSnake;
                });
            }
        };
        
        const handleWallCollision=(snakeHead)=>{
            if(snakeHead.x + snake_Speed > canvas.width || snakeHead.x + snake_Speed < 0 ){
                gameOver("wall")
            } 
            if(snakeHead.y + snake_Speed > canvas.height || snakeHead.y + snake_Speed < 0){
                gameOver("wall");
            }
        }

        const handleBodyCollision = (newSnake)=>{
            const snakeHead = newSnake[0];
            for(let i = 1; i<newSnake.length; i++){
                if(snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y){
                    gameOver("self");
                }
            }
        }

        const handleAppleCollision = (newSnake)=>{

            const snakeHead = newSnake[0];

            if(snakeHead.x === apple.x && snakeHead.y === apple.y){
                setAppleEaten(true);
                
                setApple({
                    x: Math.floor((Math.random() * canvas.width) /snake_Speed) * snake_Speed,
                    y: Math.floor((Math.random() * canvas.height) /snake_Speed) * snake_Speed,
                })

                newSnake.push({
                    x: newSnake[newSnake.length -1].x,
                    y: newSnake[newSnake.length-1].y
                })
            }
        }


        const handleKey = (e) =>{
            switch(e.key){
                case "ArrowRight":
                    setDirection("right");
                    break;
                case "ArrowLeft":
                    setDirection("left");
                    break;
                case "ArrowUp":
                    setDirection("up");
                    break;
                case "ArrowDown":
                    setDirection("down");
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", handleKey);

        const interval = setInterval(()=>{
            ctx.clearRect(0,0,canvas.width, canvas.height);
            drawSnake();
            drawApple();
            moveSnake();
        },100)

        return()=>{
            clearInterval(interval);
        };

    },[snake,direction, apple]);

    useEffect(() => {
        if (appleEaten) {
            setScore((prevScore) => prevScore + 1);
            setAppleEaten(false);
        }
    }, [appleEaten, setScore]);



    return (
        <div>
            <canvas className='canvas' ref={canvasRef} width={750} height={420}/>
        </div>
    )
}
