import React from 'react';
import { type CardProps } from '../../interfaces';

const Card: React.FC <CardProps> = ({title, content}) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default Card
