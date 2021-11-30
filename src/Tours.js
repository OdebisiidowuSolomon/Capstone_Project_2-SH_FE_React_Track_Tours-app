import React, { useState } from "react";


export default function Tours() {
  const [tour, settour] = useState([]);

  return(
    <>
    <h2>Our Tours</h2> 

    {tour.map(tour=>(
      <div className=''>
      <img src={tour.image} alt={tour.name} />
      <div className=''>
      <div className=''>
      <h4> {tour.name} </h4>
      <div className=''><h4>
      {tour.price} </h4></div>
      <div className=''>
      {tour.info} 
      </div>
      </div>
      </div>
      <footer>
        <button className=''>Not Interested</button>
      </footer>
      </div>
      )
    )}
    </>
  );
}
