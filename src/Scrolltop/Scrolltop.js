import React from 'react';
import { useState, useEffect } from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './Scrolltop.css'

const Scrolltop = () => {
   
  
        const [visible, setVisible] = useState(false);

        const scrollToTop = () =>{
            window.scrollTo({
              top: 0, 
              behavior: "smooth"
            });
          };

        useEffect(() => {
        
            const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 800){
                setVisible(true)
            } 
            else if (scrolled <= 800){
                setVisible(false)
            }
            };
        
            return () =>  window.addEventListener('scroll', toggleVisible);

        }, []);

  return (
    <button className='scrolls'>
     <FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </button>
  )
}

export default Scrolltop