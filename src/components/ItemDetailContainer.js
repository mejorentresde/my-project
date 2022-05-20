import React, { useEffect, useState } from 'react'
import productsDB from '../data/products'
import Products from './firebase-examples/Products';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';



function getProduct(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productFound = productsDB.find((product) => {
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
    useEffect(() => {
        getProduct(itemid).then(respuestaPromise => {
            setProduct(respuestaPromise);
        });
    }, [itemid]);

    return (
        <div className=''><ItemDetail onAdd={onAdd} product={product}/></div>
    )
}

export default ItemDetailContainer;