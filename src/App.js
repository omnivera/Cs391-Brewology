
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

      <Navbar className="nav-color">
        <Container>
          <img
            src={require("./images/coffee-logo.png")}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="coffee logo"
          />
          <Navbar.Brand href="#home" style={{ color: '#f0ebe0' }}>Brewology</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" style={{ color: '#f0ebe0' }}>Home</Nav.Link>
            <Nav.Link href="#features" style={{ color: '#f0ebe0' }}>Menu</Nav.Link>
            <Nav.Link href="#pricing" style={{ color: '#f0ebe0' }}>Checkout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="Background">
        <p className="home-text">Some sample text about <br></br> how <b>AMAZING</b> our coffee is <br></br> goes here with some fancy font</p>
        <Button as={Col} variant='dark'>Buy Now!</Button>
      </div>
      <div class="footer">
        <footer>Footer</footer>
      </div>


      {/* <Navbar className="brewnavbar">
      <Container>
        <Navbar.Brand style={{ color: "white" }} href="#home">
          Brewology
        </Navbar.Brand>
      </Container>
    </Navbar>
    <br></br>

     <Row className="mx-0">
      <Button as={Col} variant="primary">Button #1</Button>
      <Button as={Col} variant="secondary" className="mx-2">Button #2</Button>
      <Button as={Col} variant="success">Button #3</Button>
    </Row>

    <Nav defaultActiveKey="/home" as="ul" className='brewnavbar'>
      <Nav.Item as="li">
        <Nav.Link href="/home" style={{ color: "white" }} className='navLinks'>Active</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" className='navLinks'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" className='navLinks'>Link</Nav.Link>
      </Nav.Item>
    </Nav> */}
    </div>
  );
}

export default App;
