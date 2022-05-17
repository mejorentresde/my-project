import React, { useEffect, useState } from 'react'
import productsDB from '../data/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { useCartContext } from "../store/CartContext";



function ItemListContainer() {

    const { GetProducts, getProductsByCategory } = useCartContext()//este es el context 
    //const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

   /* useEffect(() => {

        console.log(1);
        //LLAMAR AL GETpRODUCTS DE CARTCONTETX
        GetProducts().then(()=> {
            console.log(2);
            const products = getProductsByCategory(categoryid)
            setProducts(products);
        });
    }, [categoryid]);*/
    const products = getProductsByCategory(categoryid)
           // setProducts(products);

    return (
        <div className=''><ItemList products={products} /></div>
    )
}


export default ItemListContainer