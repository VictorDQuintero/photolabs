

import React, { useReducer, useEffect } from 'react';

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      
      return { ...state, favoritePhotos: [...state.favoritePhotos, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
     
      return { ...state, favoritePhotos: state.favoritePhotos.filter(idItem => idItem !== action.payload.id) };
    case ACTIONS.SET_PHOTO_DATA:
     
      return { ...state, photoData: action.payload.data };
    case ACTIONS.SET_TOPIC_DATA:
      
      return { ...state, topicData: action.payload.data };
    case ACTIONS.SELECT_PHOTO:
      
      return {
        ...state,
        isPhotoSelected: true,
        singlePhotoDetail: {
          ...action.payload.photoDetails,
          similar_photos: action.payload.similarPhotosArray
        }
      };
    case ACTIONS.DISPLAY_PHOTO_DETAILS:
      // Your logic for displaying photo details
      return { ...state, displayDetails: action.payload.display };
    case ACTIONS.CLOSE_MODAL:
      return { ...state, isPhotoSelected: false,
        singlePhotoDetail: {} }
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {

  const initialState = {
    favoritePhotos: [],
    isPhotoSelected: null,
    singlePhotoDetail: [],
    photoData: [],
    topicData: []
  }
  
   const [ state, dispatch ] = useReducer(reducer, initialState)

   useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: { data }});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: { data }});
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
   
  // Handles the Favorite Functionality
  
  const addFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id } });
   
  };
  
  const removeFavorite = (id) => {
    dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id } });
  };

  const updateToFavPhotos = (id) => {
    state.favoritePhotos.includes(id) ? removeFavorite(id) : addFavorite(id);
  }

  // Handles What happens when a Photo is selected, , i.e. opens the Modal

  const setPhotoSelected = (photoId) => {
    const photoDetails = state.photoData.find(photo => photo.id === photoId) || {};
    let similarPhotosArray = photoDetails.similar_photos || [];
  
    //make use of prepareddata function
  
    // Convert similarPhotosArray from object to array if necessary
  if (!Array.isArray(similarPhotosArray)) {
    similarPhotosArray = typeof similarPhotosArray === "object" ? Object.values(similarPhotosArray) : [];
  }
    
    if (!state.singlePhotoDetail || state.singlePhotoDetail.id !== photoId) {
      dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { photoDetails, similarPhotosArray } })
    
    };
  
  };

  // Handles Modal closing

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL})
        
  };

  return {
    
    state,
    updateToFavPhotos,
    setPhotoSelected,
    onClosePhotoDetailsModal,
  };


};

export default useApplicationData;