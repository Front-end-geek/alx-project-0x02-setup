import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({userId, title, body}) => {
  return (
    <div
    style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
      }}>
      <h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>
        {title}
      </h2>
      <p style={{ margin: '0 0 8px 0', color: '#555' }}>
        {body}
      </p>
      <small style={{ color: '#999' }}>
       User ID : {userId}
      </small>
    </div>
  )
}

export default PostCard
