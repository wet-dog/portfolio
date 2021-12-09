import './App.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import React, { useState, useEffect, Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import text from "./bobRossDescription.js";
// import text from "./glowRunnersDescription.js";
// import text from "./pirateShipDescription.js";

function Carousel(props) {
  const [index, setIndex] = useState(0);
  const [showFrontArrow, setShowFrontArrow] = useState(true);
  const [showBackArrow, setShowBackArrow] = useState(true);

  const videos = [
    <Video key="index"
      videoTitle="Bob Ross the Boss"
      fileName="./bobrosstheboss.mp4"
      link="https://wet-dog.github.io/BobRossTheBossWebGL/"
      linkText="Try it out here"
    >
    </Video>,
    <Video key="index"
      videoTitle="Glow Runners"
      fileName="./glowrunners.mp4" 
      link="https://briggsywxf.github.io/bathhack21/"
      linkText="Try it out here"
    >
    </Video>    
  ]

  useEffect(() => {
    if (index === 0)
      setShowBackArrow(false);
    else
      setShowBackArrow(true);

    if (index === videos.length - 1)
      setShowFrontArrow(false);
    else
      setShowFrontArrow(true);
  }, [index, videos.length]);

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems:"center", width: "100vw"}} className="carousel-container">
        <Button startIcon={<ArrowBackIcon fontSize="large" />} 
          style={showBackArrow ? {} : { visibility: 'hidden' }}
          sx={{ color: "white", fontSize: ".75em", height: "100%", width: "6em"}}
          size=""
          disableRipple="true"
          onClick={() => setIndex(Math.max(0, index - 1))}
          fullWidth="true"
          className="Button"
        >
          Prev
        </Button>

        <div style={{display: "flex", flexDirection: "column", width: "80vmin", marginTop: "2em", marginInline: ".5em"}}>
          <h1>{videos[index].props.videoTitle}</h1>
          {videos[index]}
        </div>

        <Button startIcon={<ArrowForwardIcon fontSize="large" />} 
          style={showFrontArrow ? {} : { visibility: 'hidden' }}
          sx={{ color: "white", fontSize: ".75em", height: "2em", width: "6em"}}
          size=""
          disableRipple="true"
          onClick={() => setIndex(Math.min(index + 1, videos.length - 1))}
          className="Button"
        >
          Next
        </Button>
      </div>
    </>
  );
}

function Video(props) {
  return (
    <>
      <video className='video-tag' src={props.fileName} controls></video>
      <a className="link" href={props.link} target="_blank" rel="noopener noreferrer">{props.link}</a>
      <p>{text}</p>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" bg="dark" className="navbar">
        <Container>
          <Navbar.Brand className="navbar-brand">James Johnson</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <header className="App-header">
        <Carousel></Carousel>
      </header>
    </div>
  );
}

export default App;