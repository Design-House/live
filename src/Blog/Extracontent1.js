import React from 'react';
import contentImg1 from '../images/Blogs/Blogdetails/blog-1/contentimg-1.png';
import contentImg2 from '../images/Blogs/Blogdetails/blog-1/contentimg-2.png';

const Extracontent1 = () => {
  return (
    <div className='journal-dynamic'>

      <div className='imageplus-content'>
        <img src={contentImg1} title='' alt='' />
        
      </div>

      <div className='journal-content'>
          <div className='headplus-content'>
            <h4>Identifying user needs and pain points </h4>
            <p>User research helps designers to understand the needs, behaviours, and pain points of users. By gathering data on user behaviours, preferences, and attitudes, designers can identify the problems that users face and the areas where they need help. This information helps designers to create products that meet the needs of users and solve their problems. For example, a user research study conducted by Nielsen Norman Group found that users prefer mobile applications that are easy to use and navigate, have a clean interface, and provide quick access to information. This information helped designers to create mobile applications that meet user needs and expectations.</p>
          </div>
          <div className='headplus-content'>
            <h4>Enhancing user experience</h4>
            <p>User research also helps to enhance the user experience of a product or application. By understanding user needs and preferences, designers can create products that are intuitive and easy to use, resulting in a positive user experience. This, in turn, can lead to increased user engagement and customer loyalty. A study conducted by User Testing found that 68% of users abandon a product or application because they perceive it as poorly designed. By conducting user research and designing products that meet user needs, designers can increase user engagement and reduce user abandonment rates.</p>
          </div>
      </div>
      
      <div className='imageplus-content'>
        <img src={contentImg2} title='' alt='' />
        
      </div>

      <div className='journal-content'>
          <div className='headplus-content'>
            <h4>Saving time and money</h4>
            <p>Conducting user research before starting the design process can save time and money. By identifying user needs and preferences early in the design process, designers can prevent costly redesigns and rework later on. This is because designers can make informed decisions about the design of the product or application based on user needs and preferences. In addition, user research can help designers to identify potential issues with the product or application before it is launched, saving time and money in the long run.</p>
          </div>
          <div className='headplus-content'>
            <h4>Competitive advantage</h4>
            <p>User research can also provide a competitive advantage to companies. By designing products that meet user needs and preferences, companies can differentiate themselves from their competitors and gain a competitive edge. For example, Apple is known for designing products that are intuitive and easy to use, resulting in a loyal customer base.</p>
          </div>
      </div>
      

      
      <hr class="dividerline" />
      
      <div className='journal-content'>
          <div className='reference'>
            <h5>References</h5>
            <ul>
                <li>
                  <p>
                  Nielsen Norman Group. (2019). Mobile App Usability: UX Best Practices. <br/>
                    <a href='https://www.nngroup.com/articles/mobile-app-usability-ux-best-practices/' target='blank' >https://www.nngroup.com/articles/mobile-app-usability-ux-best-practices/</a></p>
                </li>
                <li>
                  <p>
                  User Testing. (2018). The Cost of Poor UX Design in 2018. <br/>
                    <a href='https://www.usertesting.com/blog/the-cost-of-poor-ux-design-in-2018/'  target='blank' >https://www.usertesting.com/blog/the-cost-of-poor-ux-design-in-2018/</a></p>
                </li>

                <li>
                  <p>Norman, D. A. (2013). The design of everyday things: Revised and expanded edition. Basic books.</p>
                </li>
            </ul>
            
          </div>
      </div>

    </div>
  )
}

export default Extracontent1