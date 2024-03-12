import React from 'react'
import tour from './assest/tour.jpg'
function Destination() {
  return (
    <div> <br />
    <h5 className="mt-5"style={{color:"#F85E9F" , fontWeight:"bold", fontSize:"24px" ,letterSpacing:"0.3rem"}}>Top Destination</h5>
    <h3 className=''style={{fontSize:"34px"}}>Explore Top Destination</h3><br/>
    
    <div class="row m-4 mt-5">
        <div class="col-sm-6 mb-3 mb-sm-0 col d-flex justify-content-center">
          <div class="card mb-3" style={{ width: "540px" }}>
            <div class="row g-1">
              <div class="col-md-4">
                <img src={tour} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col d-flex justify-content-center">
          <div class="card mb-3" style={{ width: "540px" }}>
            <div class="row g-1">
              <div class="col-md-4">
                <img src={tour} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col d-flex justify-content-center">
          <div class="card mb-3" style={{ width: "540px" }}>
            <div class="row g-1">
              <div class="col-md-4">
                <img src={tour} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8 ">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col d-flex justify-content-center">
          <div class="card mb-3" style={{ width: "540px" }}>
            <div class="row g-1">
              <div class="col-md-4">
                <img src={tour} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination