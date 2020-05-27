import React from 'react';

import './UserProfile.scss';

const UserProfile = ({ avatar, name, username }) => {
  return (
    <section className="profile" data-testid="user-profile">
      <div className="container">
        <div className="profile-data">
          <div className="user">
            <div className="user__thumb">
              {avatar
                ? <img src={avatar} alt={name} />
                : <img src="https://api.adorable.io/avatars/185/x@adorable.png" alt="Avatar" />
              }
            </div>
            <p className="user__name">
              {name || 'John Doe'}
              <span>@{username || 'johndoe'}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default UserProfile;
