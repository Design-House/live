import React from 'react';
import blogData from '../Json/Blogcontent.json';
import { Link } from 'react-router-dom';
import Blogsearch from './Blogsearch';
import Innerbanner from '../Common/Banners/Innerbanner';

const Bloglist = () => {

    const  data ={
        pageTitle: "Blog",
        pageHeading: "Thoughts and stories on design and research",
        pageContent: "Discover the insights and trends in UX and design research with our informative blog. Dive into the world of user experience design, explore effective research methodologies, and unlock strategies to create exceptional digital experiences. ",
      };


  return (
    <>
      <div className='blog'>
          <div className='container'>
                <Innerbanner data={data} />
           </div>

           <div class="blog-wrapper">
              <div class="blog section-wrap">
                  <div class="container">
                  <Blogsearch />
    <div className="blog-content text-left">

        {Object.entries(blogData).map(([slug, {id,  title, content, icon }]) => ( 
        <div className={'row test'+ ((id)%2 ? 'right':'left')} key={id} >
            <div className="col-lg-6 col-sm-12 img-right">
                <div className="w-images">
                    <Link to={slug} >
                        <img src={icon} alt="" title="" className="img-md-100" />
                    </Link>
                </div>
                
            </div>
            <div className="col-lg-6 col-sm-12 position-relative">
                <div className="bl-wrap pr-lg-5">
                    <div className="b-header">
                        <h3 className="mt-0">{title}</h3>
                    </div>
                    <div className="b-content pt-3 mb-3">
                        <p>{content}</p>
                    </div>
                    <div className="readmore mt-5">
                        <Link to={slug} className='links'>Read more <span className="readmore-icon"></span></Link>
                    </div>
                </div>
            </div>

            
            
        </div>
        ))}   

        <div className="section-bottom text-center pt-3 mt-5" style={{display: "none"}}>
            <a href="/blog" className="btn btn-secondary new-secondary" role="button" >Load More</a>
        </div>
    </div> 
                  </div>
              </div>
            </div>
        </div>
    
    </>
  )
}

export default Bloglist