import React from 'react';
import Howconent from '../Json/Howcontent.json';
import Arrow from '../images/Common/Icons/arrow.png';
import { Link } from 'react-router-dom';

const Howhelp = () => {
  return (
    <div className="help bg-light section-wrap">
            <div className="container">
                <div className="section-head pb-5 mb-3 text-center" data-aos="fade-down">
                    <h2>How we can help you</h2>
                </div>
                <div className="help-content text-left">
                    <div className="row">
                    {Howconent && Howconent.map(How =>{
                        return(
                        <div className="col-lg-4 col-md-6 col-sm-12" key={How.id} data-aos="fade-up">
                            <div className="h-header">
                                <h4><span className='help-icon'><img src={How.icon} alt="" title="" /></span><span className="h-text">{How.title}<span className="h-textbar"></span></span></h4>
                            </div>
                            <div className="h-content p-3 pt-1 mb-3" >
                                <p>{How.content}</p>
                            </div>
                        </div>
                        )})}                    
                    </div>
                </div>
                <div className="section-bottom text-center mt-5" data-aos="fade-up" >
                   <Link to="/services" className="btn btn-primary new-primary" role="button" >All Services  <img src={Arrow} alt="" title="" /></Link>
                </div>
                
            </div>
        </div>
  )
}

export default Howhelp