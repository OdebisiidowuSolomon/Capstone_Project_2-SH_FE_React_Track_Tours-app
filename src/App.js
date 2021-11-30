import React from "react";
import {useState, useEffect} from 'react';
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState(null);
  const [loading, setLoading] = useState(true); //kinda a dumb value to trigger useEffect
  
  useEffect(()=>{
    if(!tours || tours.length===0){
    fetch(url)
    .then(res=>res.json())
   .then(data=>{
     setTours(data);
     setLoading(false);
   })
   .catch((err)=>alert(err.message));
   } 
  },[loading]);
  
  const removeTour = (id)=>{
    let currentTours = tours.filter((tour)=>tour.id!==id);
    setTours(currentTours);
    
  }
  
  return(
    <main>
    {
      (tours && !loading)? <>
      
       {
       tours.length>0?
       <>
        <h2 className="title">Our Tours</h2>
        <p className="underline"></p>
       </>:
        
       <>
       
        <h2 className='title'>No more Tours remaining</h2>
        <div style={{textAlign:'center'}}><span className='btn' onClick={()=>setLoading(true)}>Refresh</span></div>
        
       </>
       
       } 
      
      <Tours tours={tours} handleRemove={removeTour} />
      </>
      :
      <Loading />
    }
    </main>
   
    );
}

export default App;
