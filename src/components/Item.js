import React from 'react'
import products from '../data/products'

function Item( {product} ) {
  return (
    <div>
      <h1>{product.title}</h1>
      <h2>{product.color}</h2>
      <h3>{product.size}</h3>
      <h4>{product.stock}</h4>
      <h2>${product.price}</h2>
      <h2>{product.imgURL}</h2>
      <hr/>
      <br/>
    </div>
  )
}

export default Item