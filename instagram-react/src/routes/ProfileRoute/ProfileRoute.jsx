import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import UserProfile from '../../containers/UserProfile';
import UserPosts from '../../containers/UserPosts';

import Loading from '../../components/Loading';

import api from '../../services/api';

const ProfileRoute = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const response = await fetch(`${api}/users?search=${username}`)
        const data = await response.json();
        setUser(data[0])
        
      } catch (err){
        console.log(err)    
      }
    }
    loadUser()
  }, [username]);

  useEffect(() => {
    if (user?.id) {
      const loadPosts = async () => {
        try {
          const response = await fetch(`${api}/users/${user.id}/posts`)
          const data = await response.json();
          setPosts(data)
          
        } catch (err){
          console.log(err)    
        }
      }
      loadPosts()
    }
  
  }, [user]);

  return (
    <div data-testid="profile-route">
      {user
        ? 
          <>
            <UserProfile avatar={user?.avatar} name={user?.name} username={user?.username} />
            <UserPosts posts={posts}/>
          </>
        : <Loading />
      }
    </div>
  );
};

export default ProfileRoute;
