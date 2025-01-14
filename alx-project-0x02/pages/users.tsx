// pages/users.tsx
import React from 'react';
import Header from '../components/layout/Header';
import UserCard from '../components/common/UserCard';
import { UserProps } from '../interfaces';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <h1 style={{ margin: '16px 0', textAlign: 'center' }}>Users</h1>
      <div style={{ padding: '0 16px' }}>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
            id={user.id}
          />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await response.json();

    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
    };
  }
}

export default Users;
