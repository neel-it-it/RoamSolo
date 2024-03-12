import React from 'react'
import Bookcard from './Bookcard'
import tour from '../assest/tour.jpg';
import trav1 from '../assest/trav1.jpg'
import trav2 from '../assest/trav2.jpg'
import trav3 from '../assest/trav3.jpg'
import trav4 from '../assest/trav4.jpg'
import Footer from '../Footer';
import Navbar from '../Navbar';
function Discover() {
  
    const arr = [
        {

          image: trav4,
          des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
          title: "A journey of tour Beauty and inspiration",
          tripinfo:"6 Days / 7 Night"
        },
        {
            image: trav1,
            des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
            title: "A journey of tour Beauty and inspiration",
            tripinfo:"6 Days / 7 Night"
        },
        {
            image: trav3,
            des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
            title: "A journey of tour Beauty and inspiration",
            tripinfo:"6 Days / 7 Night"
        },
        {
            image: trav3,
            des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
            title: "A journey of tour Beauty and inspiration",
            tripinfo:"6 Days / 7 Night"
        },
        {
            image: trav4,
            des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
            title: "A journey of tour Beauty and inspiration",
            tripinfo:"6 Days / 7 Night"
        },
        {
            image: trav1,
            des: "Tour and travel refer to the activities related to planning, organizing, and experiencing trips to various destinations for leisure, exploration, adventure, or relaxation.",
            title: "A journey of tour Beauty and inspiration",
            tripinfo:"6 Days / 7 Night"
        }
      ]
  return (
    <>
    <Navbar/>
     <div class="row m-4 mt-5">

{
  arr.map(item => {
    return (
      <Bookcard image={item.image} des={item.des} title={item.title} tripinfo={item.tripinfo} />
    )
  })
}



</div>
<Footer />
    </>
  )
}

export default Discover