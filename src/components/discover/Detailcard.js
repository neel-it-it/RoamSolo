import React, { useState } from "react";
import trav1 from "../assest/trav1.jpg";
import trav2 from "../assest/trav2.jpg";
import trav3 from "../assest/trav3.jpg";
import trav4 from "../assest/trav4.jpg";
import abtt from "../assest/abtt.jpg";
import Navbar from '../Navbar';
import Footer from '../Footer';
function Detailcard() {
        const value=14000
        const [price,setPrice]= useState(14000)
        const [ischecked,Setischecked]=useState(true)
        const finalprice=()=>{
          if(ischecked){
            setPrice(value-13000)
            Setischecked(false)
          }
          else{
            setPrice(value)
            Setischecked(true)
          }
        }
        return (
    <>
   <Navbar/>
    <div style={{display:"flex",alignItems:"center"}}></div>
      <div class="container overflow-hidden ">
        <div class="row gy-5">
          <div class="col-5 overflow-hidden">
            <div class="p-3   mt-3" >
            <img
                    
                    src={trav4}
                    alt="trav4"
                    style={{ height: "75vh", borderRadius:"10px" }}
                  />
            </div>
          </div>
          <div className="col-7 overflow-hidden">
            <div className="row">
              <div class="col-6 overflow-hidden">
                <div class="p-3  mt-3" >
                  <img
                  className="rounded"
                    src={trav2}
                    alt="trav2"
                    style={{ height: "35vh", width: "25vw" }}
                  />
                </div>
                <div class="p-3" >
                  <img
                    className="rounded"
                    src={trav3}
                    alt="trav3"
                    style={{ height: "35vh", width: "25vw" }}
                  />
                  <br />
                </div>
              </div>

              <div class="col-6 ">
                <div class="p-3   mt-3" >
                  <img
                    className="rounded"
                    src={trav1}
                    alt="trav1"
                    style={{ height: "35vh", width: "25vw" }}
                  />
                  <br />
                </div>

                <div class="p-3   " >
                  <img
                    className="rounded"
                    src={abtt}
                    alt="abtt"
                    style={{ height: "35vh", width: "25vw" }}
                  />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br/>
      <div className="row">
        <div className="col">
        <h1 className="p-5  mx-5" >Experience the tour of excitement with the <br/>most adventurous activities.</h1>
        <p className= "p-5 mx-3" style={{fontSize:"18px"}}> travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.Choose your destination based on your interests and preferences, whether it's a cultural experience, a natural adventure, historical exploration, or a beach vacation.

<br/><br/>Book suitable accommodation, which can range from hotels, resorts, hostels, vacation rentals, or even camping depending on your travel style and destination.Arrange transportation to and within your destination. This can include flights, trains, buses, rental cars, or even cruises.</p>
        </div>
        <div className="col">
            <div className="container rounded"style={{backgroundColor:"#FFFEE1" , height:"80vh" , width:"37vw"}}><br/>
                <h2>Book Your Tour</h2>
                <p style={{fontSize:"18px"}}>Reserve your ideal trip early for a hassle-free trip ,<br/> secure comfort and convenience!</p><br/>
                <hr />
                <div className="row">
                    <h5>Your Booking Date</h5>
                    <div className="col mt-4">
                        <h5>Check In</h5>
                        <h6 className=" ">12-2-21</h6><br/>
                        <div>
                            <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." onClick={finalprice}/> Solo
                        </div>
                    </div>
                    <div className="col mt-4">
                    <h5>Check Out</h5>
                    <h6 className="">12-2-21</h6> <br/>
                    <h6 className="value" >{value}</h6> 
                    
                    </div>
                   
                </div>
               
                {/* <h5 className="float-start mx-3">Your Booking Date</h5><br/><br/>
                <h5 className="float-start mx-3 mt-3">Check In </h5><br/><br/>
                <h6 className="float-start mx-3 mt-1 ">12-2-21</h6>

                <h5 className="float-end mx-3 mt-3">Check Out </h5><br/><br/>
                <h6 className="float-end mx-3 mt-1 ">12-2-21</h6><br/><br/> */}
                <hr />
                 <h5>Total Price :</h5> <h2 className="total_price" id="total_price">{price}</h2>
                <button  type="button" class="btn btn-success mt-4 " data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{width:"18vw" , height:"8vh"}}>Book Now</button><br/>


                <div class="modal fade my-5" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog my-5">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Select package
         </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h4 className="" style={{float:"left"}}>Join us from</h4><br/><br/>
        <h4 className="" style={{float:"left" ,width:"12vw", border:"1px solid red", borderRadius:"10px"}}>Ahmedabad</h4><br/><br/>
        <h5>Train</h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
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

export default Detailcard;
