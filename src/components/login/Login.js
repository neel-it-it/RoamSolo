import React, { useState } from "react";
 //import backlogin from "./backlogin.jpeg";
// import destination from "./destination.gif";
import  "./LoginPage.css";
import Inputcontrol from "../Inputcontrol";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import tranform from '../assest/tranform.png'
import logo from '../assest/logo.png'



function Login() {
  const navigate = useNavigate()
  const [userState, setUserState] = useState({
    'username':''
  });

  const handleInputChange = (e) => {
    setUserState({
      ...userState,
      [e.target.name]:e.target.value
    })
  }
//  const Navigatetonextpage=()=>{
//    if(){

//    }
//  }
const cirular = () =>{
  <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
}
 
 return (
      // <div className={styles.container}>
      //   <div className={styles.innerbox}>
      //     <h1 className={styles.heading}>Login</h1>
          
      //     <Inputcontrol label="Email" placeholder="Enter mail Here" required/>
      //     <Inputcontrol label="Password"  type="password"placeholder="Enter Password Here" required/>

      //     <div className={styles.footer}>
      //       <button >Login</button>
      //       <p>Don't Have an account <span><Link to="/Signup">Sign Up</Link></span></p>
      //     </div>
      //   </div>
      // </div>
      <>
      <div className="container-fluid">

        <div className="forms-container">
            <div className="signin-signup mx-5">
              <form action="" className="sign-in-form mb-5 mx-5 " style={{height:"90vh"}}>
                <img src={logo} alt="" width={150} />
                <h2 className="title">Sign in</h2>
                
                
                <div class="input-group flex-nowrap w-75 m-4">
  <span class="input-group-text" id="addon-wrapping"><FaUserShield id="i"/></span>
  <input type="text" class="form-control" name="username" onChange={handleInputChange} placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
               
                
               
                <div class="input-group flex-nowrap w-75">
  <span class="input-group-text" id="addon-wrapping"> <BsFillShieldLockFill id="i" /></span>
  <input type="password" class="form-control" placeholder="Enter Password" aria-label="password" aria-describedby="addon-wrapping"/>
</div>
                
<button className="btnn solid" onChange={cirular} onClick={()=>{navigate("/home",{state: {data: userState.username}})}} >Login</button>
                <p>Don't Have an account <span><Link style={{textDecoration:"none"}} to="/Signup">Sign Up</Link></span></p>
                <p className="social-text">Or sign in with social platform</p>
                <div className="social-media">
                  <a href="" className="social-icon">
                  <FaGoogle/>
                  </a>
                </div>
              </form>
            </div>
        </div>
       
      </div>
      
      
      </>
  
   
     
  );
}

export default Login;
