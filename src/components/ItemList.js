import React from 'react'
import Item from './Item'

function ItemList ( {products} )  {
  return (
    <div className='px-8 flex flex-wrap justify-center'>
    { products.map (thisproduct => {
      return (
        <Item product = {thisproduct} key={thisproduct.id} />
      )
    })}
    </div>
  )
}

export default ItemList