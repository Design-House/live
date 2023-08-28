import React from 'react';
import work1 from '../images/Home/Works/home-works-1.png';
import work2 from '../images/Home/Works/home-works-2.png';
import work3 from '../images/Home/Works/home-works-3.png';
import Arrow from '../images/Common/Icons/arrow.png';
import { Link } from 'react-router-dom';

const Workshome = () => {
  return (
    <div className="works section-wrap">
            <div className="container">
                
                <div className="works-content text-left">
                    <div className="row animate-work" data-aos="zoom-in" >
                        
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="w-wrap p-5">
                                <div className="w-header">
                                    <span className='w-smallhead'>Creative Library</span>
                                    <h4 className="mt-4">A smart Appian application to collaborate with designers</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>In organisations different teams need communication designs for various contexts, often coordinating with designers is a time-consuming and stressful job. We designed a platform to solve this problem.
A smart application to manage the design deliverables to enhance Productivity and Time Management.</p>
                                </div>
                                <div className="readmore">
                                    <Link to="/designhouse/works/creative-library" >Read more <span className="readmore-icon"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work1} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                       
                    </div>
                    <div className="clr clr-100"></div>
                    <div className="row  animate-work" data-aos="zoom-in" >
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work2} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                        <div className="col-lg-6 col-sm-12 position-relative ">
                            <div className="w-wrap p-5 box-right">
                                <div className="w-header">
                                    <span className='w-smallhead'>ESG</span>
                                    <h4 className="mt-4">Empowering Social <br/> Responsibility</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>An innovative way to promote sustainability among individuals for the creation of positive environmental, social and governance impact. A platform to manage ESG activities effectively.</p>
                                </div>
                                <div className="readmore">
                                    <Link to="/designhouse/works/esg" >Read more <span className="readmore-icon"></span></Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="clr clr-100"></div>
                    <div className="row animate-work" data-aos="zoom-in" >
                       
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="w-wrap p-5">
                                <div className="w-header">
                                    <span className='w-smallhead'>Service Design</span>
                                    <h4 className="mt-4">Research to improve employee experience, with a focus on onboarding</h4>
                                </div>
                                <div className="w-content pt-1 mb-3">
                                    <p>First impression is the best impression” it’s  not just a saying, but a psychological fact in the case of people’s experience with a service, product or organisation, and hence it is important in employee onboarding experience.</p>
                                </div>
                                <div className="readmore">
                                    <Link to="/designhouse/works/service-design" >Read more <span className="readmore-icon"></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="w-images">
                                <img src={work3} alt="" title="" className="img-md-100" />
                            </div>
                            <div className="w-line"></div>
                        </div>
                    </div>
                    <div className="clr clr-50"></div>
                </div>
                <div className="section-bottom text-center pt-3 mt-5"  data-aos="fade-up">
                    <Link to="/designhouse/works" className="btn btn-primary new-primary" >See more work  <img src={Arrow} alt="" title="" /></Link>
                </div>
                
            </div>
        </div>
  )
}

export default Workshome