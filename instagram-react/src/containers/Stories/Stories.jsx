import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  const [showStory, toggleShowStory] = useState(false);
  const [selectedStory, setSelectedStory] = useState({});
  const [selectedUser, setSelectedUser] = useState({});

  const handleShowStory = story => {
    const user = getUserHandler(story.userId);
    setSelectedUser(user);
    setSelectedStory(story);
    toggleShowStory(!showStory);
  }

  return (
    <React.Fragment>
      <section className="stories" data-testid="stories">
        <div className="container">
          {stories?.map((story, index) => {
            const user = getUserHandler(story.userId);
            return (
              user && (
              <button 
                key={story.userId}
                className={`user__thumb ${index === 0 && 'user__thumb--hasNew'}`}
                onClick={() => handleShowStory(story)}
              >
                <div className="user__thumb__wrapper">
                  <img src={user?.avatar} alt={user?.name}/>
                </div>
              </button>

              )
            )
          }
          )}
        </div>
      </section>

      {showStory && (
        <Story 
          story={selectedStory} 
          user={selectedUser} 
          handleClose={() => toggleShowStory(!showStory)}
        />
        )}
    </React.Fragment>
  );
};

export default Stories;
