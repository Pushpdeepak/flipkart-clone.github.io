import Favorite from '@mui/icons-material/Favorite';
import FiberManualRecordRounded from '@mui/icons-material/FiberManualRecordRounded';
import FiberManualRecordOutlined from '@mui/icons-material/FiberManualRecordOutlined';
import React, { useCallback, useEffect, useState } from 'react'
import './Card.css';

const Card = ({image,brand,name,offerPrice,actualPrice}) => {
    const[index,setIndex]=useState(0);
    const[show,setShow]=useState(false);

    const carousel =useCallback(()=>{
      setTimeout(()=>{
       if(index<image.length-1){
        setIndex(index+1);
       }
       else{
        setIndex(0)
       }
      },1000);
      },[index,image.length]);

    useEffect(()=>{
      show && carousel()
    },[show,carousel])

    

  return (
    <div className='card'> 
     <div className="card_heart">
       <Favorite/>
     </div>
      
      {
        Array(image.length).fill().map((_,i)=>{
          if(i===index){
            return show && <FiberManualRecordRounded className='dots'/>
          }else{
            return show && <FiberManualRecordOutlined className='dots'/>
          }
        })
      }

     <div className="card_image">
        <img onMouseOver={()=>setShow(true)} onMouseLeave={()=>setShow(false)} src={image[index]} alt="images" />
     </div>
     <div className="product_details">
     <div className="card_details">
        <p className='title'>{brand}</p>
        <p>{name}</p>
         <span className='span1'>₹{offerPrice}</span>
        <span className='span2'>₹{actualPrice}</span>
        <span className='span3'>56%</span>
     </div>
     <div className="card_size">
        <p>size <span>6,7,8,9</span></p>
     </div>
     </div>
    </div>
  )
}

export default Card