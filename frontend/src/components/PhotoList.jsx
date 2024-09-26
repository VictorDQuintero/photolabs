//TODO put all of the return inside a single div, import the scss for the modal here and in photolistitem, because I'm going to have to render it conditionally there too

import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";


// const PhotoList = (props) => {

//   const photos = props.photos.map((photo) => {

//     return (
//     <li key={photo.id}>
//       <PhotoListItem 
//       imageSource={photo.urls.regular}
//       profile={photo.user.profile}
//       name={photo.user.name}
//       city={photo.location.city}
//       country={photo.location.country}
//       id={photo.id} // send id to identify potentially favourited picture
//       globalFavorite={props.globalFavorite}
//       // openModal={props.openModal}
//       displayModal={props.displayModal}
//       isModalOpen={props.isModalOpen}
//       />
//     </li>
//     );
//   });
  
//     const similarPhotos = props.isModalOpen && props.singlePhotoDetails ? (
//       props.singlePhotoDetails.similar_photos.map((similarPhoto) => (
        
//         <li key={similarPhoto.id}>
//           <PhotoListItem
//             imageSource={similarPhoto.urls.regular}
//             profile={similarPhoto.user.profile}
//             name={similarPhoto.user.name}
//             city={similarPhoto.location?.city}
//             country={similarPhoto.location?.country}
//             id={similarPhoto.id}
//             globalFavorite={props.globalFavorite}
//             isModalOpen={true}  // This is inside the modal
//           />
//         </li>
//       ))
//     ) : null;

//   return (
// <div>
//     <ul className="photo-list">
//       {/* Insert React */}
      

//       { photos}
//     </ul>
//     {props.isModalOpen && (
//         <ul className="photo-list">
//           {similarPhotos}
//         </ul>
//       )}
//     </div>
//   );
// };

const PhotoList = ({ photos, singlePhotoDetail, displayModal, isModalOpen, globalFavorite }) => {
  console.log("PhotoList photos:", photos); // Debugging line
  const photoItems = photos.map(photo => (
    <li key={photo.id}>
      <PhotoListItem
        imageSource={photo.urls.regular}
        profile={photo.user.profile}
        name={photo.user.name}
        city={photo.location.city}
        country={photo.location.country}
        id={photo.id}
        globalFavorite={globalFavorite}
        displayModal={() => displayModal(photo.id)}
      />
    </li>
  ));

  const similarPhotos = isModalOpen && singlePhotoDetail && Array.isArray(singlePhotoDetail.similar_photos) && singlePhotoDetail.similar_photos.length > 0 
    ? singlePhotoDetail.similar_photos.map(similarPhoto => (
        <li key={similarPhoto.id}>
          <PhotoListItem
            imageSource={similarPhoto.urls.regular}
            profile={similarPhoto.user.profile}
            name={similarPhoto.user.name}
            city={similarPhoto.location?.city}
            country={similarPhoto.location?.country}
            id={similarPhoto.id}
            globalFavorite={globalFavorite}
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
