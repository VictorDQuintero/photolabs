import React, { useState } from 'react';


import photos from 'mocks/photos';
import topics from 'mocks/topics';

/* 
Our useApplicationData Hook will return an object with four keys representing the following items:

The state object will contain the entire state of the application.
The updateToFavPhotoIds action can be used to set the favourite photos.
The setPhotoSelected action can be used when the user selects a photo.
The onClosePhotoDetailsModal action can be used to close the modal.
*/

const prepareData = function (object) {
  return Object.values(object);
}

const useApplicationData = () => {

  const preparedPhotos = prepareData(photos);
  const preparedTopics = prepareData(topics);

  // const [ globalFavId, setGlobalFavId ] = useState(null);
  const [ favoritePhotos, setFavoritePhotos ] = useState([]);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ singlePhotoDetail, setSinglePhotoDetail ] = useState({})

  const addFavorite = (id) => {
    setFavoritePhotos(prevPhotos => [...prevPhotos, id]) // puts the fav photo id's in array
  }

  const removeFavorite = (id) => {
    setFavoritePhotos( prevPhotos => prevPhotos.filter(idItem => idItem !== id));// removes the photo id
  }

  const updateToFavPhotos = (id) => {

    // setGlobalFavId(id); // sets the photo id  

    favoritePhotos.includes(id) ? removeFavorite(id) : addFavorite(id);

  }

  const setPhotoSelected = (photoId) => {
    const photoDetails = preparedPhotos.find(photo => photo.id === photoId) || {};
    let similarPhotosArray = photoDetails.similar_photos || [];
  
    //make use of prepareddata function
  
    if (typeof similarPhotosArray === "object" && !Array.isArray(similarPhotosArray)) {
      similarPhotosArray = Object.values(similarPhotosArray);
    }
  
    console.log("Opening Modal with photoDetails:", photoDetails);
    console.log("Similar Photos:", similarPhotosArray);
  
    if (!singlePhotoDetail || singlePhotoDetail.id !== photoId) {
      setSinglePhotoDetail({
        ...photoDetails,
        similar_photos: similarPhotosArray
      });
      setIsModalOpen(true);
    }
  
    setSinglePhotoDetail({
      ...photoDetails,
      similar_photos: similarPhotosArray
    });
    setIsModalOpen(true);
  };

  const onClosePhotoDetailsModal = () => {
    setIsModalOpen(false);
    setSinglePhotoDetail({similar_photos: []}); // Reset to initial state
  };

  return {
    
    updateToFavPhotos,
    favoritePhotos,
    setPhotoSelected,
    isModalOpen,
    singlePhotoDetail,
    onClosePhotoDetailsModal,
  };


};

export default useApplicationData;