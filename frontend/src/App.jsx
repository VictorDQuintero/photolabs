// make use of helper function in singlePhotoDetail state

import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

import photos from 'mocks/photos';
import topics from 'mocks/topics';

import './App.scss';

const prepareData = function (object) {
    return Object.values(object);
  }

// Note: Rendering a single component to build components in isolation
const App = () => {

  const { 
          state,
          updateToFavPhotos, 
          setPhotoSelected,   
          onClosePhotoDetailsModal,
          handleTopicClick,
          handleLogoClick
        } = useApplicationData();

      console.log("This is photos by topic: ", state.photosByTopic)

return (
  <div className="App">
    <HomeRoute
      photos={state.photoData}
      topics={state.topicData}
      photosByTopic={state.photosByTopic}
      handleTopicClick={handleTopicClick}
      handleLogoClick={handleLogoClick}
      toggleFavorite={updateToFavPhotos}
      favoritePhotos={state.favoritePhotos}
      displayModal={setPhotoSelected}
      isModalOpen={state.isPhotoSelected}
      singlePhotoDetail={state.singlePhotoDetail}
      closeModal={onClosePhotoDetailsModal}
    />
  </div>
);
};

export default App;
