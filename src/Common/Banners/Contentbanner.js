import React from 'react'

const Contentbanner = (props) => {
  return (
    <div className="contentbanner-wrap">
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-6 col-sm-12 position-relative">
                            <div className="content-details pt-5 pb-5">
                                <div className="w-header">
                                    <h4>Our Story</h4>
                                </div>
                                <div className="w-content pt-1 mt-3">
                                    <p>Knowing the ‘Why’ of everything was a habit for Vuramites as it helps you to stay closer to the purpose of achieving.
Being in the business automation journey for more than a decade and now being the pioneers in Hyperautomation services, we constantly have to enrich our solutions with the right balance of humanness by setting the right measure of empathy clubbed to our solutions.
To enable this need we founded Design House, A practice that implements human-centered design across all customer and employee experience journeys at Vuram.</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 side-image about-story">
                            <div className="w-images">
                                <img src={props.image} alt="" title="" className="img-md-100" />
                            </div>

                        </div>
                    </div>
                </div>
        </div>
  )
}

export default Contentbanner