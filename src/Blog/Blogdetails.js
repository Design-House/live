import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import Blogcontent from '../Json/Blogcontent.json';
import './Blog.css';
import { useParams } from 'react-router-dom';
import Extracontent0 from './Extracontent0';
import Extracontent1 from './Extracontent1';
import Extracontent2 from './Extracontent2';
import Extracontent3 from './Extracontent3';
import Extracontent4 from './Extracontent4';


const Blogdetails = () => {

    $(function() {
        console.log("FadIn*")
        setTimeout(function(){ // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
        },1000);

        console.log("Fadout*")
    });
    

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  
  const serv = Blogcontent;

  const { slug } = useParams();
  const post = serv[slug];
  const i = post.id;

  console.log(i);

  if(!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  

  return (

    
   
    <div className='blogdetails'>

            <div className='dynamic-bloghead' key={post.id}>
                
                <header>
                      <div className="container">
                          <div className="header-content pt-5 pb-5">
                              <div className="inner-header inner-about">
                                  <div className="back mt-3">
                                      <Link to="/designhouse/blog"><span className="back-icon"></span></Link>
                                      <Link className="left-arrow-txt links" to="/designhouse/blog">Back to blog </Link>
                                  </div>
      
                                  <h2   className="mb-5 mt-3">{post.title}</h2>
                                  <span className="lg-gray" style={{display: "none"}}>Author :</span> <b style={{display: "none"}}>{post.author}</b> <br style={{display: "none"}} />
                                  <span className="lg-gray"><i className="small-icon icon-calendar "></i> <small>{post.date}</small></span>
                              </div>
                          </div>
                      </div>
                </header>
                <div className={'banner-wrapper journal-banner-wrapper '+'jbannerimg-'+[i]}></div>
                <div className='banner-content'>
                    <div className="container">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="j-wrapper bg-yellow position-relative p-3">
                                <h4 className="lg-txt lh-40">
                                    {post.bannertxt}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='dynamic-blogcontent'>

                <div className='container'>
                    <div class="journal-content">
                            <h5 class="lg-txt lh-40">
                                {post.content}
                            </h5>
                            <br/>
                    </div>
                            { i==="0"?<Extracontent0  />:""}
                            { i==="1"?<Extracontent1  />:""}
                            { i==="2"?<Extracontent2  />:""}
                            { i==="3"?<Extracontent3  />:""}
                            { i==="4"?<Extracontent4  />:""}

                            <br/>
                    

                    
                </div>
            </div>

    </div>
  )
}

export default Blogdetails