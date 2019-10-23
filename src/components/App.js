import React from 'react';

import SiderBar from './Sidebar';
import Header from './Header';
import Realtors from './Realtors';
import Features from './Features';
import StoryPictures from './StoryPictures';
import StoryContent from './StoryContent';
import Homes from './Homes';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
      <SiderBar/>
      <Header/>
      <Realtors/>
      <Features/>
      <StoryPictures/>
      <StoryContent/>
      <Homes/>
      <Gallery/>
      <Footer/>
    </div>
  );
}

export default App;
