//TODO fix button, because the heart icon is askew
// might want to consider checking if the photo ID exists in the global favorites array and updating the local state accordingly. This would ensure that the favorite status of a photo is consistent across the application.
import React from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({onClick, isFavorite}) {

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={onClick}>
          <FavIcon selected={isFavorite}/>
        </button>
    </div>
  </div>
);
}

export default PhotoFavButton;