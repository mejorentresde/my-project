import React, { useState, Component } from 'react'
import ItemCount from './ItemCount';
import useCartContext from '../store/CartContext';
import { Link } from 'react-router-dom';
import Size from './Size';


function ItemDetail({ product }) {
    const [isInCart, setIsInCart] = useState(false);
    const [amount, setAmount] = useState(1)
    const [size, setSize] = useState('S')

    const { addToCart } = useCartContext();

    function onAdd() {
        setIsInCart(true);
        addToCart(product, amount, size)
        console.log("Add to cart: ", product, amount, size);
    };

    return (

        <div className=' pt-3 text-left px-6  '>
            <div className='shadow-xl bg-white p-2 rounded-2xl flex flex-col sm:flex-row '>
                <div className=''>
                    <img
                        alt={product.title}
                        className=" rounded-2xl "
                        src={product.imgURL}
                    />
                </div>
                <div className='px-10 w-1/2 '>
                    <h3 className='text-xl text-grey-800 font-bold pt-6 w-96'>
                        {product.title}
                    </h3>
                    <h2 className='text-xl'>USD {product.price}</h2>

                    {isInCart ?
                        <button className='py-6 text-pink-600 font-bold '><Link to="/cart">Go to Cart</Link></button>
                        :
                        <>
                            <div className=''><ItemCount amount={amount} setAmount={setAmount} stock={product.stock} initial={1}></ItemCount></div>
                            <div className=''><Size size={size} setSize={setSize}></Size></div>
                            <div className=''><button onClick={()=> onAdd()} className=' w-4/6  py-2 bg-slate-200  rounded-lg font-bold text-pink-600 hover:text-pink-700 hover:bg-slate-300 '> Add to Cart </button>
                    </div>


                        </>
                    }   

                    <div className='pt-10  w-96 sm:w-auto'>
                        <hr></hr>

                        <h3 className=' pt-3 font-bold'> Description  </h3>
                        <p className='pb-3 '>{product.description}</p>

                        <hr></hr>

                        <h3 className='pt-6 font-bold'>Materials</h3>
                        <p className='pb-3'>Our goal is to use 100% recycled or other sustainably sourced materials by 2030.</p>
                        <hr></hr>

                        <h3 className='pt-6 font-bold'>Delivery</h3>
                        <p className='pb-3'>Shipping is available to customers at least 13 years of age with a valid shipping and billing address.</p>

                        <hr></hr>

                        <h3 className='pt-6 font-bold'>Payment</h3>
                        <p className='pb-3'>We accept card payments via Visa, Apple Pay, MasterCard, Discover and American Express. </p>
                        <hr></hr>
                    </div>

                </div>



            </div>
        </div>
    );
};

export default ItemDetail;