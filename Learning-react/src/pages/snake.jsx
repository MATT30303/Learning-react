import React from 'react'
import Gamestate from '../components/snake/gamestate.jsx'
import "../components/snake/snake.css"
import Footer from "../components/footer/footer.jsx"
import Home from "../components/Home/home.jsx"
export default function snake() {
  return (
    <div className='gameState-container'>
        <Gamestate></Gamestate>
        <Home></Home>
        <Footer></Footer>
    </div>
  )
}
