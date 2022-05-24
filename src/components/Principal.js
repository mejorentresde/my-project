import React, { useEffect } from 'react'
import imgprincipal from '../assets/img/principal.jpg';
import { Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import Footer from './Footer';
import { useCartContext } from "../store/CartContext";
import Carrousel from './Carrousel';


const Principal = () => {

  const { GetProducts } = useCartContext()//este es el context 

  useEffect(() => { // useEffect solo se puede usar en componentes. Coponent: function que renderiza algo
    async function fetchData() {
      await GetProducts() // hace una llamada a la base de datos y guarda los productos en memoria, en el estado general
    }
    fetchData();
  }, []);


  return (
    
    <div>


      <div className='flex flex-row px-12 py-5 '>
        <img className=" w-2/5 rounded-2xl  " src={imgprincipal} alt="logo" />
        <div className='   grid place-items-center  '>
          <h2 className='text-3xl font-bold text-pink-500 hover:text-pink-600 py-5 hover:scale-105 duration-700 ease-in-out'>Feel the Pink Blue Power</h2>
          <p className='text-2xl py-3 px-6 w-4/6 '>BluePinkPanther is a contemporary fashion brand influenced by the courage of modern youth culture.</p>
          <div className=" py-3 text-2xl">
            <ul className="menu menu-horizontal font-bold ">
              <li className='text-blue-800 hover:text-blue-900 hover:scale-105 duration-100 ease-in-out'><Link to="/category/top">Top</Link></li>
              <li className='text-blue-800 hover:text-blue-900 hover:scale-105 duration-100 ease-in-out'><Link to="/category/bottom">Bottom</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className=''><ItemListContainer /></div>

      <div className='pt-6'><Footer /></div>


    </div>
  )
}

export default Principal

