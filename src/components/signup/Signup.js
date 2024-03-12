import React from "react";
import  "../login/LoginPage.css";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { Link ,useNavigate } from "react-router-dom";
import { MdOutgoingMail } from "react-icons/md";
import logo from '../assest/logo.png'

function Signup() {
  const navigate = useNavigate()
  return (
    
    // <div className={styles.container}>
    //   <div className={styles.innerbox}>
    //     <h1 className={styles.heading}>Signup</h1>

    //     <Inputcontrol label="Name" placeholder="Enter Name Here" />
    //     <div className="row g-2">
    //       <div className="col-md">
    //         <div className="form-floating">
    //           <Inputcontrol
    //             label="Email"
    //             type="text"
               
    //             placeholder="Enter Mail Here"
    //           />
    //         </div>
    //       </div>
    //       <div className="col-md">
    //         <div className="form-floating">
    //           <Inputcontrol
    //             label="Password"
    //             type="password"
    //             placeholder="Enter Password Here"
    //           />
    //         </div>
    //       </div>
    //     </div>

    //     <Inputcontrol
    //       label="Mobile No"
    //       type="number"
    //       placeholder="Enter Mobile Number  Here"
    //     />

    //     <div className={styles.footer}>
    //       <button>Register</button>
    //       <p>
    //         Already Have an account{" "}
    //         <span>
    //           <Link to="/Login">Login</Link>
    //         </span>
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
       <div className="container-fluid">
        <div className="forms-container">
            <div className="signin-signup mx-5 ">
              <form action="" className="sign-in-form mx-5 mb-5">
                <img src={logo} width={150} alt="" />
                <h2 className="title">Sign in</h2>
                
                
                <div class="input-group flex-nowrap w-75 m-4">
  <span class="input-group-text" id="addon-wrapping"><FaUserShield id="i"/></span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"/>
</div>
               
                
               
                <div class="input-group flex-nowrap w-75">
  <span class="input-group-text" id="addon-wrapping"> <MdOutgoingMail  id="i" /></span>
  <input type="mail" class="form-control" placeholder="Enter mail here" aria-label="mail" aria-describedby="addon-wrapping"/>
</div>

<div class="input-group flex-nowrap w-75 mt-4">
  <span class="input-group-text" id="addon-wrapping"> <BsFillShieldLockFill id="i" /></span>
  <input type="password" class="form-control" placeholder="Enter Password" aria-label="password" aria-describedby="addon-wrapping"/>
</div>
                
<button className="btnn solid" onClick={()=>{navigate("/Login")}}>Sign Up</button>
                <p>Already Have an account <span><Link style={{textDecoration:"none"}} to="/Login">Login</Link></span></p>
                
                
              </form>
            </div>
        </div>
       
      </div>
    </>
  );
}

export default Signup;
