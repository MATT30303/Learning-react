import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./pages/index"
import Tictactoe from "./pages/tictactoe"
function App() {
return(
    <div>
        <BrowserRouter>
            <Routes>
                <Route index path="index" element={<Index/>}/>
                <Route path="TicTacToe" element={<Tictactoe/>}/>
            </Routes>
        </BrowserRouter>
    </div>
);
}

export default App
