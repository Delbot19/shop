import React from 'react'
import '../styles/ProductItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function ProductItem({ id,sale,name,price,reduction,star,cover}) {
  let range=[1,2,3,4,5]
  return (
    <li key={id} className='product-item'>
      <img src={cover} alt={`${name} cover`} className='item-cover'/>
      <span className='titre'>{name}</span>
      <div className='star'>
      {
        (star!==0)? range.map(elem => star >= elem && <FontAwesomeIcon icon={faStar} />):null
      }
      </div>

    </li>
  )
}

export default ProductItem