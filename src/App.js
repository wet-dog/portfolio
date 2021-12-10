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

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CircleIcon from '@mui/icons-material/Circle';

import text from "./bobRossDescription.js";
// import text from "./glowRunnersDescription.js";
// import text from "./pirateShipDescription.js";

function Carousel(props) {
  const [index, setIndex] = useState(0);
  const [showFrontArrow, setShowFrontArrow] = useState(true);
  const [showBackArrow, setShowBackArrow] = useState(true);
  
  const [view, setView] = React.useState('list');
  
  const videos = [
    <Video key="index"
      videoTitle="OpenGL Tech Demo"
      fileName="./temppirateship.mp4" 
      link="https://github.com/wet-dog/PirateShip"
      linkText="Try it out here"
    >
    </Video>,
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

  const handleChange = (event, nextView) => {
    setView(nextView);
    setIndex(nextView);
  };

  useEffect(() => {
    if (index === 0)
      setShowBackArrow(false);
    else
      setShowBackArrow(true);

    if (index === videos.length - 1)
      setShowFrontArrow(false);
    else
      setShowFrontArrow(true);

    setView(index);
  }, [view, index, videos.length]);

  return (
    <>
      <h1>{videos[index].props.videoTitle}</h1>
      
      <div style={{display: "flex", flexDirection: "row", width: "100vmin"}}>
        <IconButton
          className="IconButton"
          style={showBackArrow ? {} : { visibility: 'hidden' }}
          sx={{ color: "white", marginInline: ".5em"}}
          size=""
          disableRipple="true"
          onClick={() => setIndex(Math.max(0, index - 1))}
        >
          <ArrowBackIcon sx={{fontSize: "2em"}}/>
        </IconButton>

        <div style={{display: "flex", flexDirection: "column"}}>
          {videos[index]}
        </div>

        <IconButton
          className="IconButton"
          style={showFrontArrow ? {} : { visibility: 'hidden' }}
          sx={{ color: "white", marginInline: ".5em"}}
          size=""
          disableRipple="true"
          onClick={() => setIndex(Math.min(index + 1, videos.length - 1))}
        >
          <ArrowForwardIcon sx={{fontSize: "2em"}}/>
        </IconButton>
      </div>

      <ToggleButtonGroup
        sx={{
          '& .MuiToggleButtonGroup-grouped': {
            border: 0,
            marginInline: "1em",
            marginTop: "1em",
            color: "grey",
            '&.Mui-disabled': {
              border: 0,
            },
            '&:not(:first-of-type)': {
              borderRadius: "5em",
            },
            '&:first-of-type': {
              borderRadius: "5em",
            },
            '&.Mui-selected': {
              border: 0,
              color: "white",
            },            
          },
        }}
        value={view}
        exclusive
        onChange={handleChange}
      >
      {videos.map((_, i) => 
        <ToggleButton value={i}>
          <CircleIcon />
        </ToggleButton>
      )}
      </ToggleButtonGroup>

      <a className="link" href={videos[index].props.link} target="_blank" rel="noopener noreferrer">{videos[index].props.link}</a>
      <p>{text}</p>
    </>
  );
}

function Video(props) {
  return (
    <>
      <video className='video-tag' src={props.fileName} controls></video>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar variant="dark" bg="dark" className="navbar">
        <Container>
          <Navbar.Brand classname="navbar-brand">James Johnson</Navbar.Brand>
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
