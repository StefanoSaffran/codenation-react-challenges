import React, { useState, useEffect } from 'react';

import UsersList from '../../containers/UsersList/UsersList';

import api from '../../services/api';

const UsersRoute = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await fetch(`${api}/users`);
      const data = await response.json();
      setUsers(data)
    }

    loadUsers();
  }, []);

  return (
    <div className="container" data-testid="users-route">
      <UsersList users={users} />
    </div>
  );
};

export default UsersRoute;
