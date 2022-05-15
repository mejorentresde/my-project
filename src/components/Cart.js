import React, { useState } from 'react';
import { useCartContext } from "../store/CartContext";
import CartList from './CartList';
import { Link } from 'react-router-dom';


const Cart = () => {


    const { cart, clearCart, total } = useCartContext()
    if (cart.lenght === 0) {
        return <div>Carrito Vacio</div>
    } else {
        return (
            <>
                {cart.map (f => <CartList key={f.id} product={f} />)}
                <button className='btn' onClick={() => { clearCart() }}> Clear Cart</button>
                <div className='total'>
                    <Link to="/payment">Go to payment</Link>
                    <h3>Total: ${total} </h3>
                </div>
            </>
        )
    }
}

export default Cart