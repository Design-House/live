import React from 'react';
import loader from '../images/Common/loader.jpg';

const Loader = () => {
  return (
    <div id='loader' className="page-loader">
              <div className="spinner"></div>
              <div className="txt">
                  <img src={loader} alt="" title="" />
              </div>
        </div>
  )
}

export default Loader