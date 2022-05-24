import React, { useState } from 'react';
import { useCartContext } from "../store/CartContext";
import CartList from './CartList';
import { Link } from 'react-router-dom';




const Cart = () => {


    const { cart, clearCart, total } = useCartContext()
    if (cart.length === 0) {
        return <div className='font-bold text-xl text-secondary py-10'>You don't have anything in the cart</div>

    } else {
        return (
            <>

<div className='pb-10 flex flex-col grid place-items-center '>
            <div className='pb-10 '>
                    {cart.map(f => <CartList key={f.id} product={f} />)}
                </div>

                <Link to="/payment"><div className=''>
                <button className='text-lg w-96 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-2xl'>
                    <h1 className='	'>Total: USD {total()}</h1>
                    Checkout
                </button>
                </div></Link>

                <button className='text-lg text-boldtext-primary px-10 py-3' onClick={() => { clearCart() }}> Clear cart</button>
                </div>
            </>
        )
    }
}


export default Cart