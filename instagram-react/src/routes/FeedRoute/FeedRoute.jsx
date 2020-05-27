import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  const getUserHandler = userId => users.find(user => user.id === userId)

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const response = await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users')
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        
      }
    }
  loadUsers();
  }, []);

  useEffect(() => {
    const loadPosts = async () => {
      if (users.length) {
        try {
          for (const user of users) {
            const response = await fetch(`https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${user.id}/posts`)
            const data = await response.json()
            if (data.length) {
              setPosts(oldPosts => ([...oldPosts, ...data]));
            }
          }
        } catch (error) {
        
        } finally {
          setLoading(false)
        }
      }
    }
    loadPosts();
  }, [users]);
  
  useEffect(() => {
    const loadStories = async () => {
      try {
        const response = await fetch('https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories')
        setStories(await response.json())
        
      } catch (error) {
        
      } 
    }
  
    loadStories();
  }, [users]);


  return (
    <div data-testid="feed-route">
      {loading 
        ? <Loading /> 
        : 
          <>
            <Stories stories={stories} getUserHandler={getUserHandler} />
            <Posts posts={posts} getUserHandler={getUserHandler} />
          </>
      }
    </div>
  );
};

export default FeedRoute;
