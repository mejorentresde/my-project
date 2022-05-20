import React, { useEffect, useState } from 'react'
import productsDB from '../data/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../store/CartContext";



function ItemListContainer() {

    const { GetProducts, getProductsByCategory } = useCartContext() //este es el context 
    const { categoryid } = useParams();

    const products = getProductsByCategory(categoryid);

    return (
        <div className=''><ItemList products={products} /></div>
    )
}


export default ItemListContainer