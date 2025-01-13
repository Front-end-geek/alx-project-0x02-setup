import React, {useState} from 'react'
import { PostModalProps } from '@/interfaces'

const PostModal: React. FC <PostModalProps> = ({isOpen, onClose, onSubmit}) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React. FormEvent) => {
        e.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
        onClose();
    };
    if (!isOpen) return null;
  return (
    <div
    style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
      style={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        width: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <h2>
            Create A New Post
        </h2>
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="">
                    Title:
                
                <input type="text"
                value={title}
                onChange={ (e) =>setTitle(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                 />
                 </label>
                 
            </div>
            <div>
            <label htmlFor="">
                    Content
                 
                 <textarea 
                 value={content}
                 onChange={(e) => setContent(e.target.value)}
                 style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                rows={4}
                required
                 />
                 </label>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="button" onClick={onClose} style={{ padding: '8px 16px' }}>
              Cancel
            </button>
            <button type="submit" style={{ padding: '8px 16px' }}>
              Submit
            </button>
            </div>
        </form>

      </div>
    </div>
  )
}

export default PostModal
