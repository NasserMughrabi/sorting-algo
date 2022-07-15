import React from 'react'

const Bar = ({item}) => {
  const color = '#7fbef5';
  return (
    <div className='full-bar'>
      <div style={{height:`${item}vh`, background: `${color}`, width: '100%'}} className='inner-bar'>
      </div>
    </div>
  )
}

export default Bar