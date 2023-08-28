import React from 'react';
import notfound from './images/404/404.png'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className='pagenot'>
      <img src={notfound} title="404" alt="404"  />
      <br/>
      <Link to="/designhouse" class="btn btn-primary new-primary"  >Back To Home</Link>
    </div>
  )
}

export default PageNotFound