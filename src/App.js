
import './App.css';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">

<Navbar  className="brewnavbar">
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
    </div>
  );
}

export default App;
