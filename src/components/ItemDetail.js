import React, { useState } from 'react'
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext';

const ItemDetail = ({ product }) => {
    const [isInCart, setIsInCart] = useState (false);
    const { addToCart } = useCartContext();

    function onAdd (count) {
        setIsInCart(true);
        addToCart (product, count)
        console.log ("Agregado al cart: ", product, count);
    };

    return (
        <div className='px-10 w-full pt-3 pb-10 text-xl'>
            <div className='shadow-xl bg-white p-2 rounded-2xl flex flex-row'>
                <div>
                    <img
                        alt={product.title}
                        className="rounded-2xl w-5/5 object-center"
                        src={product.imgURL}
                    />
                </div>
                <div className='flex flex-col pl-20 text-left'>
                    <h3 className='h-50 text-grey-800 font-bold title-font py-3'>
                        {product.title}
                    </h3>
                    <div className='font text-2x1 text-gray-900'>
                        <h2 className='mb-1'>USD {product.price}</h2>
                    </div>

                    { isInCart? 
                        <button className='py-6 text-pink-600 font-bold text-left'>Ir al Carrito</button>
                    :
                    <ItemCount onAdd={onAdd} stock={product.stock} initial={1}></ItemCount>
                }
                    <p className=''> {product.description} </p>
                    
                </div>

            </div>
        </div>
    );
};

export default ItemDetail;