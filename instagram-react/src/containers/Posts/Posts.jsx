import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
 return (
  <div className="container" data-testid="posts">
    <section className="feed">
      {posts?.map(post => {
        const user = getUserHandler(post.userId)
        return (
          <Post key={post.id} postInfo={post} userInfo={user} />
        )
      })}
    </section>
  </div>
 )

}

export default Posts;
