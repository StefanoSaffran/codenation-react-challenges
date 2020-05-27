import React, { useCallback, useState } from "react";

import { Link } from 'react-router-dom';

import './Story.scss';

const Story = ({ story, user, handleClose }) => {
  const [metadata, setMetadata] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const updateProgress = useCallback(
    () => {
      if (metadata?.duration !== null  && currentTime !== null) {
        const elapsedTime = ((currentTime / metadata.duration) * 100);
  
        return `${elapsedTime.toFixed(2)}%`;
      }
  
      return '0%';
    }, [metadata, currentTime]);

  return (
    <section className="story" data-testid="story">
      <div className="container">
        <header className="story__header">
          <div className="user">
            <Link to={`users/${user.name}`} className="user__thumb">
              <img src={user.avatar} alt={user.avatar} />
            </Link>
            <Link to={`users/${user.name}`}>{user.name}</Link>
          </div>
          <button className="story__close" onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </header>
        <div className="story__progress">
          <div
            style={{ width: updateProgress()}}
            className="story__progress__elapsed"
          />
        </div>
      </div>

      {story.videoUrl && (
        <div className="container">
          <section className="story__video__wrapper">
            <video 
              src={story.videoUrl}
              className="video-player"
              autoPlay
              loop
              playsInline
              onTimeUpdate={({ target }) => setCurrentTime(target.currentTime)}
              onLoadedMetadata={({ target }) => {
                setMetadata({
                  videoHeight: target.videoHeight,
                  videoWidth: target.videoWidth,
                  duration: target.duration
                })
              }}
            />
          </section>
        </div>
      )
      
      }
    </section>
  );
};

export default Story;
