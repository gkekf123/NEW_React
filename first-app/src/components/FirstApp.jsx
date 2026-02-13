import React from 'react'
import './MyStyle.css';
import img1 from '../image/Food/1.jpg';
import img2 from '../image/Food/10.jpg';

const FirstApp = () => {

    const styleImg1 = {
        width: '200px',
        border: '5px solid red',
        marginTop: '20px'
    }
    const styleImg2 = {
        width: '400px',
        height: '400px',
        border: '5px solid blue',
        marginTop: '50px'
    }

    let hello = <h4>hihihihihihi</h4>

  return (
    // 전체를 감싸는 div에 클래스 이름 부여
    <div className='main-box'> 
        <h1 className='line'>FirstApp</h1>
        
        <div style={{fontSize:'20px', color:'green'}}>Hello React</div>
        
        <img src={img1} alt="" style={styleImg1}/>
        <br/>
        <img src={img2} alt="" style={styleImg2}/>
        <br/>
        
        {/* public 폴더 이미지 */}
        <img src="/ironman.png" alt="아이언맨" width="200" />

        {/* let은 반복 가능 */}
        {hello}
        {hello}



    </div>
  )
}

export default FirstApp