import React from "react";

const CardComponent = ({img, content, heading}) => {
    
    return (
        <>
        <div class="col-sm-6 mb-3 mb-sm-0 col d-flex justify-content-center">
          <div class="card mb-3" style={{ width: "540px" }}>
            <div class="row g-1">
              <div class="col-md-4">
                <img src={img} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{heading}</h5>
                  <p class="card-text">
                    {content}
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
        </>
    )
}

export default CardComponent;