import React from 'react'
import styled from 'styled-components/macro'
import Dropdown from 'react-bootstrap/Dropdown';
import {useRef}  from 'react'

const Nav = styled.nav`
  background-color: #34495e;
  height: 10vh;
  width: 100vw;
  display:flex;
  align-items: center;
`;

const NavBar = ({setArr, setAlgorithm, setSpeed, setBeginSort}) => {

  const algoEl = useRef(null);
  const speedEl = useRef(null);
  const sizeEl = useRef(null);
  const handleAlgoClick = (e) => {
    const algorithm = e.target.textContent;
    if(algorithm !== 'Choose Sorting Algorithm'){
      setAlgorithm(algorithm);
      setBeginSort(false);
    }
    algoEl.current.textContent = e.target.textContent;
  }
  const handleSpeedClick = (e) => {
    let speed = parseInt(e.target.textContent);
    if(speed){
      if(speed===3){
        speed=12;
      }
      setSpeed(speed);
      setBeginSort(false);
    }
    speedEl.current.textContent = e.target.textContent;
  }
  const handleSizeClick = (e) => {
    const size = parseInt(e.target.textContent);
    if(size){
      setArr(Array(size).fill(5).map(() => Math.round(Math.random() * (65 - 1 + 1) + 1)));
      setBeginSort(false);
    }
    sizeEl.current.textContent = e.target.textContent;
  }

  return (
    <section className='navbar'>
      <Nav>
        <h2 className='title'>Sorting Visualizer</h2>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle ref={algoEl} variant="success" id="dropdown-width">
          Choose Sorting Algorithm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleAlgoClick}>Choose Sorting Algorithm</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleAlgoClick}>Insertion Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleAlgoClick}>Selection Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleAlgoClick}>Merge Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleAlgoClick}>Quick Sort</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleAlgoClick}>Bubble Sort</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle ref={speedEl} variant="success" id="dropdown-width">
          Choose Sorting Speed
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleSpeedClick}>Choose Sorting Speed</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleSpeedClick}>1</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleSpeedClick}>2</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleSpeedClick}>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle ref={sizeEl} variant="success" id="dropdown-width" className='sizes'>
          Choose Array Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" onClick={handleSizeClick}>Choose Array Size</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleSizeClick}>5</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleSizeClick}>10</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleSizeClick}>25</Dropdown.Item>
          <Dropdown.Item href="#/action-1" onClick={handleSizeClick}>50</Dropdown.Item>
          <Dropdown.Item href="#/action-2" onClick={handleSizeClick}>75</Dropdown.Item>
          <Dropdown.Item href="#/action-3" onClick={handleSizeClick}>100</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Nav>
    </section>

  );
}

export default NavBar