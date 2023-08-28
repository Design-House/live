import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';

import Allworks from '../Json/Workscontent.json';
import Workscontent0 from './Workscontent0';
import Workscontent1 from './Workscontent1';
import Workscontent2 from './Workscontent2';
import Workscontent3 from './Workscontent3';


const Workdetails = () => {
   
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
  const serv = Allworks;

  const { slug } = useParams();
  const post = serv[slug];
  const i = post.id;

  console.log(i);

  if(!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  

  return (
   


    <div className='details'>
    <header>
            <div className="container">
                <div className="header-content pt-5 pb-5">
                    <div className="inner-header inner-about">
                        <div className="back mt-3">
                            <span className="back-icon"></span>
                            <Link className="left-arrow-txt links" to="/works">Back to works </Link>
                        </div>

                        <h2   className="mb-5 mt-3">{post.title}</h2>
                    </div>
                </div>
            </div>
    </header>
    <div className={'journal-banner-wrapper w-banner-img  '+'wbimg-'+[post.id]}></div>
    <div className="journal mt-5 mb-5">
            <div className="container">
                <p className="lg-gray">In-house product: <b style={{color:"#000"}}>{post.extra}</b></p>
            </div>
            <div className="container">
                { i===0?<Workscontent0  />:""}
                { i===1?<Workscontent1  />:""}
                { i===2?<Workscontent2  />:""}
                { i===3?<Workscontent3  />:""}
            </div>
            
        </div>
    </div>
  )
}

export default Workdetails