import React, { useEffect } from 'react'
import imgprincipal from '../assets/img/principal.jpg';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';
import { useCartContext } from "../store/CartContext";
import Carrousel from './Carrousel';
import styled from 'daisyui/dist/styled';


const Principal = () => {

  const { GetProducts, GetProductsByCategory } = useCartContext()//este es el context 


  return (
    
    <div>

<h3 className='text-left px-6 pb-3 text-3xl font-bold hover:text-pink-600 duration-700 ease-in-out'>Feel the Pink Blue Power</h3>

      {/*<div className='flex flex-row px-5 py-2 '>
        <img className=" w-3/5 rounded-2xl  " src={imgprincipal} alt="logo" />
        <div className='     '>
          <h2 className='text-3xl font-bold text-pink-500 hover:text-pink-600 py-10 hover:scale-105 duration-700 ease-in-out'>Feel the Pink Blue Power</h2>
          <p className='text-2xl py-6 px-6  '>BluePinkPanther is a contemporary fashion brand influenced by the courage of modern youth culture.</p>
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

