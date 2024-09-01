import React from 'react';
import { useParams } from 'react-router-dom';

function BlogPost() {
  const { id } = useParams(); // Get the dynamic :id parameter from the URL

  return (
    <div>
      <h2>Blog Post {id}</h2>
      <p>This is the content of blog post with ID: {id}.</p>
    </div>
  );
}

export default BlogPost;
