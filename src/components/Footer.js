import React from 'react'

function Footer() {
  return (
    <>
   
        {/* <br/><nav class="navbar navbar-expand-lg" style={{height:"30vh", backgroundColor:"black"}}> 
  <div class="container-fluid">
    <a class="navbar-brand text-white" href="#">Neel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0  justify-content-end">
        <li class="nav-item">
          <a class="nav-link active" style={{color:"white"}} aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} href="#">About</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" style={{color:"white"}} aria-disabled="true">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav> */}

{/* <div class="container w-auto">
  <footer class="d-flex align-items-center py-3 my-4 bg-black w-100">
    <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
     
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
    </ul>
  </footer>
</div> */}
 <footer className=' containerr bg-black text-white pt-4 pb-2 ' style={{width:"99vw"}}>
    <div className="containerr text-center text-md-left">
      <div className="row text-center text-md-left">
        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <h5 className='text-uppercase mb-4 font-weight-bold'style={{color:"#F85E9F"}}>Roamsolo</h5>
          <h4>Want To Take <br/>Tour Packages</h4> 

        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className=' mb-4 font-weight-bold text-warning'>Quick Links</h5>
          <p>
            <a href="#" className='text-white' style={{textDecoration:"none"}}>Home</a>
          </p>
          <p>
            <a href="#" className='text-white' style={{textDecoration:"none"}}>Discover</a>
          </p>
          <p>
            <a href="#" className='text-white' style={{textDecoration:"none"}}>about</a>
          </p>
          <p>
            <a href="#" className='text-white' style={{textDecoration:"none"}}>Contact</a>
          </p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 mx-auto mt-3">
          <h5 className='  font-weight-bold text-warning'>More Inquiry</h5>
          <h5 className=' mb-4 font-weight-bold text-warning'>+91 854649749</h5>
          <h5 className='  font-weight-bold text-warning'>Send Mail</h5>
          <h5 className='   text-warning'>nick123@gmail.com</h5>
          <h5 className=' mt-4 font-weight-bold '>Address</h5>
          <h5 className=' text-fluid'>House 140/502,Avenue,road</h5>

          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <h5 className=' mb-4 font-weight-bold '>We Are Here</h5>
          <h5 className=' mb-4 font-weight-bold text-warning'>More Inquiry</h5>

          </div>
      </div>
     
     <hr className='mt-4  '/>
     <div className="row text-center text-md-left">
     <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <p style={{fontSize:"15px"}}>Copyright @2024 All rights reserved by :
            <strong> Neel patel</strong>
          </p>
        </div>
     
     
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
          <p style={{fontSize:"15px"}}>Copyright @2024 
            <strong>Neel patel</strong>
          </p>
        </div>
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
         <p style={{fontSize:"15px"}}>Privacy Policy .  Terms & Conditon</p>
        </div>
        
      </div>
      </div>

 </footer>

 </>
  )
}

export default Footer