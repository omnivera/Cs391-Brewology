
import '../App.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="Background">
        <p className="home-text">Create the best menu for your <br></br>coffee shop with our quick and easy <br></br> to use menu maker!</p>
        <Link to="/addproduct" ><Button className='home-button' as={Col} variant='dark' >Create Menu Now!</Button></Link>
      </div>
    </div>
  );
}

export default App;
