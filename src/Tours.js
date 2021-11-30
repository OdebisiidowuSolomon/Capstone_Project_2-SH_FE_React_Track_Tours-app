import React from "react";
import { useState } from 'react';

export default function Tours({tours, handleRemove}) {
  
  
  const Tour = ({props})=>{
    const max_length = 200;
    let {id, image, info, price,name} = props;
    const [currentInfo, setCurrentInfo] = useState(info.substr(0,max_length)+'...');
    
    const showMoreLess = (evt)=>{
      let btnState = evt.target.innerText.toLowerCase();
      if(btnState.indexOf('less')!==-1){
        evt.target.innerText = 'show more';
        setCurrentInfo(info.substr(0,max_length));
      }else{
        evt.target.innerText = 'show less';
        setCurrentInfo(info);
      }
    }
    
    return(
     <div className="single-tour">

      <img src={image} alt="sample image" />
      <div className="tour-content">
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <div>
          <p>
            <span>
            {currentInfo}
            </span>
          <button onClick={showMoreLess}>show more</button></p>
        </div>
        <footer>
          <div className="delete-btn" onClick={()=>{handleRemove(id)} }>
            Not interested
          </div>
        </footer>
      </div>
    </div>);
  }
  
  return (
    <>
    {
      tours.map((t)=><Tour key={t.id}props={t} />) 
    } 
    </>
    );
}
