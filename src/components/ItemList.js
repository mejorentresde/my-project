import React from 'react'
import Item from './Item'

function ItemList ( {products} )  {
  return (
    <div className='flex flex-row flex-wrap'>
    { products.map (thisproduct => {
      return (
        <Item product = {thisproduct} key={thisproduct.id} />
      )
    })}
    </div>
  )
}

export default ItemList