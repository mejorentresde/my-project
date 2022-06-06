import React, { useState } from 'react'
import { useCartContext } from "../store/CartContext";
import { useEffect } from "react";
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const Payment = () => {

    const { cart, total, setCart } = useCartContext()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");


    useEffect(() => {
    }, [])


    const navigate = useNavigate();//Para que vaya a la pagina principal 


    const Checkout = async (e) => {
        e.preventDefault();

        if (!name || !email || !dni) {
            return
        }

        const user = {
            name: name,
            email: email,
            dni: dni,
        }

        const cartMaped = cart.map(({ id, title, price }) => ({ id, title, price }));

        const ItemToCheckout = {
            //buyer
            user: user,
            //items
            items: cartMaped,
            total: total(),
        }

        const db = getFirestore()
        const cartCollection = collection(db, 'orders');

        const response = await addDoc(cartCollection, ItemToCheckout)
        //console.log(response);
        
        setCart([]);

        alert("Thank you for your purchase ☺️")
        navigate('/'); //Manda al inicio al hacer submit
    }


    return (
        <div className='  flex justify-center  '>
            <form className='bg-white shadow-xl rounded-2xl px-8 pt-6 pb-8 mb-4 w-2/6' onSubmit={Checkout}>
                <div className='mb-4'>
                    <label className=' text-gray-700 text-sm font-bold' >
                    Name:
                    </label>
                    <input className=' shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Write your name and surname"
                        
                    />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                Email:
                </label>
                <input className='shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Insert your email"
                />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                DNI:
                </label>
                <input className='shadow border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Insert your DNI"
                    type="number"
                />
                </div>
                <button type="submit" onClick={Checkout} className='bg-black hover:bg-pink-500  text-white font-bold py-2 px-4 rounded-l '>Confirm</button>
            </form>
        </div>

    )
}

export default Payment