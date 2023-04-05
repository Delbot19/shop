import React from 'react'
import ProductItem from './ProductItem'
import '../styles/ShopingList.css'
import { ListeProduit } from '../datas/ListeProduits'
function ShopingList() {
    return (
        <div className='shoping-list'>
            <ul className='produit-list'>
                {
                    ListeProduit.map(({ id, sale, name, price, reduction, star, cover }) => (
                        <div>
                            <ProductItem
                                id={id}
                                sale={sale}
                                name={name}
                                price={price}
                                reduction={reduction}
                                star={star}
                                cover={cover}
                            />
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}

export default ShopingList