import React from 'react'
import styled from 'styled-components/macro'
import Dropdown from 'react-bootstrap/Dropdown';

const Nav = styled.nav`
  background-color: #34495e;
  height: 10vh;
  width: 100vw;
  display:flex;
  align-items: center;
`;

const NavBar = () => {
  return (
    <section className='navbar'>
      <Nav>
        <h2 className='title'>Sorting Visualizer</h2>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle variant="success" id="dropdown-width">
          Choose Sorting Algorithm
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle variant="success" id="dropdown-width">
          Choose Sorting Speed
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className='algos-drop'>
        <Dropdown.Toggle variant="success" id="dropdown-width">
          Choose Array Size
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Nav>
    </section>

  );
}

export default NavBar