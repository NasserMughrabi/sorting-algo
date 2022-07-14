import React from 'react'
import styled from 'styled-components/macro';


const BarItem = styled.div`
  margin-left: 0.5rem;
  width: 10vw;
`;

const Bar = ({item}) => {
  const color = '#0073d8';
  return (
    <BarItem style={{height:`${item}vh`, background: `${color}`}} />
  )
}

export default Bar