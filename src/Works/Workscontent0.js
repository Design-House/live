import React from 'react';
import WorkdetailsImages from './WorkdetailsImages';

const Workscontent0 = () => {
  return (
    <div className='workdetails-inner'>
        <div className="journal-content mt-5">
                    <h5 className="mb-5">Streamlining the Design Request Process: A smart Appian application to manage the design deliverables to enhance Productivity and Time Management.</h5>
                    <p className='mt-4 mb-5'>In organisations different teams need communication designs for various contexts, often coordinating with designers is a time-consuming and stressful job. We designed a platform to solve this problem. A smart application to manage the design deliverables to enhance Productivity and Time Management.</p>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="pr-4"> 
                                <h4>The challenges</h4>
                                <p>Create an efficient and transparent design request management application.</p>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="pl-4">
                                <h4>The outcome</h4>
                                <p>An application enhancing the efficiency of Design Request Creation in a less time-consuming way.</p>
                            </div>
                            </div>
                        </div>
                    <p className="mt-5">According to existing literature, only 6 percent of all “official” ideas and 14
                        percent of promising ideas would reach the implementation phase and become successful. We would
                        have heard the statement,” That’s really a great idea”. But what basically would have happened
                        at the end is the great ideas would remain dormant due to the lack of resources ,time or money
                        sometimes. Converting an idea into reality is never an easy task. The marketing and sales team
                        of our company faced the same issue while approaching the Communication designers for posters,
                        emails, templates, logos, banners, brochures, flyers and so on.</p>

                </div>

                <div className="section-slider mt-5">
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        
                        <div className="carousel-inner">
                          <div className="carousel-item active" data-bs-interval="10000">
                            <img src={WorkdetailsImages.w0.wcImg1} className="d-block w-100" alt="..."  title='' />
                          </div>
                          <div className="carousel-item " data-bs-interval="10000">
                            <img src={WorkdetailsImages.w0.wcImg2} className="d-block w-100" alt="..."  title='' />
                          </div>
                          <div className="carousel-item " data-bs-interval="10000">
                            <img src={WorkdetailsImages.w0.wcImg3} className="d-block w-100" alt="..."  title='' />
                          </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                          <span className="visually-hidden">Next</span>
                        </button>
                      </div>
                </div>
                <div className="journal-content mt-5">
                    <h5>The pain points of the communication designers in meeting their deadlines as there are cases
                        where the members from different teams ask for many design creatives in a very short time.</h5>
                    <p className="mt-5">While interviewing, we also found the pain points of the Communication designers in
                        meeting their deadlines as there are cases where the members from different teams ask for many
                        design creatives in a very short time. We understood the team structure of communication
                        designers and the time required for them to complete an individual request.
                    </p>
                    <p className="mt-3">
                        Obviously, we tend to measure the success of any outcome by the percentage of expectations it
                        met. Here in our case, the outcome of getting a design creative done is not too successful. To
                        make the marketing and sales team understand about the design possibility and getting it done by
                        the communication designers is time-consuming. But what if the marketing and sales team brought
                        up any particular or whole new idea in any design creative that cannot be done within the
                        stipulated period of given time. The communication designers may face the issue of deadlines in
                        such cases.
                    </p>
                </div>

                <img src={WorkdetailsImages.w0.wjImg1} className="journal-img mt-5" alt='' title='' ></img>
                

                <div className="journal-content mt-5">
                    <p className="mt-5">We thought of this as a serious issue. Missing or extended deadlines can lead to
                        revenue loss, missed market share and above all trust would be lost. To make it simple for
                        marketing or sales team members and the communication designers to fulfil expectations, we
                        planned to design an application addressing all these issues. We divided our design process into
                        2 phases.
                    </p>
                    <p className="mt-3">
                        The first phase focuses on the task flow for the creation of design requests by choosing any
                        predefined templates. This is done for users who lack design backgrounds or are clueless about
                        the design methodology. By making the predefined designs accessible, we are saving time for
                        whoever is involved in the design request process. And, it reduces the number of revisions as
                        the requesters can freeze the content according to their requirements. Also, this phase focuses
                        on communication designers uploading the design creative designed by them to showcase it in the
                        predefined templates area. By giving access to the communication designers to upload the
                        creative design keeps the application up to trend.
                    </p>
                    <p className="mt-3">The second phase is for the users who want to create a new request from scratch. It
                        is inevitable to provide an option in our application to enable the users to raise a design
                        request from scratch because they might be bored of the same old design templates or their
                        requirements might be new. In both phases, the approximate time required for the communication
                        designers to design the creative will be displayed, while raising the request.</p>
                </div>
                <img src={WorkdetailsImages.w0.wjImg2} className="journal-img mt-5" alt='' title='' ></img>
                <div className="journal-content mt-5">
                    <h5>Based on the solution that arrived at the design phases, we created a wireframe using with UX
                        Tools. We named the application the “Creative Library” and started working on the functional
                        requirements. We know that Low code platforms can help in rapid development with decreased cost,
                        higher productivity and customer satisfaction. Hence, we chose Appian.</h5>
                    <p className="mt-5">The content of the project is allocated after it analyses the performance of each
                        page by persona. We clarified and simplified the user journeys by methods like journey mapping
                        and testing to validate the changes done.
                    </p>
                    <p className="mt-3">
                        The creative library met all the expectations of the marketing/sales team and solved the issues
                        faced by communication designers too. The creative library helps the marketing and sales team in
                        choosing a design (from predefined templates) that best fits their requirements and hence create
                        a request accordingly. Also helps the users in submitting a design request from scratch if they
                        want to. The communication designers have the access to upload the creative design in the
                        predefined template section. Additionally, while creating a request, the amount of time needed
                        to create it is stated based on the complexity of the design and the availability of
                        communication designers.
                    </p>
                </div>
                <img src={WorkdetailsImages.w0.wjImg3} className="journal-img mt-5"></img>
                <div className="journal-content mt-5">

                    <p className="mt-5">By implementing an application (Creative Library) with Improved User Experience and
                        increased efficiency in design request creation, we achieved issues with approaching deadlines
                        and made selecting the design relatively simple with the help of Appian.
                    </p>

                </div>
    </div>
  )
}

export default Workscontent0