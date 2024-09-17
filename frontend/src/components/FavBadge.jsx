//TODO Figure out exactly what does the commented out code means

import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  console.log(isFavPhotoExist);
  return (
    <div className='fav-badge'>
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true}/>
    </div>
  ) 
};

// const FavBadge = ({ selected }) => (
//   <div className='fav-badge'>
//     <FavIcon selected={selected} />
//   </div>
// );

export default FavBadge;