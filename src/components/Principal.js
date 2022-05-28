import React, { useEffect } from 'react'
import imgprincipal from '../assets/img/principal.jpg';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';
import { useCartContext } from "../store/CartContext";
import Carousel from './Carousel';




const Principal = () => {

  const { GetProducts, GetProductsByCategory } = useCartContext()//este es el context 


  return (
    
    <div>
      
<Carousel></Carousel>

      {/*<div className='flex flex-row px-10 pb-4 justify-center'>
        <img className=" w-2/5 rounded-xl  " src={imgprincipal} alt="logo" />
        <div className=' flex flex-col '>
          <h2 className='text-2xl font-bold text-pink-500 hover:text-pink-600 py-10 hover:scale-105 duration-700 ease-in-out'>Feel the Pink Blue Power</h2>
          <p className='text-xl py-6 px-6  '>BluePinkPanther is a contemporary fashion brand influenced by the courage of modern youth culture.</p>
          <div className=" py-3 text-2xl">
            <ul className="menu menu-horizontal font-bold ">
              <li className='text-blue-800 hover:text-blue-900 hover:scale-105 duration-100 ease-in-out'><Link to="/category/top">Top</Link></li>
              <li className='text-blue-800 hover:text-blue-900 hover:scale-105 duration-100 ease-in-out'><Link to="/category/bottom">Bottom</Link></li>
            </ul>
          </div>
        </div>
  </div>*/}



      <div className=''><ItemListContainer /></div>

      <div className='pt-6'><Footer /></div>


    </div>
  )
}

export default Principal

