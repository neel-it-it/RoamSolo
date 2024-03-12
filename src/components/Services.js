import React from "react";

import tour from "./assest/tour.jpg";
import CardComponent from '../components/Card'

function Services() {

  const arr = [
    {
      img: tour,
      content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      heading: "Heading"
    },
    {
      img: tour,
      content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      heading: "Heading"
    },
    {
      img: tour,
      content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      heading: "Heading"
    },
    {
      img: tour,
      content: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      heading: "Heading"
    }
  ]

  // const img = tour;
  // const content = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  // const heading = "Heading"
  // const myImg = props.myImg;
  // const myTitle = myImg.map((myTitle)=>
  //     <img src={props.myImg} alt=""/>
  // );
  return (
    <div>
      
      <h4 className="mt-5" style={{color:"#F85E9F" , fontWeight:"bold", fontSize:"24px" ,letterSpacing:"0.3rem"}}>Services</h4>
      <h3 style={{fontSize:"34px"}}>Our Top Value Categories for you</h3>

      <div class="row m-4 mt-5">

        {
          arr.map(item => {
            return (
              <CardComponent img={item.img} content={item.content} heading={item.heading}/>
            )
          })
        }

     

      </div>
    </div>
  );
}

export default Services;
