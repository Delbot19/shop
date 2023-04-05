import React,{useState} from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Caroussel from './Caroussel';
import ShopingList from './ShopingList';
import Footer from './Footer';

function App() {
  const [compteur,setCompteur]=useState(0)

  return (
    <div className="App">
      <Banner compteur={compteur} setCompteur={setCompteur} />
      <Caroussel/>
      <ShopingList compteur={compteur} setCompteur={setCompteur} />
      <Footer/>
    </div>
  );
}

export default App;
