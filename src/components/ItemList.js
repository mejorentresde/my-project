import React from 'react'
import Item from './Item'

function ItemList ( {products} )  {
  return (
    <>
    { products.map (thisproduct => {
      return (
        <Item product = {thisproduct} key={thisproduct.id} />
      )
    })}
    </>
  )
}

export default ItemList