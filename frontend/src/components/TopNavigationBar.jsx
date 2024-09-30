import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = ({ topics, handleTopicClick, favoritePhotos, handleLogoClick}) => {

const isFavPhotoExist = favoritePhotos.length > 0;

 return (
    <div className="top-nav-bar">
      <button onClick={handleLogoClick}>
        <span className="top-nav-bar__logo">PhotoLabs</span>
      </button>
      <TopicList topics={topics} handleTopicClick={handleTopicClick} />
          <FavBadge isFavPhotoExist={isFavPhotoExist} />             
    </div>
  )
}

export default TopNavigation;