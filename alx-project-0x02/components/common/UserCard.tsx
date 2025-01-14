import React from 'react';
import { UserProps } from '@/interfaces';

const userCard: React.FC<UserProps> = ({ name, email, address}) => {
  return( 
    <div
     style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        backgroundColor: '#f9f9f9',
      }}>

<h2 style={{ margin: '0 0 8px 0', fontSize: '1.5rem' }}>{name}</h2>
      <p style={{ margin: '0 0 8px 0', color: '#555' }}>{email}</p>
      <p style={{ margin: '0', color: '#777' }}>
        {address.street}, {address.city}, {address.zipcode}
      </p>
      
    </div>
  )
}

export default userCard
