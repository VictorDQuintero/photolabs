//TODO  However, it's not clear where these props are coming from. Make sure these props are correctly derived from your app's state.
import React from 'react';

import TopNavigation from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';

import '../styles/HomeRoute.scss';

// const HomeRoute = (props) => {
  
//   return (
//     <div className="home-route">
//       {/* Insert React */}
//       <TopNavigation 
//         topics={props.topics} 
//         favoritePhotos={props.favoritePhotos} 
//       />
//       <PhotoList 
//         photos={props.photos} 
//         globalFavorite={props.globalFavorite}
//         displayModal={props.displayModal}
//         isModalOpen={props.isModalOpen}
//       />
//       {   
//         props.isModalOpen 
//         && 
//         <PhotoDetailsModal 
//           photos={props.photos}
//           closeModal={props.displayModal} 
//           isModalOpen={props.isModalOpen} 
//           singlePhotoDetail={props.singlePhotoDetail}
//         />
       
//       }      
//     </div>
//   );
// };

const HomeRoute = ({ photos, topics, globalFavorite, favoritePhotos, displayModal, isModalOpen, singlePhotoDetail, closeModal }) => {
  console.log("HomeRoute photos:", photos); // Debugging line
  return (
    <div className="home-route">
      {/* Render topics and other sections as needed */}
      <TopNavigation 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
       />
      <PhotoList
        photos={photos}
        globalFavorite={globalFavorite}
        favoritePhotos={favoritePhotos}
        displayModal={displayModal}
        isModalOpen={isModalOpen}
        singlePhotoDetail={singlePhotoDetail}
      />
      {isModalOpen && singlePhotoDetail && (
        <PhotoDetailsModal
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail}
          globalFavorite={globalFavorite}
          photos={singlePhotoDetail.similar_photos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
