//TODO fix button, because the heart icon is askew
import React, { useCallback, useState } from 'react';

import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton() {

  const [ favorited, setFavorited ] = useState(false);

  const handleClick = () => setFavorited(!favorited);  

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <button onClick={handleClick}>
          <FavIcon selected={favorited}/>
        </button>
    </div>
  </div>
);
}

export default PhotoFavButton;