import React, { useState } from 'react'
import './MyStyle.css';

const SecondApp = () => {

    // onChange
    const [message,setMessage]=useState('happy friday');

    // enter
    const enterEvent = (e) => {
        if(e.key === 'Enter') {
            setMessage(''); // 엔터치면 공백 처리
        }
    }

  return (
    <div className='main-box'>
        <h1 className='line'>SecondApp</h1>

        <h3 style={{color: 'red'}}>{message}</h3>

        <hr />

        <h4>메세지를 입력 하시오</h4>

        <input type="text" value={message} onChange={(e => setMessage(e.target.value))} onKeyUp={(enterEvent)}/>
    </div>



  )
}

export default SecondApp