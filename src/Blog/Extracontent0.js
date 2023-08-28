import React from 'react';
import contentImg from '../images/Blogs/Blogdetails/blog-0/contentimg-1.png';


const Extracontent0 = () => {
  return (
    <div className='journal-dynamic'>
      <div className='journal-content'>
          <div className='headplus-content'>
            <h4>When to involve the UX team in a project? </h4>
            <p>The UX team should be involved in a project as early as possible, ideally in the discovery phase. The discovery phase is when the project team is defining the project scope, objectives, and requirements. It is during this phase that the UX team can provide valuable insights into user needs, behaviours, and pain points. By involving the UX team early in the project, they can help shape the project’s direction and ensure that the project meets user expectations.</p>
          </div>
      </div>
      <div className='imageplus-content'>
        <img src={contentImg} title='' alt='' />
        
      </div>
      <div className='journal-content'>
          <div className='headplus-list'>
            <h4>Advantages of involving the UX team in a project</h4>
            <ul>
              <li><b>Improved User Experience:</b> The primary advantage of involving the UX team in a project is that it results in an improved user experience. The UX team brings a user-centred approach to the design process, ensuring that the product meets user needs, behaviours, and preferences.</li>
              <li><b>Increased Efficiency:</b> Involving the UX team early in the project can save time and resources. By identifying user needs and pain points early in the design process, the UX team can help prevent costly redesigns and rework later in the project.</li>
              <li><b>Competitive Advantage:</b> A well-designed product that meets user needs can provide a significant competitive advantage. By involving the UX team in the project, the product team can create a product that differentiates itself from competitors and meets user expectations.</li>
            </ul>
          </div>
      </div>

      
      <hr class="dividerline" />
      
      <div className='journal-content'>
          <div className='reference'>
            <h5>References</h5>
            <p>
              Norman, D. A. (2013). The design of everyday things: Revised and expanded edition. Basic books. <br/>
              Brown, T. (2008). Design thinking. Harvard business review, 86(6), 84-92.<br/>
              Lupton, E., & Phillips, J. (2014). Graphic design: The new basics. Chronicle Books.
            </p>             
          </div>
      </div>

    </div>
  )
}

export default Extracontent0