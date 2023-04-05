import React from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import ShopingList from './ShopingList';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Caroussel/>
      <ShopingList/>
    </div>
  );
}

export default App;
