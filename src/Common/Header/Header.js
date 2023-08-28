import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../images/Header/DHLOGO.svg';
import './Header.css';


const header = () => {
  return (
    
    <div className='mainheader'>
 
    <header>
    <div className="container">
        <div className="header-top pt-4 position-relative">
            <div className="header-logo">
            <Link to="/designhouse"><img src={logo} alt="" title="" className='dhlogo' /></Link>
            </div>
            <div className="header-menu">
                <input type="checkbox" id="active" />
                    <label for="active" className="menu-btn"></label>
                    <label for="active" className="close"></label>
                    <span className="menu">Menu</span>
                    <div className="wrapper">
                        
                        <ul>
                            <li className="m-about">
                                <Link to="/designhouse/about" className='links mlink' >About</Link> 
                              <div className="menu-img"></div>
                            </li>
                            <li className="m-services">
                            <Link to="/designhouse/services" className='links mlink' >Services</Link> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-works">
                            <Link to="/designhouse/works" className='links mlink' >Works</Link> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-blog">
                            <Link to="/designhouse/blog" className='links mlink'  >Blog</Link> 
                                <div className="menu-img"></div>
                            </li>
                            <li className="m-contact">
                            <Link to="/designhouse/contact" className='links mlink' >Contact</Link> 
                                <div className="menu-img"></div>
                            </li>
                        </ul>
                        
                </div>
            </div>
        </div>
        
    </div>
    </header>
    </div>


    
  )
}

export default header