import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Post.scss';

const Post = ({ postInfo, userInfo }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const { comments } = postInfo

  return (
    <article className="post" data-testid="post">
      {userInfo && 
        <header className="post__header">
          <div className="user">
          <Link to={`users/${userInfo.name}`} className="user__thumb">
                <img src={userInfo.avatar} alt={userInfo.avatar} />
              </Link>
              <Link to={`users/${userInfo.name}`}>{userInfo.name}</Link>
          </div>
          <button 
            className="post__context" 
            onClick={() => setIsFollowing(!isFollowing)}>
              {isFollowing
                ? <span className="follow-btn is-following">
                    Seguindo
                  </span>
                : <span className="follow-btn">
                    Seguir
                  </span>
              }
              
          </button>
        </header>
      }
      <figure className="post__figure">
        <img src={postInfo.imageUrl} alt=""/>
      </figure>

      {userInfo &&
        <nav className="post__controls">
          <button 
            className="post__control"
            onClick={() => setIsLiked(!isLiked)}>
              {isLiked
                ? <i className="fas fa-heart"></i>
                : <i className="far fa-heart"></i>
              }
          </button>
          <div className="post__status">
            <div className="user">
              <span>
                curtido por <Link>{comments[0]?.name}</Link>&nbsp;
                e outra{((comments.length - 1) + isLiked) > 1 && 's'}&nbsp;
                <Link>{isLiked ? comments.length : comments.length - 1}&nbsp;
                pessoa{((comments.length - 1) + isLiked) > 1 && 's'}</Link>  
              </span>
            </div>
          </div>
        </nav>
      }
    </article>
  );
};

export default Post;
