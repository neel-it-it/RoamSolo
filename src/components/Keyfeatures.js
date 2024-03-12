import React from "react";

import feature from './assest/feature.png'
import backgroundtrek from "./assest/backgroundtrek.png";
import layercurve from "./assest/layercurve.png";
function Keyfeatures() {
  return (
    <div>
      <div class="containerr overflow-hidden text-center">
        <div class="row gx-5">
          <div class="col">
            <div class="p-3">
              <img
                className="float-left"
                src={backgroundtrek}
                width={"450vw"}
                alt=""
              />
            </div>
          </div>
          <div class="col mt-5">
            <div class="p-3 mt-4">
              <br />
              <strong >
                <h4 style={{fontSize:"24px" , color:"#F85E9F",fontWeight:"bold" , letterSpacing:"0.3rem"}}>TRAVEL POINT</h4>
              </strong>
            </div>
            <h2 style={{fontWeight:"bold" , fontSize:"26px"}}>
              We helping you find <br />
              your dream location
            </h2>
            <br />
            <h5 style={{ color: "#999999" }}>
              “It is not the destination where you end up <br />
              but the mishaps and memories you create along the way.”
            </h5>
          </div>
        </div>
      </div><br/>

     <div class="containerr overflow-hidden text-center">
  <div class="row gx-5 mt-1">
    <div class="col ">
     <div class="p-3"><img src={layercurve} width={"450vw"} alt="" /><h4 style={{fontSize:"24px" , color:"#F85E9F",fontWeight:"bold" , letterSpacing:"0.3rem"}}>FOR THE TIMES</h4></div>
     <h2 style={{fontWeight:"bold" , fontSize:"26px"}}> when your wanderlust calls, </h2><br/>
     <h5 style={{ color: "#999999" }}>
     Twenty years from now you will be more disappointed<br/> by the things you didn’t do than by the ones you did do.<br/> So throw off the bowlines. Sail away from the safe harbor. <br/>Catch the trade winds in your sails. Explore. Dream. Discover
            </h5>
    </div>
    <div class="col">
      <div class="p-3 float-end"><img src={feature} width={"450vw"} alt="" /></div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Keyfeatures;
