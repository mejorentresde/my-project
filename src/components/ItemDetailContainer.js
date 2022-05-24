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
    //const [product, setProduct] = useState([]);
    const { itemid } = useParams();


    const { GetProductsByCategory, GetProductById, product } = useCartContext() //este es el context 

    //const products = getProductsByCategory()

    //useEffect(() => {
     //   console.log("item detail container")
      //  GetProductById(itemid).then(respuestaPromise => {
        //    setProduct(respuestaPromise);
       // });
    //}, [itemid]);
    useEffect(() => { // useEffect solo se puede usar en componentes. Coponent: function que renderiza algo
        console.log("item detail container")
        async function fetchData() {
          await GetProductById(itemid); // hace una llamada a la base de datos y guarda los productos en memoria, en el estado general
        }
        fetchData();
      }, [itemid]); // cuando cambie category id se llama a lo de adentro de useEffect

    return (
        product && <div className=''><ItemDetail onAdd={onAdd} product={product}/></div>
    )
}

export default ItemDetailContainer;