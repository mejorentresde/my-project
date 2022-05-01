import React, { useEffect, useState } from 'react'
import productsDB from '../data/products'
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function getProducts(categoryid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (categoryid !== undefined) {
                const arrayFiltered = productsDB.filter((product) => {
                    return product.category === categoryid;
                })
                resolve(arrayFiltered);
            }
            else {
                resolve(productsDB);
            }
        }, 100);
    });
}

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
        getProducts(categoryid).then(respuestaPromise => {
            setProducts(respuestaPromise);
        });
    }, [categoryid]);

    return (
        <div className=''><ItemList products={products} /></div>
    )
}

export default ItemListContainer