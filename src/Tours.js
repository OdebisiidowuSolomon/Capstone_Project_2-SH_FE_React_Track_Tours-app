import React, { useState } from "react";


export default function Tours() {
  const [tour, settour] = useState([]);

  const handleRefresh = ()=>{
    //Reset the tour with the data gotten
  }
  
  const removeTour =(id)=>{
    let currentTour = tour.filter((t)=>t.id! ==id);
    settour(currentTour);
  }
  
  return(
    tour.length===0?
    <>
      <h2>No more Tours remaining</h2>
      <div className='btn' onClick={ handleRefresh }>Refresh</div>
    </>
    :
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
        <button className='' onClick={ () =>removeTour(tour.id) }>Not Interested</button>
      </footer>
      </div>
      )
    )}
    </>
  );
}
