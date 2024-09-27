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

const HomeRoute = ({ photos, topics, toggleFavorite, favoritePhotos, displayModal, isModalOpen, singlePhotoDetail, closeModal }) => {
  console.log("In home route: ", favoritePhotos); // Debugging line
  return (
    <div className="home-route">
      {/* Render topics and other sections as needed */}
      <TopNavigation 
        topics={topics} 
        favoritePhotos={favoritePhotos} 
       />
      <PhotoList
        photos={photos}
        toggleFavorite={toggleFavorite}
        favoritePhotos={favoritePhotos}
        displayModal={displayModal}
        isModalOpen={isModalOpen}
        singlePhotoDetail={singlePhotoDetail}
      />
      {isModalOpen && singlePhotoDetail && (
        <PhotoDetailsModal
          photos={photos}
          closeModal={closeModal}
          singlePhotoDetail={singlePhotoDetail}
          toggleFavorite={toggleFavorite}
          favoritePhotos={favoritePhotos}
          similarPhotos={singlePhotoDetail.similar_photos}
        />
      )}
    </div>
  );
};

export default HomeRoute;
