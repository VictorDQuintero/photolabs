//TODO Check with mentor if there's another way of styling the button other than making a new style. Check the style in TopNavigationBar.scss

import React, { useState } from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = () => {

  const [ favorited, setFavorited ] = useState(false);

  const handleClick = () => setFavorited(!favorited);  

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList />
       <button className="fav-button" onClick={handleClick}>
          <FavBadge selected={favorited}/>
        </button>
      
    </div>
  )
}

export default TopNavigation;