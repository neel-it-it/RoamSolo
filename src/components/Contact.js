import React from "react";
import Navbar from "./Navbar";
import contactt from "./assest/contactt.jpg";
import { FaAddressCard } from "react-icons/fa6";
import Footer from './Footer'
function Contact() {
  return (

    <>
    <div className="container align-items-center  w-75 py-5">
        <Navbar/>
      {/* <div className="form-control align-items-center p-5" style={{backgroundColor:"#FCFCEE",borderRadius:"10px"}}>
      <h4 style={{color:"#F85E9F", letterSpacing:"0.3rem"}}>CONTACT US</h4>
        <h2><strong>Prepare yourself and let's explore <br/>the beauty of the world</strong></h2>
        <div class="mb-3 align-items-center">
          
          <input
            type="email"
            class="form-control w-50 align-items-center mx-5" 
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3 align-items-center">
          
          <textarea
            class="form-control  w-50 align-items-center mx-5"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Enter your query"
          ></textarea>
         <br/> <button type="button" class="btn btn-secondary btn-lg w-50">Contact</button>
        </div>
      </div> */}
      <div class="contact3 py-3">
  <div class="row no-gutters">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="card-shadow">
            <img className="w-100 h-75" style={{borderRadius:"20px"}}  src={contactt} alt="" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="contact-box ml-3">
            <h3 class="font-weight-light" style={{letterSpacing:"0.3rem" , color:"#F85E9F"}}><strong>CONTACT</strong></h3>
            <h4>Prepare yourself and let's explore <br/>the beauty of the world</h4>
            <form class="mt-4">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="text" placeholder="name"/>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <input class="form-control" type="email" placeholder="email address"/>
                  </div>
                </div>
                
                <div class="col-lg-12">
                  <div class="form-group mt-2">
                    <textarea class="form-control" rows="3" placeholder="message"></textarea>
                  </div>
                </div>
                <div class="col-lg-12">
                  <button type="submit" class="btn bg-dark mt-3 text-white border-0 px-3 py-2 w-100"><span> SUBMIT</span></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        
        <div class="col-lg-12 mt-5">
          <div class="card mt-4 border-0 mb-4">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail pl-0">
                  
                  
                  <div class="">
                  
                  <FaAddressCard  />
                    <h6 class="font-weight-medium">Address</h6>
                    <p class="">601 sunpark Ave.
                      <br/> Gota </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                   
                  </div>
                  <div class="">
                  <FaAddressCard  />
                    <h6 class="font-weight-medium">Phone</h6>
                    <p class="">251 546 9442
                      <br/> 630 446 8851</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="card-body d-flex align-items-center c-detail">
                  <div class="mr-3 align-self-center">
                   
                  </div>
                  <div class="">
                  <FaAddressCard  />
                    <h6 class="font-weight-medium">Email</h6>
                    <p class="">
                      info@travel.com
                      <br/> 123@justroam.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</div>

      
    </div>
    <Footer/>
    </>
  );
}

export default Contact;
