import React from 'react';

// import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  // const photosArr = [];

  // for (let i = 0; i < 3; i++){
  //   photosArr.push(sampleDataForPhotoListItem);    
  // }

  // const photo = photosArr.map((samplePhoto, index) => {
  //   return (
  //     <PhotoListItem 
  //       key={index}
  //       photo={samplePhoto}
  //     />   
  //   );
  // });

  return (
    <div className="App">     
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList/>       
      {/* {photo}       */}
    </div>
  );
};

export default App;
