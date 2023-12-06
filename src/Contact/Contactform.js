import React from 'react'

const Contactform = () => {
  return (
    <div className="contact-wrapper">

            <div className="contact section-wrap">
                <div className="container">
                    <div className="contact-form">
                        <div className="c-form-head inner-subhead mb-5">
                            <span className="mb-3 ">WE ARE LISTENING!</span>
                            <h3>Share Your Design Problems & <br/>
                                Get Humane-Centered Solutions</h3>
                        </div>
                        <div className="c-form-wrapper">
                           
                            <form>
                                    
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label for="userFirst" className="form-label">First Name</label>
                                            <input type="email" className="form-control" id="userFirst" placeholder="" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label for="userLast" className="form-label">Last Name</label>
                                            <input type="email" className="form-control" id="userLast" placeholder="" />
                                        </div>
                                    </div>
                                   
                                  
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                            <label for="userEmail" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="userEmail" placeholder="" />
                                        </div>
                                        <div className="col-md-6 col-sm-12">
                                            <label for="userOrg" className="form-label">Organization</label>
                                            <input type="email" className="form-control" id="userOrg" placeholder="" />
                                        </div>
                                    </div>
                                  
                                    <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                           
                                            <label for="userCountry" className="form-label">Country</label>
                                            <select id="userCountry" className="form-select">
                                              <option selected>Select Country</option>
                                              <option>...</option>
                                            </select>
                                        </div>
                                    </div>
                                 
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label for="userSubject" className="form-label">Subject</label>
                                            <input type="text" className="form-control" id="userSubject" placeholder="" />
                                        </div>
                                    </div>
                                 
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <label for="exampleFormControlTextarea1" className="form-label">Details</label>
                                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                        </div>
                                    </div>
                                  
                                  <div className="mb-5 mt-3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="form-check">
                                                <input style={{display: "block"}}  className="form-check-input" type="checkbox" id="gridCheck" />
                                                <label className="form-check-label greylabel" for="gridCheck" >
                                                    By clicking the submit button, you allow us to connect with you using email, phone, or post (as provided) for responding to your query and other marketing activities. This information is protected under our <a href="/contact">Privacy Policy.*</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                  <div className="mt-5 mb-3">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            
                                            <button type="submit" className="btn btn-primary new-primary">Submit</button>
                                            
                                        </div>
                                    </div>
                                  </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default Contactform