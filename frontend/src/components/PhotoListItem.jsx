import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */


  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={props.photos.imageSource}/>      
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={props.photos.profile} />
        <div className="photo-list__user-info">
          <p>{props.photos.username}</p>
          <p className="photo-list__user-location">{props.photos.location.city}, {props.photos.location.country}</p>
        </div>
      </div>
    </div>
  )
};

export default PhotoListItem;
