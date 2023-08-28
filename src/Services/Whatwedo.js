import React from 'react';
import serviceImg from '../images/Services/Servlist/Servlist-0.png'

const Whatwedo = () => {

   
    
  return (
    <div className="service-wrapper">
    <div className="works section-wrap">
        <div className="container">
            <div className="section-head pb-5 mb-3 text-center" >
                <h2>What we do</h2>
            </div>
            <div className="works-content text-left">
                <div className="row" >

                    <div className="col-lg-6 col-sm-12 position-relative">
                        <div>
                            <div className="w-header">

                                <h4>Apply design thinking in solving
                                    business problems in a people
                                    centred manner</h4>
                            </div>
                            <div className="w-content pt-1 mt-3 mb-4">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <ul className="list-style-square">
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="w-images">
                            <img src={serviceImg} alt="" title="" className="img-md-100" />
                        </div>

                    </div>

                </div>
                <div className="clr clr-100"></div>
                <div className="row" >
                    <div className="col-lg-6 col-sm-12">
                        <div className="w-images">
                            <img src={serviceImg} alt="" title="" className="img-md-100" />
                        </div>

                    </div>
                    <div className="col-lg-6 col-sm-12 position-relative">
                        <div>
                            <div className="w-header">

                                <h4>Easy to use product and service
                                    design</h4>
                            </div>
                            <div className="w-content pt-1 mt-3 mb-4">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <ul className="list-style-square">
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>

                            </ul>

                        </div>
                    </div>


                </div>
                <div className="clr clr-100"></div>
                <div className="row" >

                    <div className="col-lg-6 col-sm-12 position-relative">
                        <div>
                            <div className="w-header">

                                <h4>Consulting for organisations
                                    That want to find effective
                                    Solutions </h4>
                            </div>
                            <div className="w-content pt-1 mt-3 mb-4">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen
                                    book. It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s
                                    with the release of Letraset sheets containing Lorem Ipsum passages.</p>
                            </div>
                            <ul className="list-style-square">
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>
                                <li>Lorem Ipsum is dummy text</li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="w-images">
                            <img src={serviceImg} alt="" title="" className="img-md-100" />
                        </div>

                    </div>

                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Whatwedo