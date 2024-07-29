import React from 'react'
import Tictac from "../components/tictactoe/tictac.jsx"
import Footer from "../components/footer/footer.jsx"
import Home from "../components/Home/home.jsx"
export const tictactoe = () => {
  return (
    <div>
        <Tictac></Tictac>
        <Home></Home>
        <Footer></Footer>
    </div>
  )
}
export default tictactoe