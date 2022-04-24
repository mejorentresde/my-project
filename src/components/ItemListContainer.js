import React, {useEffect, useState} from 'react'
import productsDB from '../data/products'
import ItemList from './ItemList';


function getProducts() {
    return new Promise( (resolve, reject) => {
        setTimeout (() => {
            resolve(productsDB);
        }, 2000);
    });
}

function ItemListContainer({titulo}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then (respuestaPromise => {
            setProducts(respuestaPromise);
        });
    }, []);

    return (
    <><h1>{titulo}</h1>
    <ItemList products={products} /></>
    )
}

export default ItemListContainer