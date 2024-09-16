import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';

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
  
  const [ globalFav, setGlobalFav ] = useState(null);
  const [ selectedPhotos, setSelectedPhotos ] = useState([]);

  const handleClickGlobal = (idParam) => {

     setGlobalFav(idParam); 
  
    const selectedPhoto = preparedPhotos.find(preparedPhoto => preparedPhoto.id === idParam);

    if (selectedPhoto) {
      setSelectedPhotos( selectedPhotos => [...selectedPhotos, selectedPhoto]);
    }
    
  }

  return (
    <div className="App">     
      <HomeRoute photos={preparedPhotos} topics={preparedTopics} globalFavorite={handleClickGlobal}/>
    </div>
  );
};

export default App;
