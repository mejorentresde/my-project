import React from 'react'
import { useCartContext } from "../store/CartContext";


const CartList = ({ product }) => {

    const { removeFromCart } = useCartContext()

    return (

<div className='flex flex-col py-1 '>
        <div className='shadow-xl bg-white py-1 px-3 rounded-2xl flex items-center justify-between   '>

                <img alt={product.title} className="rounded-xl w-1/12   " src={product.imgURL} />

                <h3 className='font-bold px-6  	'> {product.title} </h3>

                <h2 className='px-6 '>Quantity: {product.cant}</h2>

                <h2 className='px-6 '>Size: {product.size}</h2>

                <h2 className='px-6 '>USD {product.price * product.cant} </h2>

                <h2 className='text-primary cursor-pointer px-6 ' onClick={() => { removeFromCart(product.id) }}>Remove product</h2>


        </div>
</div>
    )
}

export default CartList