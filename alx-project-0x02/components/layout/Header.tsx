// components/layout/Header.tsx
import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header
      style={{
        backgroundColor: '#007BFF',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
    >
      <h1 style={{ margin: 0 }}>My Website</h1>
      <nav>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px', margin: 0, padding: 0 }}>
          <li>
            <Link href="/home" style={{ color: 'white', textDecoration: 'none' }}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" style={{ color: 'white', textDecoration: 'none' }}>
              About
            </Link>
          </li>
          <li>
            <Link href="/posts" style={{ color: 'white', textDecoration: 'none' }}>
              Posts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
