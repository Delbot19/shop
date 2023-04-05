import React from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import ShopingList from './ShopingList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Caroussel/>
      <ShopingList/>
      <Footer/>
    </div>
  );
}

export default App;
