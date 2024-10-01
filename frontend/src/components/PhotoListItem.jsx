import React from "react";
import PhotoFavButton from 'components/PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ favoritePhotos, id, isModalOpen, displayModal, updateToFavPhotos, imageSource, profile, name, city, country }) => {
 
  const isFavorite = favoritePhotos.includes(id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={() => updateToFavPhotos(id)}  isFavorite={isFavorite} />
      <img className="photo-list__image" src={imageSource}  onClick={()=> displayModal(isModalOpen, id)}/>      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={profile} />
        <div className="photo-list__user-info">
          <p>{name}</p>
          <p className="photo-list__user-location">{city}, {country}</p>
        </div>
      </div>  
    </div>
  )
};

export default PhotoListItem;
