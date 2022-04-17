import React from 'react'
import imgprincipal from '../assets/img/principal.jpg';

const ItemListContainer = () => {
  return (
    
    <div className='flex px-10'>
      <img className = "object-cover h-180 w-96" src={imgprincipal} alt="logo"/>
      <div className='flex-1 p-40'>
      <h2 className='text-4xl font-bold py-5'>Feel the Pink Blue Power</h2>
      <p className='text-3xl py-6 '>BluePinkPanther is a contemporary fashion brand influenced by the courage of modern youth culture.</p>
      
      <div className="flex-none py-20 text-3xl">
    <ul className="menu menu-horizontal p-0 font-bold">
      <li className><a>Top</a></li>
      <li className><a>Bottom</a></li>
      <li className><a>Combos</a></li>
    </ul>
    </div>
    </div>
    </div>
  )
}

export default ItemListContainer
