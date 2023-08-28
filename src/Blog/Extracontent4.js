import React from 'react';
import contentImg from '../images/Blogs/Blogdetails/blog-4/contentimg-1.png';

const Extracontent4 = () => {
  return (
    <div className='journal-dynamic'>
      <div className='journal-content'>
          <div className='headplus-content'>
            <h4>The Lean UX process involves three main stages</h4>
            <ul>
              <li><b>Problem Exploration:</b> This stage involves identifying the problem that the product is trying to solve and understanding the needs of the target audience. Designers conduct user research, such as interviews and surveys, to gain insight into user needs and behaviours. This helps to create a user persona that represents the target audience, which serves as a reference throughout the design process.</li>
              <li><b>Solution Exploration: </b> In this stage, designers create hypotheses and test them through rapid prototyping and experimentation. Rather than spending a lot of time and resources on a single solution, designers create multiple low-fidelity prototypes and test them with users to get feedback. This allows them to quickly iterate on the design based on user feedback, refining and improving the design as they go.</li>
              <li><b>Validation:</b> The final stage involves validating the design through user testing and feedback. This ensures that the design meets the needs of the target audience and is easy and enjoyable to use. Once the design is validated, it can be developed and launched.</li>
            </ul>
          </div>
      </div>
      <div className='imageplus-content'>
        <img src={contentImg} title='' alt='' />
        
      </div>
      <div className='journal-content'>
          <div className='headplus-list'>
            <h4>Pros of Lean UX</h4>
            <ul>
              <li><b>Faster Time-to-Market:</b> The Lean UX process allows designers to create and test multiple prototypes quickly, reducing the time it takes to get to market.</li>
              <li><b>Cost-Effective:</b> The focus on rapid prototyping and experimentation reduces the cost of development by minimising the need for expensive resources and tools.</li>
              <li><b>User-Centred Design:</b> By involving users throughout the design process, designers create products that meet the needs of the target audience, increasing the chances of success.</li>
              <li><b>Agile:</b> The Lean UX process is highly adaptable and flexible, allowing designers to quickly pivot or change direction if needed.</li>
            </ul>
          </div>
      </div>
      <div className='journal-content'>
          <div className='headplus-list'>
            <h4>Cons of Lean UX</h4>
            <ul>
              <li><b>They make too many assumptions:</b>regarding who their users really are, and what they want and need. This is the fastest way to ensure you waste resources building something that nobody wants, but it is, unfortunately, one of the hardest things to test and measure prior to launching. Even if you conducted 100 interviews on people in your target market prior to launch, who is to say that they are ACTUALLY your users?</li>
              <li><b>They show a lack of empathy:</b>by making no effort to understand who the user is, and what they are looking for. For example, they believe that because they understand their idea, everybody will, and therefore they do not understand or prioritise accessibility.</li>
              <li><b>They put research in the “too hard basket”:</b> and are not doing their homework in order to drive out dangerous assumptions. It can be exciting to have prototypes (or working products) in your hands ASAP, but I cannot say strongly enough just how crucial it is to do the legwork before breaking first ground with your product.</li>
              <li><b>They show a lack of continuity:</b>by failing to keep the User and their needs at the centre of the project for future releases.</li>
            </ul>
            <p>The Lean UX approach to design is based on the principles of Lean Startup and Agile development methodologies. It emphasises experimentation, rapid prototyping, and iterative design to create user-centred products. By involving users throughout the design process, designers can create products that meet the needs of the target audience and increase the chances of success. The Lean UX process is faster, cost-effective, and agile, making it an effective approach to creating successful products.</p>
          </div>
      </div>

      
      <hr class="dividerline" />
      
      <div className='journal-content'>
          <div className='reference'>
            <h5>References</h5>
            <p>
            Gothelf J, & Seiden J. (2013). Lean UX: Applying Lean Principles to Improve User Experience. O’Reilly Media, Inc.
            </p>             
          </div>
      </div>

    </div>
  )
}

export default Extracontent4