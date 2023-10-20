import React from 'react';
import { Link } from 'react-router-dom';


const Welcome = () => {
   
  return (
    <div class="welcome section-wrap">
            <div class="container">
                <div class="welcome-content text-left">
                    <div class="row">
                        <div class="col-md-6 col-sm-12" data-aos="fade-right" >
                            <div class="w-left max-sm-b-50 md-pr-50">
                                <h2>To co-create innovative,human-centered digital transformations based on user behaviour and <span class="h-text">business objectives.  <span class="h-textbar"></span></span></h2>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12" data-aos="fade-left" >              
                            <div class="w-right">
                                <p>It is a team of design thinking consultants, UX architects, user researchers, front-end 
developers, visual designers, and content creators. Design House is a team with all 
the required expertise to solve design problems from concept to implementation. Our 
strong base in intelligent automation is an added advantage to successfully 
implementing smart solutions.</p>
                                <div class="readmore">
                                    <Link to="/about">Explore <span class="readmore-icon"></span></Link>
                                </div>

                                <div class="w-counts mt-5 ">
                                    <div class="count me-5 ">
                                        <h3 class="min-lg-f80">20+</h3>
                                        <p class="f-monts">Commercialised Services</p> 
                                    </div>
                                    <div class="count">
                                        <h3 class="min-lg-f80">110+</h3>
                                        <p class="f-monts">Projects Launched</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Welcome