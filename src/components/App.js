import React from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import ProductItem from './ProductItem';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Caroussel/>
      <ProductItem/>
    </div>
  );
}

export default App;
