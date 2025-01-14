// pages/posts.tsx
import React from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div>
      <Header />
      <h1 style={{ margin: '16px 0', textAlign: 'center' }}>Posts</h1>
      <div style={{ padding: '0 16px' }}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: PostProps[] = await response.json();

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Posts;

