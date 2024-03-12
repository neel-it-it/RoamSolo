import React from "react";
import { useNavigate } from "react-router-dom";


const Bookcard = ({ image, title, des, tripinfo, button }) => {
  const nav = useNavigate();
  const nextpage = () => {
    nav("/Detailcard");
  };
  return (
    <>
      {/* <div class="card mb-3" style={{maxWidth:"450px"}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img src={image} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{des}</p>
        <p class="card-text"><small class="text-body-secondary">{tripinfo}</small></p>
      </div>
    </div>
  </div>
</div> */}
      
      <div class="card g-0 mx-auto mb-4 p-3" style={{ maxWidth: "450px" }}>
        <img src={image} class="card-img-top w-100 " alt="..." />
        <div class="card-body">
          <h3 class="card-title">{title}</h3>
          <p class="card-text">{des}</p>
          <div class="containerr text-center">
            <div class="row align-items-end">
              <div class="col">
                <h6 class="text-body-secondary float-start ">{tripinfo}</h6>
              </div>
              <div class="col">
                <button  onClick={nextpage} type="button" class="btn btn-dark w-50 float-end gap-2">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Bookcard;
