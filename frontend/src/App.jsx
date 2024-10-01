import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

import './App.scss';

const App = () => {

  const { 
          state,
          updateToFavPhotos, 
          setPhotoSelected,   
          onClosePhotoDetailsModal,
          handleTopicClick,
          handleLogoClick
        } = useApplicationData();

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
