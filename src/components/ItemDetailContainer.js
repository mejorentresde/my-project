import React, { useEffect, useState } from 'react'
import productsDB from '../data/products'
import Products from './firebase-examples/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { CartContext, useCartContext } from '../store/CartContext';



function getProduct(products,id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productFound = products.find((product) => {
                return parseInt(id) === product.id;
            })
            resolve(productFound);
        }, 100);
    });
}


function ItemDetailContainer() {
    function onAdd (count) {
        console.log(`Agregaste al Carrito ${count} items`);
    }
    const [product, setProduct] = useState([]);
    const { itemid } = useParams();


    const { getProductsByCategory } = useCartContext() //este es el context 

    const products = getProductsByCategory()

    useEffect(() => {
        getProduct(products, itemid).then(respuestaPromise => {
            setProduct(respuestaPromise);
        });
    }, [itemid]);

    return (
        <div className=''><ItemDetail onAdd={onAdd} product={product}/></div>
    )
}

export default ItemDetailContainer;