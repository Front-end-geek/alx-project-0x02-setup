import React from 'react';
import Card from '@/components/common/Card';

const home: React.FC = () => {
  const cardData = [ 
    { title: 'Card 1', content: 'This is the content of the first card.' },
    { title: 'Card 2', content: 'This is the content of the second card.' },
    { title: 'Card 3', content: 'This is the content of the third card.' },
  ];
  return (
    <div>
      <h1>Welcome to HomePage</h1>
      {cardData.map ((card, index) => (
        <Card  key={index} title={card.title} content={card.content}/>
      ))}
      
    </div>
  )
}

export default home
