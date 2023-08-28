import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import './Works.css';

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

    document.title = "Works";

    return (
    <div className='works'>
       
           <Outlet />
             
    </div>
    )
}

export default Works