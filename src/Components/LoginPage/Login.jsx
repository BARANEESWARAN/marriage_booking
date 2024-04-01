import React, { useEffect, useState } from 'react'
import "./Login.css"
import {SignInButton} from "./signin"
import { Button, Checkbox, Input } from 'antd';
import Header, { UserHeader } from '../Header/Header';






  function Login() {
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const interval = setInterval(() => {
          document.getElementById(`radio${counter}`).checked=true;
          setCounter((prevCounter) => (prevCounter % 4) + 1);
        }, 3000);
    
        return () => clearInterval(interval);
      }, [counter]);
    




       
  
   return (
    <>
   <UserHeader/>
    <div className="sliders">
    <div className="sliders__left">
      <div className="slides">
        <input type="radio" id="radio1" name="radio" onChange={() => setCounter(1)} />
        <input type="radio" id="radio2" name="radio" onChange={() => setCounter(2)} />
        <input type="radio" id="radio3" name="radio" onChange={() => setCounter(3)} />
        <input type="radio" id="radio4" name="radio" onChange={() => setCounter(4)} />
  
        <div className="slide first">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/06/06/27/background-3202671_640.jpg"
            alt="slide_img"
          />
        </div>
        <div className="slide second">
          <img
            src="https://cdn.pixabay.com/photo/2017/01/04/04/01/wedding-1951298_640.jpg"
            alt="slide_img"
          />
        </div>
        <div className="slide third">
          <img
            src="https://cdn.pixabay.com/photo/2020/10/05/13/26/wedding-cake-5629396_640.jpg"
            alt="slide_img"
          />
        </div>
        <div className="slide forth">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/02/09/35/ai-generated-8608195_640.jpg"
            alt="slide_img"
          />
        </div>
  
        <div className="slides__auto">
          <div className="auto1" onClick={() => setCounter(1)} ></div>
          <div className="auto2" onClick={() => setCounter(2)} ></div>
          <div className="auto3" onClick={() => setCounter(3)} ></div>
          <div className="auto4" onClick={() => setCounter(4)} ></div>
        </div>
      </div>
      <div className="manuals">
        <label htmlFor="radio1" className="manual"></label>
        <label htmlFor="radio2" className="manual"></label>
        <label htmlFor="radio3" className="manual"></label>
        <label htmlFor="radio4" className="manual"></label>
      </div>
    </div>
    <div className='login'>
    <div className="limiter">
       
    <div className='login_topimg'></div>
    <div className="login-container">
      <form className="login-form">
      <h2 className="login-header">Log in</h2>
        
          <Input className='input-field' type="email" placeholder="Email" />
       
      
          <Input.Password className='input-field' type="password" placeholder="Password" />
       
          <div className='forgot-password'>
     <div className='remember'>

    
     <Checkbox > <div className='remember-me'>Remember me</div></Checkbox>
     </div>

   <a  href="" className='forgot'>
     Forgot password
   </a>
</div>
        <div className='login-btns '>
          <button className='submit-btn' >Login</button>
          
          <SignInButton />
          </div>
          <div className="login-signup">
            Don't have an account?{' '}
            <span className="login-signup-bold">Register</span>
          </div>
      </form>
      </div>

    </div>
    </div>
  </div>
  </>
  

  



    )
}

export default Login




