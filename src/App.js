import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

function Video(props) {
  return (
    <>
      <div style={{display: "flex", flexDirection: "column"}}>
        <h1>{props.videoTitle}</h1>
        <video className='video-tag' controls>
          <source src={props.fileName} type='video/mp4' />
        </video>
      </div>
      <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>James Johnson</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <header className="App-header">
        <Video 
          videoTitle="Bob Ross the Boss"
          fileName="./bobrosstheboss.mp4" 
          link="https://wet-dog.github.io/BobRossTheBossWebGL/"
          linkText="Try it out here"
        >
        </Video>
        <Video 
          videoTitle="Glow Runners"
          fileName="./glowrunners.mp4" 
          link="https://briggsywxf.github.io/bathhack21/"
          linkText="Try it out here"
        >
        </Video>
      </header>
    </div>
  );
}

export default App;
