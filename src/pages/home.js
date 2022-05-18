
import '../App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">



      <div className="Background">
        <p className="home-text">Some sample text about <br></br> how <b>AMAZING</b> our coffee is <br></br> goes here with some fancy font</p>
        <Button as={Col} variant='dark'>Buy Now!</Button>
      </div>
  


      
    </div>
  );
}

export default App;
