import React from 'react'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from "firebase/firestore"

export const Products = () => {

    const [products, setProducts] = useState([])

    //captar datos de firebase
    useEffect(() => {
        const db = getFirestore ()
        const Collection = collection(db, 'colection-1')
        getDocs( Collection ).then ((snapshot) => { 
            const productsList = []
            snapshot.docs.forEach((s) => { 
            console.log (s.data() );
            productsList.push( {id: s.id, ...s.data()})
        })
        console.log(productsList);
        setProducts ( productsList )
        })

    }, [])

    return (
        <div>{ products.map (p => <li> {p.title} </li>)}</div>
    )
}

export default Products

/*<div>{ products.map (p => <li> {p.title} </li>)}</div>*/