
import Header from '../components/index/Header';
import Footer from '../components/footer/footer';
import Card from '../components/index/Card';
import '../components/index/index.css';

function index() {
return(
    <div>
        <>
        <Header></Header>
        <div className='container-cards'>
        <Card pic="tictactoe" name="tic tac toe" desc="fun 2 player game"></Card>
        <Card pic="snake" name="Snake" desc="Single player snake game"></Card>
        </div>
        <Footer></Footer>
        </>
    </div>
);
}

export default index
