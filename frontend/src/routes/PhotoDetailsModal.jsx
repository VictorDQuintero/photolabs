//TODO at the moment if a user clicks a picture outside of the modal it will display in the modal, this shouldn't happen, the backpage should be neutralized
//TODO there is a potentially unnecessary prop: photo
import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail, toggleFavorite, photos, favoritePhotos, similarPhotos }) => {
  
  const isFavorite = favoritePhotos.includes(singlePhotoDetail.id);

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton onClick={() => toggleFavorite(singlePhotoDetail.id)}  isFavorite={isFavorite} />
      <div className="photo-details-modal__images">
        <img className="photo-details-modal_image" src={singlePhotoDetail.urls.full} alt={singlePhotoDetail.description} />     
        <div className="photo-details-modal__photographer-details">
          <img src={singlePhotoDetail.user.profile} alt="" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <p>{singlePhotoDetail.user.name}</p>
            <p className="photo-details-modal__photographer-location">{singlePhotoDetail.location.city} {singlePhotoDetail.location.country}</p>
          </div>
        </div>
        <div className="photo-details-modal__header">
          Similar Photos
        </div>      
        <div className="photo-details-modal__images">
          <PhotoList
            photos={similarPhotos}
            singlePhotoDetail={singlePhotoDetail}            
            toggleFavorite={toggleFavorite}
            favoritePhotos={favoritePhotos}
          />
        </div>
      </div>
    </div>
  );
};


export default PhotoDetailsModal;

