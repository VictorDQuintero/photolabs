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
  const { updateToFavPhotos, favoritePhotos, setPhotoSelected, isModalOpen, singlePhotoDetail, onClosePhotoDetailsModal } = useApplicationData();

  // const [ globalFavId, setGlobalFavId ] = useState(null);
  // const [ favoritePhotos, setFavoritePhotos ] = useState([]);
  // const [ isModalOpen, setIsModalOpen ] = useState(false);
  // const [ singlePhotoDetail, setSinglePhotoDetail ] = useState({})
  
  // const addFavorite = (id) => {
  //   setFavoritePhotos(prevPhotos => [...prevPhotos, id]) // puts the fav photo id's in array
  // }

  // const removeFavorite = (id) => {
  //   setFavoritePhotos( prevPhotos => prevPhotos.filter(idItem => idItem !== id));// removes the photo id
  // }

  // const handleClickFav = (id) => {

  //   setGlobalFavId(id); // sets the photo id  

  //   favoritePhotos.includes(id) ? removeFavorite(id) : addFavorite(id);

  // }

// const openModal = (photoId) => {
//   const photoDetails = preparedPhotos.find(photo => photo.id === photoId) || {};
//   let similarPhotosArray = photoDetails.similar_photos || [];

//   //make use of prepareddata function

//   if (typeof similarPhotosArray === "object" && !Array.isArray(similarPhotosArray)) {
//     similarPhotosArray = Object.values(similarPhotosArray);
//   }

//   console.log("Opening Modal with photoDetails:", photoDetails);
//   console.log("Similar Photos:", similarPhotosArray);

//   if (!singlePhotoDetail || singlePhotoDetail.id !== photoId) {
//     setSinglePhotoDetail({
//       ...photoDetails,
//       similar_photos: similarPhotosArray
//     });
//     setIsModalOpen(true);
//   }

//   setSinglePhotoDetail({
//     ...photoDetails,
//     similar_photos: similarPhotosArray
//   });
//   setIsModalOpen(true);
// };

// const closeModal = () => {
//   setIsModalOpen(false);
//   setSinglePhotoDetail({similar_photos: []}); // Reset to initial state
// };


return (
  <div className="App">
    <HomeRoute
      photos={preparedPhotos}
      topics={preparedTopics}
      toggleFavorite={updateToFavPhotos}
      favoritePhotos={favoritePhotos}
      displayModal={setPhotoSelected}
      isModalOpen={isModalOpen}
      singlePhotoDetail={singlePhotoDetail}
      closeModal={onClosePhotoDetailsModal}
    />
  </div>
);
};

export default App;
