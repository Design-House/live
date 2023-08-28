import React from 'react';
import stories1 from '../images/Home/Articles/article-1.png';
import stories2 from '../images/Home/Articles/article-2.png';
import stories3 from '../images/Home/Articles/article-3.png';
import Arrow from '../images/Common/Icons/arrow.png';
import { Link } from 'react-router-dom';

const Stories = () => {
  return (
    <div className="stories bg-light section-wrap">
            <div className="container">
                <div className="section-head pb-5 mb-3 text-center"  data-aos="fade-down">
                    <h2>Articles</h2>
                    <p className='art-content'>Explore the articles to get insights, tips, and best practices on various design topics such as user research and visualisation of ideas.</p>
                </div>
                <div className="stories-content text-left">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" data-aos="zoom-in">
                            <div className="s-header">
                                <div className="s-image ">
                                    <img src={stories1} alt="" title="" className="img-sm-100" />
                                </div>
                                <h4 className="mt-4">When to involve the UX team in a project, Why?</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>User experience (UX) is a critical aspect of any product design process. UX design focuses on creating meaningful experiences for users by… </p>
                            </div>
                            <div className="readmore">
                                <Link to="/designhouse/blog/when-to-involve-the-ux-team">Read more <span className="readmore-icon"></span></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap" data-aos="zoom-in">
                            <div className="s-header">
                                <div className="s-image">
                                    <img src={stories2} alt="" title="" className="img-sm-100" />
                                </div>
                                <h4 className="mt-4">Importance of user research before starting design</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>User research is the process of gathering information about users to understand their needs, pain points, behaviours, and preferences.</p>
                            </div>
                            <div className="readmore">
                                <Link to="/designhouse/blog/importance-of-user-research">Read more <span className="readmore-icon"></span></Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-12 s-wrap mb-0" data-aos="zoom-in">
                            <div className="s-header">
                                <div className="s-image">
                                    <img src={stories3} alt="" title=""  className="img-sm-100"/>
                                </div>
                                <h4 className="mt-4">Can generic UX guidelines replace the UCD process?</h4>
                            </div>
                            <div className="s-content pt-1 mb-3">
                                <p>The User-Centred Design (UCD) process is a design approach that involves understanding the needs and goals of users throughout the design process.</p>
                            </div>
                            <div className="readmore">
                                <Link to="/designhouse/blog/tool-replace-the-ucd-process">Read more <span className="readmore-icon"></span></Link>
                            </div>   
                        </div>      
                                     
                    </div>
                </div>
                <div className="section-bottom text-center pt-3 mt-5"  data-aos="fade-up">
                    <Link to="/designhouse/blog" className="btn btn-primary new-primary" role="button" >See more stories  <img src={Arrow} alt="" title="" /></Link>
                </div>
                
            </div>

        </div>
  )
}

export default Stories