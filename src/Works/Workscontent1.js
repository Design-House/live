import React from 'react'
import WorkdetailsImages from './WorkdetailsImages';
const Workscontent1 = () => {
  return (
    <div className='workdetails-inner'>
    <div className="journal-content mt-5">
                <h5 className="mb-5">Beyond just collecting money, the website acts as a platform to connect NGOs, donors, local vendors and volunteers. Need based donations brings more transparency.</h5>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="pr-4"> 
                            <h4>The problem</h4>
                            <p>Need to be transparent, need to bring local participation, and more than just another charity website. Humane has to nurture a long lasting connection between donors, NGOs Vendors and Volunteers.</p>
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="pl-4">
                            <h4>The solution</h4>
                            <p>A website that allows NGOs to publish needs, donors can fulfil based on their choice, they can choose the humane store or own choice to send products. Volunteers can associate with selected NGOs. The video feedback system encourages Donors and emotionally influence.</p>
                        </div>
                        </div>
                    </div>
                    <h5 className="mt-5">The immersive problem solving workshops</h5>
                <p className="mt-3">We had conducted field studies to understand the actual situations of the NGOs, the team visited some of the NGOs in South India, spoke to the stakeholders, local vendors and volunteers, understood the types of needs they have and the challenges they faced. After data gathering we conducted ideation workshops and examined multiple solutions.</p>
                <p className="mb-5">The debate on solutions happened based on expected impact, iterated designs to get an optimised solution. The design thinking approach, the designs were tested and iterated.</p>
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
                        <img src={WorkdetailsImages.w1.wcImg1} className="d-block w-100" alt="..."  title='' />
                      </div>
                      <div className="carousel-item" data-bs-interval="10000">
                        <img src={WorkdetailsImages.w1.wcImg2} className="d-block w-100" alt="..."  title='' />
                      </div>
                      <div className="carousel-item" data-bs-interval="10000">
                        <img src={WorkdetailsImages.w1.wcImg3} className="d-block w-100" alt="..."  title='' />
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
                <h5>The Humane life launch and impact</h5>
                <p className="mt-5">In February 2018, we successfully launched The Humane Life as a web application, providing a platform for donors, volunteers, and NGOs. Unlike traditional charity platforms, The Humane Life introduced a need-based donation system. This unique approach allowed charity homes to post their specific daily needs, and interested contributors could choose to fulfill those needs directly. By aligning donations with specific needs, we aimed to maximize the impact of contributions and ensure that charity homes received the essential items they required.
                </p>
                <h5 className="mt-5">The Humane shop launch and user benefits</h5>
                <p className="mt-3">
                In April 2020, we unveiled The Humane Shop, a web and mobile app designed to facilitate the online purchase of essential needs. By incorporating this platform into The Humane ecosystem, we aimed to provide a comprehensive solution for contributors and buyers. Through The Humane Shop, users could conveniently order essential items online, supporting social distancing and promoting safety. Additionally, this platform empowered smaller retail stores in small towns by helping them establish an online presence, expanding their reach and business opportunities.
                </p>
            </div>

            <img src={WorkdetailsImages.w1.wjImg1} className="journal-img mt-5" alt='' title='' ></img>
            

            <div className="journal-content mt-5">
            <h5 className="mb-3">Continuous improvement and future enhancements</h5>
                <p className="mb-5">As a UX team, we believe in the value of continuous improvement. We actively sought feedback from users and stakeholders, conducted usability tests, and analyzed user data to identify areas for enhancement. By collaborating with NGOs, charity homes, contributors, buyers, and retail store owners, we gained invaluable insights that informed iterative improvements to both The Humane Life and The Humane Shop platforms. Our vision was to transform these platforms into a comprehensive and user-centric hub for all non-profit activities, continually adapting to meet the evolving needs of users and the society they served.
                </p>
                <h5 className="mt-5">Conclusion</h5>
                <p className="mt-3">Our involvement as the UX team in the research, design, and development of The Humane Life and The Humane Shop platforms was immensely fulfilling. By addressing the need for a platform that went beyond collecting money and introducing a need-based donation system, we provided a unique and impactful solution. These platforms effectively facilitated social welfare, empowered communities, and facilitated meaningful contributions. Moving forward, we remained committed to continuous improvement, ensuring that our designs evolved and adapted to maximize their positive social impact.</p>
            </div>
            <img src={WorkdetailsImages.w1.wjImg2} className="journal-img mt-5" alt='' title='' ></img>
            
</div>
  )
}

export default Workscontent1