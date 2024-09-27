//TODO fix button, because the heart icon is askew
// might want to consider checking if the photo ID exists in the global favorites array and updating the local state accordingly. This would ensure that the favorite status of a photo is consistent across the application.
import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {

  // const isFavorite =  props.favoritePhotos.find(idItem => idItem === props.id);

  

  // const [ favorited, setFavorited ] = useState(isFavorite ? true : false);

  // const handleClick = () => {
    
  //   setFavorited(!favorited)
  // };  



  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={props.onClick}>
          <FavIcon selected={props.isFavorite}/>
        </button>
    </div>
  </div>
);
}

export default PhotoFavButton;