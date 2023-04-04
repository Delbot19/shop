import React from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import Produits from './Produits';
function App() {
  return (
    <div className="App">
      <Banner/>
      <Caroussel/>
      <Produits/>
    </div>
  );
}

export default App;
