import React from 'react'
import Button from 'react-bootstrap/Button';

const Footer = ({setBeginSort}) => {
  const handleClick = () =>{
    setBeginSort(true);
  }

  return (
    <section className='footer'>
        <div className='btn-div'>
            <Button style={{width:'10rem'}}  className='algos-drop' variant="success" onClick={handleClick}>Begin Sorting</Button>
        </div>
    </section>
  )
}

export default Footer