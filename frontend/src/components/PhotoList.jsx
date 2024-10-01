import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, singlePhotoDetail, displayModal, isModalOpen, updateToFavPhotos, favoritePhotos }) => {
   
  const photoItems = photos.map(photo => (
    <li key={photo.id}>
      <PhotoListItem
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        name={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
        id={photo.id}
        updateToFavPhotos={updateToFavPhotos}
        favoritePhotos={favoritePhotos}
        displayModal={() => displayModal(photo.id)}
      />
    </li>
  ));

  isModalOpen && singlePhotoDetail && Array.isArray(singlePhotoDetail.similar_photos) && singlePhotoDetail.similar_photos.length > 0 
    ? singlePhotoDetail.similar_photos.map(similarPhoto => (
        <li key={similarPhoto.id}>
          <PhotoListItem
            imageSource={similarPhoto.urls.regular}
            profile={similarPhoto.user.profile}
            name={similarPhoto.user.name}
            city={similarPhoto.location.city}
            country={similarPhoto.location.country}
            id={similarPhoto.id}
            updateToFavPhotos={updateToFavPhotos}
            favoritePhotos={favoritePhotos}
          />
        </li>
      ))
    : null;

  return (
    <div>
      <ul className="photo-list">
        {photoItems}
      </ul>      
    </div>
  );
};

export default PhotoList;
