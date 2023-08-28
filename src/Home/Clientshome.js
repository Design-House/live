import React from 'react';
import Slider from '../Common/Banners/Slider';

const Clientshome = () => {
  return (
    <div className="clients section-wrap">
            <div className="container">
                <div className="section-head pb-5 mb-3 text-center" data-aos="fade-down" >
                    <h2>Our clients become partners</h2>
                </div>
                <div className="section-slider" data-aos="fade-up">
                   <Slider />
                </div>
            </div>
    </div>
  )
}

export default Clientshome