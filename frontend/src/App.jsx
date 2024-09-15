import React from 'react';

import PhotoList from './components/PhotoList';
import TopicList from 'components/TopicList';
import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {

  return (
    <div className="App">     
    {/* { Array.from(Array(3)).map((_, index) => <PhotoListItem key={index}/>) } */}
    <PhotoList/>       
      {/* {photo}       */}
      {/* { Array.from(Array(3)).map((_, index) => <TopicListItem key={index}/>) } */}
      <TopicList />
    </div>
  );
};

export default App;
