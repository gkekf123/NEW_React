import React, { useState } from 'react'
import './MyStyle.css';

const SecondApp = () => {

    const [message,setMessage]=useState('happy friday');

  return (
    <div className='main-box'>
        <h1 className=''>SecondApp</h1>

        <h3 style={{color: 'red'}}>{message}</h3>

        <hr />

        <h4>메세지를 입력 하시오</h4>
        
        <input type="text" value={message} onChange={(e => setMessage(e.target.value))}/>
    </div>



  )
}

export default SecondApp