import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
  return (
    <div className="storyReel">
      <Story image="happy2.jpeg" profileSrc="logo192.png" title="React" />
      <Story image="logo512.png" profileSrc="happyphoto.jpeg" title="React" />
      <Story image="logo512.png" profileSrc="rafaelimg.jpeg" title="React" />
      <Story image="logo512.png" profileSrc="happy2.jpeg" title="React" />
      <Story image="logo512.png" profileSrc="logo192.png" title="React" />
    </div>
  );
}

export default StoryReel;
