import React from 'react'
import styled from 'styled-components/macro';



const BarItem = styled.div`
  width: 3vw;
`;

const Bar = ({item}) => {
  const color = '#7fbef5';
  // const color = '#0073d8';
  // 5E9ED6
  return (
    <div className='full-bar'>
      <BarItem style={{height:`${item}vh`, background: `${color}`}} />
    </div>
  )
}

export default Bar