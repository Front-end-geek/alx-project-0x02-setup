import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div>
      <nav>
        <ul style={{display: 'flex', gap: '1 rem', listStyleType: 'none'}}>
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
          <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header