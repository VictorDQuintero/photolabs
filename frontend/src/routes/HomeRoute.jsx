import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, toggleFavorite, favoritePhotos, displayModal, isModalOpen, singlePhotoDetail, closeModal, handleTopicClick, photosByTopic, handleLogoClick }) => {

  const isPhotosByTopicTrue = Object.keys(photosByTopic).length === 1;  
  const topicPhotos = photosByTopic[Object.keys(photosByTopic)] || [];
    
  return (
    <div className="home-route">
      
      <TopNavigation 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
        handleTopicClick={handleTopicClick} 
        handleLogoClick={handleLogoClick}       
       />
       {/* Conditional rendering of Pictures By Topic and All of the pictures */}
       { isPhotosByTopicTrue ? (
        <PhotoList
        photos={topicPhotos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        displayModal={displayModal}
        isModalOpen={isModalOpen}
        singlePhotoDetail={singlePhotoDetail}
      />
       ) : (
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        displayModal={displayModal}
        isModalOpen={isModalOpen}
        singlePhotoDetail={singlePhotoDetail}
      />) }
    
      
      { isModalOpen && singlePhotoDetail && (
        <PhotoDetailsModal
          photos={photos}
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          similarPhotos={singlePhotoDetail.similar_photos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
