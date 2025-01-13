import React, {useState} from 'react';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

const home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Card 1', content: 'This is the content of the first card.' },
    { title: 'Card 2', content: 'This is the content of the second card.' },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };
  return (
    <div>
       <h1>Welcome to the Home Page</h1>
      <button
        onClick={() => setIsModalOpen(true)}
        style={{
          padding: '10px 20px',
          marginBottom: '20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add New Post
      </button>
      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
     
    </div>
  )
}

export default home
