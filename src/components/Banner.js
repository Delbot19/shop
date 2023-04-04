import React from 'react'
import '../styles/Banner.css'

function Banner() {
  let compte=0;
  return (
    <nav>
      <div className='left'>
        <h2>Flemme - For Lyne</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Shop</li>
        </ul>
      </div>
      <button>Cart <span>{compte}</span></button>
    </nav>
  )
}

export default Banner