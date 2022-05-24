import React, { useState, Component } from 'react'
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext';
import { Link } from 'react-router-dom';
import Size from './Size';
import Select from 'react-select'


function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState (false);
    const { addToCart } = useCartContext();

    function onAdd (count) {
        setIsInCart(true);
        addToCart (product, count)
        console.log ("Add to cart: ", product, count);
    };

    return (
        
        <div className='px-10  pt-3 text-left'>
            <div className='shadow-xl bg-white p-2 rounded-2xl flex flex-row'>
                <div>
                    <img
                        alt={product.title}
                        className="rounded-2xl w-5/6 "
                        src={product.imgURL}
                    />
                </div>
                <div className=''>
                    <h3 className='text-xl text-grey-800 font-bold '>
                        {product.title}
                    </h3>
                        <h2 className='text-xl '>USD {product.price}</h2>

                    { isInCart? 
                        <button className='py-6 text-pink-600 font-bold '><Link to="/cart">Go to Cart</Link></button>
                    :
                    <>
                    <div className=''><ItemCount onAdd={onAdd} stock={product.stock} initial={1}></ItemCount></div>
                    {/*<div className=''><Size onAdd={onAdd}></Size></div>*/}

                    
                    </>
                }

                    <div className=' '> Description: {product.description} </div>
                    </div>


            </div>
        </div>
    );
};

export default ItemDetail;