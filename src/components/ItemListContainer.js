import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../store/CartContext";
import { getDocs, getFirestore, collection } from "firebase/firestore";


function ItemListContainer() {

    const { GetProductsByCategory, products } = useCartContext() //este es el context 
    const { categoryid } = useParams();
    
    useEffect(() => { // useEffect solo se puede usar en componentes. Coponent: function que renderiza algo
        console.log("item lis container")
        async function fetchData() {
          await GetProductsByCategory(categoryid); // hace una llamada a la base de datos y guarda los productos en memoria, en el estado general
        }
        fetchData();
      }, [categoryid]); // cuando cambie category id se llama a lo de adentro de useEffect

      console.log(products)

    return (
       products && <div className=''><ItemList products={products} /></div>
    )
}


export default ItemListContainer