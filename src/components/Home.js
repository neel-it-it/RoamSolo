import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Home.module.css";
import travel from "./assest/travel.png";
import travelto from "./assest/travelto.png";
import destination from "./assest/destination.png";
import layer from "./layer.svg";

import Services from "./Services";
import Destination from "./Destination";
import Keyfeatures from "./Keyfeatures";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// import {typed} from "./Font.js"
function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  return (
    <div>

      <Navbar username={location?.state?.data}/>
      
      {/* <nav class="navbar bg-body-tertiary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center m-2 "  id="navbarNavAltMarkup">
      <div class="navbar-nav ">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Discover</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link" aria-disabled="true">Disabled</a>
        <a class="nav-link" href="Login">Login</a>
        <a class="nav-link" href="SignUp">SignUp</a>
      </div>
    </div>
    
  </div>
</nav> */}

     
      <div class="container">
        <div class="row">
          <div class="col mt-5 float-start mx-auto ">
            {/* <input class="form-control w-25 m-5"style={{borderRadius:"20px" , padding:"10px", textAlign:"center"}} type="button"  aria-label="Disabled input example" disabled/> */}
            <button
              className="btn form-control w-25 m-5"
              disabled
              style={{
                color: "#F85E9F",
                borderRadius: "20px",
                padding: "10px",
             
                textAlign: "center",
              }}
            >
              {/* {typed} */}
              Explore
            </button>
            <h1>
              Travel <strong style={{ color: "#F85E9F"}}>Top</strong>
            </h1>
            <h1>
              <strong style={{ color: "#F85E9F" }}>Destination</strong> of india
            </h1>
            <br />
            <h6 className="text-muted">
              We always make our customer happy by providing
            </h6>
            <h6 className="text-muted">as many choices as possible </h6>
            <br />
            <button type="button"  onClick={()=>navigate("/login")} class="btn btn-dark w-25 rounded" >
              Get Started
            </button>
          </div>

          <div class="col align-self-end">
            <div class="container text-center">
              <div class="row align-items-end">
                <div class="col">
                  <img
                    className="img-fluid w-75 m-5"
                    src={destination}
                    alt="destination"
                  />
                  <img
                    className="img-fluid w-75 m-4"
                    src={travelto}
                    alt="travelto"
                  />
                </div>
                <div class="col">
                  <img
                    className="img-fluid w-100 m-4"
                    src={layer}
                    alt="layer"
                  />
                  <img
                    className="img-fluid w-75 m-5"
                    src={travel}
                    alt="travel"
                  />
                </div>
              </div>
            </div>
            {/* <img className="img-fluid w-50 m-4 float-start" src={destination} alt="destination" />
          <img className="img-fluid w-50 m-4 float-end" src={travel} alt="travel" />
          <img className="img-fluid w-50 m-4 float-start" src={travelto} alt="travelto" /> */}
          </div>
        </div>
      </div>

      {/* <h2>{props.name ? `Welcome - ${props.name}`: ""}</h2> */}
          <div className="mt-5">
          <br/> <Services/>
          
          </div>

          <Destination/>
          <Keyfeatures/><br/>
          
          <Footer/>
    </div>
  );
}

  

export default Home;
