import React from 'react';

import { Link } from 'react-router-dom';
import Innerbanner from '../Common/Banners/Innerbanner';
import InnerImageBanner from '../Common/Banners/InnerImageBanner';
import Capabilities from './Capabilities';
import Allservices from '../Json/Servicecontent.json';
import Faq from './Faq';

const Serviceslist = () => {
    const  data ={
        pageTitle: "Services",
        pageHeading: "Solutions crafted with empathy",
        pageContent: "A meaningful design gives life to automated systems. We provide research based designs that will be helpful to the users to solve problems.",
      };
      const dataNew ={ 
        classTitle: "banner-service"
      };
      document.title = "Services";

  return (

    <>

    <div className='container'>
            <Innerbanner data={data} />
    </div>

    <InnerImageBanner data={dataNew}  />

    <div className="service-wrapper">
    <div className="works section-wrap">
        <div className="container">
            <div className="section-head pb-5 mb-3 text-center" >
                <h2>What we do</h2>
            </div>
            <div className="works-content text-left">
            {Object.entries(Allservices).map(([slug, { id, title, description, extra , imgs }]) => (
                <div className={'row btspace img'+ ((id)%2 ? 'lt':'rt')} key={slug} >
                    
                    <div className={'col-lg-6 col-sm-12 img'+ ((id)%2 ? '-first':'-right')}>
                        <div className="w-images">
                            <img src={imgs} alt="" title="" className="img-md-100" />
                        </div>
                    </div>

                    <div className='col-lg-6 col-sm-12 position-relative '>
                        <div>
                            <div className="w-header">
                                <h4>{title}</h4>
                            </div>
                            <div className="w-content pt-1 mt-3 mb-4">
                                <p>{description}</p>
                                <p>{extra}</p>
                            </div>
                            <div className="readmore">
                                <Link to={slug} className='links'>Read more <span className="readmore-icon"></span></Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            ))}
            </div>
        </div>
    </div>
    </div>

    <Capabilities />

    {/* <Faq /> */}
    </>
  )
}

export default Serviceslist