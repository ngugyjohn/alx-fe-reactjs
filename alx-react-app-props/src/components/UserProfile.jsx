import React, { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

const UserProfile = () => {
  const { name, age, bio } = useContext(UserContext); // Use useContext to access user data

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{age}</span></p>
      <p>Bio: <span style={{ fontStyle: 'italic' }}>{bio}</span></p>
    </div>
  );
};

export default UserProfile;
