 import React, { useState } from 'react';
 import './Slider.css'; 

 import {
  FaChevronRight,
  FaChevronLeft,
 } from "react-icons/fa";

 const Slider = ({ slides })=>{
   const [current , setCurrent] = useState(1);
   const len = slides.length;

   const nextSlide = ()=>{
        setCurrent(current == len -1 ? 0 : current + 1 );    
   }
   const prevSlide = ()=>{
    
      setCurrent(current === 0 ? len-1 : current -1 );
    
  }
    return (     
            <div className="slider"> 
                <FaChevronLeft
                className="left-arrow"
                onClick ={prevSlide}
              />
              <FaChevronRight
                className="right-arrow"
                onClick ={nextSlide}
              />
                {slides.map((slide, index) =>(
                  <div key={slide.id}>  
                   {index === current &&
                      (<img src= {slide.image} alt="" ></img>
                    )}
                  </div>  
                ))}              
            </div>
    )
}


export default Slider;