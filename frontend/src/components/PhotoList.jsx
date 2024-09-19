import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {

  const photos = props.photos.map((photo) => {

    return (
    <li key={photo.id}>
      <PhotoListItem 
      imageSource={photo.urls.regular}
      profile={photo.user.profile}
      name={photo.user.name}
      city={photo.location.city}
      country={photo.location.country}
      id={photo.id} // send id to identify potentially favourited picture
      globalFavorite={props.globalFavorite}
      openModal={props.openModal}
      closeModal={props.closeModal}
      isModalOpen={props.isModalOpen}
      />
    </li>
    );
  });

  return (
    <ul className="photo-list">
      {/* Insert React */}
      {photos}
    </ul>
  );
};

export default PhotoList;
