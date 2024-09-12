import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <div>
      <img src={props.photo.imageSource}/>
      <img src={props.photo.profile} />
      <p>{props.photo.username}</p>
      <p>{props.photo.location.city} {props.photo.location.country}</p>
    </div>
  )
};

export default PhotoListItem;
