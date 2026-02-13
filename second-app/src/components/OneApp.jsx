import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import AndroidIcon from '@mui/icons-material/Android';
import './MyStyle.css';

const OneApp = () => {

  const [number, setNumber] = useState(0);

  const numberIncre = () => {
    if(number === 10) {
      alert('10 까지만 증가 가능');
      return
    }
    setNumber(number + 1);
  }

  const numberDecre = () => {
    if(number === 0) {
      alert('0 까지만 감소 가능');
      return
    }
    setNumber(number - 1);
  }

  return (
    <div> 
        <Alert severity="success" >OneApp 입니다</Alert>
        <AndroidIcon color='error'></AndroidIcon>

        <div className='number'>{number}</div>
        <button type='button' onClick={numberIncre}>증가</button>
        <button type='button' style={{marginLeft:'20px'}} onClick={numberDecre}>감소</button>
    </div>
  )
}

export default OneApp