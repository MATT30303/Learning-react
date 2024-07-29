import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import tictactoeUrl from '../../assets/tictactoe.png'
import defaultUrl from '../../assets/default.png'
import snakeUrl from '../../assets/snake.jpg'

function Card(props){


        if (props.pic === "tictactoe") {
            return(             
                <div className="card">
                <Link to="/TicTacToe">
                <img className='card-img' src={tictactoeUrl}/>
                </Link>
                <h2 className='card-tittle'>{props.name}</h2>
                <span className='card-desc'>{props.desc}</span>
                </div>);
        }
        else if (props.pic === 'default'){ 
            return(
                <div className="card">
                <img className='card-img' src={defaultUrl}/>
                <h2 className='card-tittle'>{props.name}</h2>
                <span className='card-desc'>{props.desc}</span>
                </div>
            );
        }
        else if(props.pic === "snake"){
            return(
                <div className="card">
                <Link to="/Snake">
                <img className='card-img' src={snakeUrl}/>
                </Link>
                <h2 className='card-tittle'>{props.name}</h2>
                <span className='card-desc'>{props.desc}</span>
                </div>
            );    
        }
}
Card.PropTypes = {
    pic: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
}
Card.defaultProps = {
    pic: "default",
    name: "name",
    desc: "----",
}
export default Card