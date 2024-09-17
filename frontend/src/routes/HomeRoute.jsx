import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';

import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  return (
    <div className="home-route">
      {/* Insert React */}
      <TopNavigation 
      topics={props.topics} 
      favoritePhotos={props.favoritePhotos} 
      />
      <PhotoList 
      photos={props.photos} 
      globalFavorite={props.globalFavorite}
      globalIsFavorite={props.globalIsFavorite}
      />
    </div>
  );
};

export default HomeRoute;
