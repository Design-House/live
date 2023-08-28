import React from 'react';
import { Link, useParams } from 'react-router-dom';
import allposts from '../Json/Test.json';

const Post = () => {
   
  const BlogPosts = allposts;

  const { slug } = useParams();
  const post = BlogPosts[slug];

  if(!post) {
    return <span>The blog post you've requested doesn't exist.</span>;
  }
  

  return (
    <div style={{ padding: 20 }}>
     <Link to="/posts">Back to Posts</Link>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <a href={post.links} target='blank'>Read More</a>
    </div>
  )
}

export default Post