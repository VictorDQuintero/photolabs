import React, { useState } from "react";
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
 
  const isFavorite = props.favoritePhotos.includes(props.id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton onClick={() => props.toggleFavorite(props.id)}  isFavorite={isFavorite} />
      <img className="photo-list__image" src={props.imageSource}  onClick={()=> props.displayModal(props.isModalOpen, props.id)}/>      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p>{props.name}</p>
          <p className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>  
    </div>
  )
};

export default PhotoListItem;
