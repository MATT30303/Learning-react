
import Header from '../components/Header';
import Footer from '../components/footer';
import Card from '../components/Card';

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
