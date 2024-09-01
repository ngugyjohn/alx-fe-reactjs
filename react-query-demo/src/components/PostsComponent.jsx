import React from 'react';
import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
}

function PostsComponent() {
  const { data, isError, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 1000 * 60 * 5,  // Cache data for 5 minutes
    staleTime: 1000 * 60,  // Data is fresh for 1 minute
    refetchOnWindowFocus: true,  // Refetch data when window regains focus
    keepPreviousData: true,  // Keep previous data while fetching new data
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

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
