import React from 'react';
import './Innerbanner.css';

const Innerbanner = (props) => {
  return (

    <div className="header-content pt-5 pb-5">
        <div className="inner-header">
            <h4 className="mb-5"><span className="h-text">{props.data.pageTitle}<span className="h-textbar"></span></span></h4>
            <h2 className="mb-5">{props.data.pageHeading}</h2>
            <p>{props.data.pageContent}</p>
            <div className="inner-head-img"></div>
        </div>
    </div> 
  )
}

export default Innerbanner