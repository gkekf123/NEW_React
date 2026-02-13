import React, { useState } from 'react'
import './MyStyle.css';

function FourthApp() {

    const [name, setName] = useState('홍길동');
    const [java, setJava] = useState(0);
    const [spring, setSpring] = useState(0);
    const [total, setTotal] = useState(0);
    const [avg, setAvg] = useState(0);

    // 버튼을 누르면 실행될 함수 만들기
    const onResult = () => {

        // 현재 입력된 점수를 숫자로 변환
        let j = Number(java);
        let s = Number(spring);
        let sum = j + s;
        let average = sum / 2;

        setTotal(sum);
        setAvg(average);
    }

  return (
    <div className='main-box'>
        <h1 className='line'>FourthApp</h1>
        <div className='inp'>
            이름 : <input type="text" value={name} className='form-control' style={{width:'100px'}} 
                    onChange={(e) => setName(e.target.value)}/>
            <span style={{marginLeft:'10px', fontWeight:'bold'}}>{name}</span>
            <br/><br/>

            자바점수 : <input type="text" value={java} className='form-control' style={{width:'100px'}} 
                        onChange={(e) => setJava(e.target.value)}/>
            
            스프링점수 : <input type="text" value={spring} className='form-control' style={{width:'100px'}} 
                        onChange={(e) => setSpring(e.target.value)}/>
            
            <button className='btn btn-danger' style={{marginLeft:'10px'}} onClick={onResult}>
                결과확인
            </button>

            <br/><br/>

            총합 : <input type="text" value={total} className='form-control' style={{width:'100px'}} readOnly />
            평균 : <input type="text" value={avg} className='form-control' style={{width:'100px'}} readOnly />
        </div>
    </div>
  )
}

export default FourthApp