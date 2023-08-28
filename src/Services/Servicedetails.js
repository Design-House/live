import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Allservices from '../Json/Servicecontent.json';
import { useEffect } from 'react';
import Servicecontent0 from './Servicecontent0';
import Servicecontent1 from './Servicecontent1';
import Servicecontent2 from './Servicecontent2';
import Servicecontent3 from './Servicecontent3';
import Servicecontent5 from './Servicecontent5';
import Servicecontent4 from './Servicecontent4';
import Servicecontent6 from './Servicecontent6';
import Servicecontent7 from './Servicecontent7';
import './Services.css';

const Servicedetails = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
  const serv = Allservices;

  const { slug } = useParams();
  const post = serv[slug];
  const i = post.id;

  console.log(i);

  if(!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  

  return (
    <div>
      <header className='yellowheader'>
                      <div className="container">
                          <div className="header-content pt-5 pb-5">
                              <div className="inner-header inner-about">
                                  <div className="back mt-3">
                                      <span className="back-icon"></span>
                                      <Link className="left-arrow-txt links" to="/services">Back to Services </Link>
                                  </div>
      
                                  <h2   className="mb-5 mt-3">{post.title}</h2>
                              </div>
                              <div className='yellowline yl-100'></div>
                          </div>
                      </div>

                      <div className='yellowline yl-50'></div>
                </header>
                <div className={'banner-wrapper journal-banner-wrapper '+'sbannerimg-'+[post.id]}>
                  
                </div>

                <div className='dynamic-blogcontent'>

                <div className='container'>
                    <div class="journal-content">
                            <h5 class="lg-txt lh-40 mt-5">
                                {post.description}
                            </h5>
                            <br/>
                            { i===0?<Servicecontent0  />:""}
                            { i===1?<Servicecontent1  />:""}
                            { i===2?<Servicecontent2  />:""}
                            { i===3?<Servicecontent3  />:""}
                            { i===4?<Servicecontent4  />:""}
                            { i===5?<Servicecontent5  />:""}
                            { i===6?<Servicecontent6  />:""}
                            { i===7?<Servicecontent7  />:""}
                    </div>  
                    <br/>
                </div>
            </div>
            
    
   </div>
  )
}

export default Servicedetails