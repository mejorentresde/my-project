import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../store/CartContext";
import { getDocs, getFirestore, collection } from "firebase/firestore";















function ItemListContainer() {

    const { getProductsByCategory } = useCartContext() //este es el context 
    const { categoryid } = useParams();

    const products = getProductsByCategory(categoryid);

    return (
        <div className=''><ItemList products={products} /></div>
    )
}


export default ItemListContainer