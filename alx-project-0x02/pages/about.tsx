
// pages/about.tsx
import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

const About = () => {
  const handleClick = (size: string, shape: string) => {
    console.log(`Button clicked! Size: ${size}, Shape: ${shape}`);
  };

  return (
    <div>
      <Header />
      <h1>About Us</h1>
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button size="small" shape="rounded-sm" onClick={() => handleClick('small', 'rounded-sm')}>
          Small Rounded
        </Button>
        <Button size="medium" shape="rounded-md" onClick={() => handleClick('medium', 'rounded-md')}>
          Medium Rounded
        </Button>
        <Button size="large" shape="rounded-full" onClick={() => handleClick('large', 'rounded-full')}>
          Large Rounded
        </Button>
      </div>
    </div>
  );
};

export default About;
