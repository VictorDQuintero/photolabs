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

  const preparedPhotos = prepareData(photos);
  const preparedTopics = prepareData(topics);
  const { 
          state,
          updateToFavPhotos, 
          setPhotoSelected,   
          onClosePhotoDetailsModal 
        } = useApplicationData(preparedPhotos);

return (
  <div className="App">
    <HomeRoute
      photos={preparedPhotos}
      topics={preparedTopics}
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
