import React, { useState } from "react";
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */

  // const [ isModalOpen, setIsModalOpen ] = useState(false);

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);

  

  return (
    <div className="photo-list__item">
      <PhotoFavButton globalFavorite={props.globalFavorite} id={props.id} />
      <img className="photo-list__image" src={props.imageSource}  onClick={props.openModal}/>      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.profile} />
        <div className="photo-list__user-info">
          <p>{props.username}</p>
          <p className="photo-list__user-location">{props.city}, {props.country}</p>
        </div>
      </div>    
    </div>
  )
};

export default PhotoListItem;
