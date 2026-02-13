import React, { useState } from 'react'

const ThirdApp = () => {

    const [name, setName] = useState('홍길동');
    const [age, setAge] = useState(30);

  return (
    <div className='main-box'>
        <h1 className='line'>ThirdApp</h1>
        <b>
            이름 : {name}
            <br />
            나이 : {age}
        </b>

        <br />

        <button type='button' onClick={() => {
                setName('박지성');
                setAge(40);
            }}>이름,나이 변경 버튼
        </button>

        <br />

        <button type='button' onClick={() => {
                setName('');
                setAge(0);
            }}>초기화
        </button>
    </div>
  )
}

export default ThirdApp
