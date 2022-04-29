import React, {useEffect, useState} from 'react'
import productsDB from '../data/products'
import ItemDetail from './ItemDetail';


function getProduct(id) {
    return new Promise( (resolve, reject) => {
        setTimeout (() => {
            const productFound = productsDB.find ( (product) => {
                return id === product.id
            })
            resolve (productFound);
        }, 2000);
    });
}

function ItemDetailContainer( {id} ) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct(id).then (respuestaPromise => {
            setProduct(respuestaPromise);
        });
    }, []);

    return (
        <section className='text-gray-600 body-font'>
            <ItemDetail product={product}/>
            
        </section>
    )
}

export default ItemDetailContainer;