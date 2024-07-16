import pic from './assets/tictactoe.png'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src={pic}/>
            <h2 className='card-tittle'>tic tac toe</h2>
            <span className='card-desc'>Simple Multiplayer game</span>
        </div>
    );
}
export default Card