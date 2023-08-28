import React from 'react';

import './Blog.css';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';


const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  
      
      document.title = "Blog";
      return (
        <div className='blog'>
          <Outlet />          
               
        </div>
      )
}

export default Blog