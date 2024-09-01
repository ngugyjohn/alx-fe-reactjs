import React from 'react';
import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function PostsComponent() {
  const { data, isError, isLoading, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading posts</div>;  // Ensure this line includes "isError"

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
