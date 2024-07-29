import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/index"
import Tictactoe from "./pages/tictactoe"
import Snake from "./pages/snake";
function App() {
return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route index element={<Index></Index>}/>
                <Route path="TicTacToe" element={<Tictactoe/>}/>
                <Route path="Snake" element={<Snake></Snake>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App
