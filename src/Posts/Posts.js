import React from 'react';
import { Outlet } from 'react-router-dom';

const Posts = () => {
  return (
    <>
        <div>Posts</div>
        <Outlet />
    </>
  )
}

export default Posts