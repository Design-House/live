import React from 'react';
import search from '../images/Common/Icons/search.png'

const Blogsearch = () => {
  return (
    <div className="blog-search">
        <div className="section-head pb-5 mb-3 text-center" >
            <h2>The Stories</h2> <br/>
            <div className="search" style={{display: "none"}}>
                <input type="text" className="form-control" placeholder="Search the story…" />
                <button className="btn search-btn"><img src={search} alt="" title="" /></button>
                <p className="mt-4"><span className="search-entries">28 entries</span></p>
            </div>
        </div>
    </div>
    
  )
}

export default Blogsearch