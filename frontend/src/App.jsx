// might want to consider storing the IDs of the favorite photos in the global state instead of the entire photo objects. This would make the state lighter and easier to manage.

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

  const [ globalFavId, setGlobalFavId ] = useState(null);
  const [ selectedPhotos, setSelectedPhotos ] = useState([]);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ singlePhotoDetail, setSinglePhotoDetail ] = useState({})

  const handleClickGlobalId = (idParam) => {

    setGlobalFavId(idParam); // sets the photo id
   
    const selectedPhoto = selectedPhotos.find(id => id === idParam)

    if (selectedPhoto === undefined) {
      setSelectedPhotos(prevPhotos => [...prevPhotos, idParam]) // puts the fav photo id's in array
    } else if(selectedPhoto) {
      setSelectedPhotos( prevPhotos => prevPhotos.filter(id => id !== selectedPhoto));// removes the photo id
    } 

  }

  const handleClickModal = (isModalOpen, photoId) => {
  isModalOpen ? setIsModalOpen(false) : setIsModalOpen(true);
  // setIsModalOpen(prevState => !prevState);

  const photoDetails = preparedPhotos.find(photo => photo.id === photoId);
  
  setSinglePhotoDetail({...photoDetails})
};



  return (
    <div className="App">     
      <HomeRoute 
        photos={preparedPhotos} 
        topics={preparedTopics} 
        globalFavorite={handleClickGlobalId} 
        favoritePhotos={selectedPhotos} 
        isModalOpen={isModalOpen} 
        displayModal={handleClickModal}
        singlePhotoDetail={singlePhotoDetail}
      />      
    </div>
  );
};

export default App;
