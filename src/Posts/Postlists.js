import React from 'react';
import { Link } from 'react-router-dom';
import allposts from '../Json/Test.json'

const Postlists = () => {
   
  const BlogPosts = allposts;

  return (
    <ul>
      {Object.entries(BlogPosts).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Postlists