import React, { useState } from 'react'
import { useCartContext } from "../store/CartContext";
import { useEffect } from "react";
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';




const Payment = () => {

    const { cart, total } = useCartContext()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");



    /*const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('orders').add({
            name: name,
            email: email,
            message: message,

        })
        .then(() => {
            alert('Message has been submitted');
        })
        .catch(error => {
            alert(error.message);
        })

        setName("")
        setEmail("")
        setMessage("")
    };*/


    useEffect(() => {
    }, [])


    const Checkout = async () => {
        const user = {
            name: name,
            email: email,
            message: message,
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
    }


    /*const updateCart = () => {
            const idDoc = 'S0FPVFeqG69lCvl24L8r'
    
            const db = getFirestore()
            const cartDoc = doc(db, 'orders', idDoc)
            updateDoc(cartDoc, { total: 99 })
        }
    */

    return (

        <div className=' grid place-items-center '>
            {/*<button onClick={updateCart} className='btn'>Update document</button>*/}


            <form className='bg-white shadow-md rounded-xl px-8 pt-6 pb-8 mb-4  w-3/12' onSubmit={Checkout}>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>
                        Name:
                    </label>
                    <input className=' shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username' 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    Email:
                </label>
                <input className='shadow  border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>

                <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>
                    DNI:
                </label>
                <input className='shadow border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                </div>
                <button type="submit" onClick={Checkout} className='bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>Confirm</button>

            </form>
        </div>

    )
}

export default Payment