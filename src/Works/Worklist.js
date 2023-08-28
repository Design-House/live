import React from 'react';
import { Link } from 'react-router-dom';
import Innerbanner from '../Common/Banners/Innerbanner';
import { useEffect } from 'react';
import Allworks from '../Json/Workscontent.json';


const Worklist = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);


      const  data ={
        pageTitle: "Work",
        pageHeading: "Success stories of people-centred design",
        pageContent: "Case studies of some of the solutions we designed.",
      };
      

  return (
    <div className='container'>
     <Innerbanner data={data} />
    
    <div className="work-wrapper">
            <div className="stories section-wrap">
                
                      <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                            <div class="section-head pb-5 mb-3 text-center" >
                                <h2>Case Studies</h2>
                            </div>

                            <div className="stories-content works-pro text-left">
                                <div className="row">
                                {Object.entries(Allworks).map(([slug, { title, description, extra , imgs }]) => (
                                    <div className="col-lg-6 col-md-6 col-sm-12 s-wrap" key={slug} >
                                        <Link  to={slug} className="w-links">
                                        <div className="s-header">
                                            <div className="s-image ">
                                                <img src={imgs} alt="" title="" className="img-sm-100" />
                                            </div>
                                            <h6 className="mt-4 work-proname">{extra}</h6>
                                            <h4 className="mt-1">{title}</h4>
                                        </div>
                                        <div className="s-content pt-1 mb-3">
                                            <p>{description}</p>
                                        </div>
                                        </Link>
                                    </div>
                                ))}        
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                      </div>
                
            </div>
        </div>
    </div>
  )
}

export default Worklist