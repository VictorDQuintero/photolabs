import React from 'react';

import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = (props) => {
// console.log(props.singlePhotoDetail)

//   return (
//     <div className="photo-details-modal">
//       <div className="photo-details-modal__top-bar">
//         <button className="photo-details-modal__close-button" onClick={props.closeModal}>
//           <img src={closeSymbol} alt="close symbol" />
//         </button>      
//       </div>
//       <PhotoFavButton globalFavorite={props.globalFavorite} id={props.id} />
//       <div className="photo-details-modal__image" >
//       <img  src={props.singlePhotoDetail.urls.full} />
//       </div>
//       <div className="photo-details-modal__header"> 
//         <div className="photo-details-modal__photographer-details">
//           <img src={props.singlePhotoDetail.user.profile} alt="" className="photo-details-modal__photographer-profile"/>
//           <div className="photo-details-modal__photographer-info">
//             <p>{props.singlePhotoDetail.user.name}</p>
//             <p className="photo-details-modal__photographer-location">{props.singlePhotoDetail.location.city} {props.singlePhotoDetail.location.country}</p>
//           </div>
//         </div>
//       </div>  
//       <div className={"photo-details-modal__images"}>
//         <PhotoList 
//         photos={props.photos} 
//         singlePhotoDetail={props.singlePhotoDetail}
//         displayModal={props.displayModal}
//         isModalOpen={props.isModalOpen}
//         />
//       </div>
      
//     </div>
//   )
// };

const PhotoDetailsModal = ({ closeModal, singlePhotoDetail, globalFavorite, photos }) => {
  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__top-bar">
        <button className="photo-details-modal__close-button" onClick={closeModal}>
          <img src={closeSymbol} alt="close symbol" />
        </button>
      </div>
      <PhotoFavButton globalFavorite={globalFavorite} id={singlePhotoDetail.id} />
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
            photos={photos}
            singlePhotoDetail={singlePhotoDetail}
            displayModal={closeModal} // Assuming similar photos do not open new modals
            isModalOpen={true}
            globalFavorite={globalFavorite}
          />
        </div>
      </div>
    </div>
  );
};


export default PhotoDetailsModal;

