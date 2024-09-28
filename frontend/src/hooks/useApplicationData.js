//TODO Deal with state object that will contain entire state of application

import React, { useState } from 'react';

const useApplicationData = (preparedPhotos) => {
  
   const [ state, setState ] = useState({
    favoritePhotos: [],
    isPhotoSelected: null,
    singlePhotoDetail: [],
  })
  // Handles the Favorite Functionality
  
  const addFavorite = (id) => {
    setState(prevState => ({
      ...prevState,  // Spread the previous state
      favoritePhotos: [...prevState.favoritePhotos, id]  // Add new photo ID
    }));
  };
  
  const removeFavorite = (id) => {
    setState(prevState => ({
      ...prevState, 
      favoritePhotos: prevState.favoritePhotos.filter(idItem => idItem !== id)
    }));
  };

  const updateToFavPhotos = (id) => {
    state.favoritePhotos.includes(id) ? removeFavorite(id) : addFavorite(id);
  }

  // Handles What happens when a Photo is selected, , i.e. opens the Modal

  const openModal = (photo) => {
    setState(prevState => ({
      ...prevState,
      isModalOpen: true,
      singlePhotoDetail: []
    }));
  };

  const setPhotoSelected = (photoId) => {
    const photoDetails = preparedPhotos.find(photo => photo.id === photoId) || {};
    let similarPhotosArray = photoDetails.similar_photos || [];
  
    //make use of prepareddata function
  
    // Convert similarPhotosArray from object to array if necessary
  if (!Array.isArray(similarPhotosArray)) {
    similarPhotosArray = typeof similarPhotosArray === "object" ? Object.values(similarPhotosArray) : [];
  }
    
    if (!singlePhotoDetail || singlePhotoDetail.id !== photoId) {
      setState(prevState => ({
        ...prevState,
        isPhotoSelected: true,
        singlePhotoDetail: {
          ...photoDetails,
          similar_photos: similarPhotosArray
        }
      }));  
      
    }
  
  };

  // Handles Modal closing

  const onClosePhotoDetailsModal = () => {
    setState(prevState => ({
      ...prevState,
      isPhotoSelected: false,
      singlePhotoDetail: {similar_photos:[]}
      
    }));
    
  };

  return {
    
    state,
    updateToFavPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };


};

export default useApplicationData;