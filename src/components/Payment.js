import React  from 'react'
import { useCartContext } from "../store/CartContext";
import { useEffect } from "react";
import Cart  from './Cart';
import CartList  from './CartList';
import { addDoc, collection, getFirestore, doc, updateDoc } from 'firebase/firestore';


const Payment = () => {

    const { cart, total } = useCartContext()

    useEffect(() => {
        console.log(cart);
    }, [])
    

    const Checkout =  async () => {
        const user = {
            name: 'Juan Perez',
            phone: '+5443464852',
            email: 'juan@gmail.com'
        } 

        const cartMaped = cart.map( ({id, title, price}) => ( { id, title, price} ) );

        const ItemToCheckout = {
        //buyer
            user: {...user},
        //items
            items:  cartMaped,
            total:  total(),
        }

        console.log( ItemToCheckout );

        const db = getFirestore()
        const cartCollection = collection(db, 'orders');

        const response = await addDoc(cartCollection, ItemToCheckout)
        //console.log(response);
        console.log(response.id);
    }

const updateCart = () => { 
    const idDoc = 'S0FPVFeqG69lCvl24L8r'

    const db = getFirestore()
    const cartDoc = doc(db, 'orders', idDoc)
    updateDoc(cartDoc, { total: 99})
}


return (

    <div>
        <button onClick={Checkout} className='btn'>Confirm</button>
        {/*<button onClick={updateCart} className='btn'>Update document</button>*/}
    </div>
)
}

export default Payment