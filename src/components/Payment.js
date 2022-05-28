import React, { useState } from 'react'
import { useCartContext } from "../store/CartContext";
import { useEffect } from "react";
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';




const Payment = () => {

    const { cart, total } = useCartContext()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [dni, setDni] = useState("");



    useEffect(() => {
    }, [])

    const Checkout = async (e) => {
        e.preventDefault();

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
        alert("Thank you for your purchase ☺️")




        
    }


    /*const updateCart = () => {
            const idDoc = 'S0FPVFeqG69lCvl24L8r'
    
            const db = getFirestore()
            const cartDoc = doc(db, 'orders', idDoc)
            updateDoc(cartDoc, { total: 99 })
        }
    */

    return (

        <div className='  flex justify-center  '>

            <form className='bg-white shadow-xl rounded-2xl px-8 pt-6 pb-8 mb-4 w-2/6' onSubmit={Checkout}>

                <div className='mb-4'>
                    <label className=' text-gray-700 text-sm font-bold '>
                    😎 Name:
                    </label>
                    <input className=' shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                📧 Email:
                </label>
                <input className='shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                🆔 ID:
                </label>
                <input className='shadow border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                    value={dni}
                    onChange={(e) => setDni(e.target.value)}
                />
                </div>
                <button type="submit" onClick={Checkout} className='bg-black hover:bg-pink-500  text-white font-bold py-2 px-4 rounded-l '>Confirm</button>

            </form>
        </div>

    )
}

export default Payment