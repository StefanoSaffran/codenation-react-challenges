import React, { useState } from 'react';

import UserForm from '../../containers/UserForm';
import UserProfile from '../../containers/UserProfile';

const NewUserRoute = () => {
  const [name, setName] = useState('John Doe');
  const [username, setUsername] = useState('johndoe');
  const [email, setEmail] = useState('johndoe@gmail.com');
  const [avatar, setAvatar] = useState('');

  return (
    <div data-testid="new-user-route">
      <UserProfile avatar={avatar} name={name} username={username} />
      <UserForm 
        avatar={avatar}
        setAvatar={setAvatar}
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername} 
        email={email}
        setEmail={setEmail}
      />
    </div>
  );
}

export default NewUserRoute;
