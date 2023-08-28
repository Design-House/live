import React from 'react';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const Services = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return (
    <div className='services'>
         <Outlet/>
    </div>
    )
}

export default Services