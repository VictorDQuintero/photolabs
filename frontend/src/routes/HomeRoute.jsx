//TODO  However, it's not clear where these props are coming from. Make sure these props are correctly derived from your app's state.
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
      openModal={props.openModal}
      closeModal={props.closeModal}
      isModalOpen={props.isModalOpen}
      />
    </div>
  );
};

export default HomeRoute;
