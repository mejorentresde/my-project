import React from 'react'
import { useCartContext } from "../store/CartContext";



const CartList = ({ product }) => {

    const { cart, addToCart, removeFromCart, clearCart } = useCartContext()


    return (
        <div className='px-10  pt-3 pb-10 text-xl '>
            <div className='shadow-xl bg-white p-2  rounded-2xl flex flex-row '>
                <div>
                    <img
                        alt={product.title}
                        className="rounded-2xl w-2/5 object-center "
                        src={product.imgURL}
                    />
                </div>
                <div className='flex flex-col text-center '>
                    <h3 className='h-50 text-grey-800 font-bold title-font pt-12 pb-3 '>
                        {product.title}
                    </h3>

                    <h2>  {product.cant} product/s        
                    </h2>

                    <div className='font text-2x1 text-gray-900'>
                        <h2 className='mb-1 py-5'>USD {product.price * product.cant} </h2>
                        <button className='btn' onClick={() => { removeFromCart(product.id) }}>Remove product</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CartList