//TODO Check with mentor if there's another way of styling the button other than making a new style. Check the style in TopNavigationBar.scss
//TODO the favbdge does not need to be a button, at least not now

import React, { useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, handleTopicClick, favoritePhotos}) => {

const isFavPhotoExist = favoritePhotos.length > 0;

 return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
          <FavBadge isFavPhotoExist={isFavPhotoExist} />             
    </div>
  )
}

export default TopNavigation;