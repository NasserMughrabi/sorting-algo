import React from 'react'
import styled from 'styled-components/macro'
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const Nav = styled.nav`
  background-color: #34495e;
  height: 10vh;
  display:flex;
  align-items: center;
`;

const NavBar = () => {
  return (
    <Nav>
      <h2 className='title'>Sorting Visualizer</h2>
    <Dropdown className='algos-drop'>
      <Dropdown.Toggle style={{width:'10rem'}} variant="success" id="dropdown-width">
        Sorting Algorithm
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className='algos-drop'>
      <Dropdown.Toggle style={{width:'10rem'}} variant="success" id="dropdown-width">
        Sorting Speed
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown className='algos-drop'>
      <Dropdown.Toggle style={{width:'10rem'}} variant="success" id="dropdown-width">
        Array Size
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Button style={{width:'10rem'}}  className='algos-drop' variant="success">Begin Sorting</Button>
    </Nav>
  );
}

export default NavBar