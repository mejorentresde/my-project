import React from 'react';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from 'react';

const ProductDetail = () => {

  const [item, setItem] = useState({})

  useEffect(() => {
    const db = getFirestore()

    const pinkHoodie = doc(db, 'top', 'nkveD32jfTaLnzmWEOJr')
    getDoc ( pinkHoodie ).then( res => { 
      if (res.exists()) {
       // console.log(res.data());
      setItem(res.data())
      }
    })

  }, [])
  

  return (
    <>
    <div>ProductDetail</div>
    <div>{item.title}</div>
    <div>USD {item.price}</div>
    <div>{item.stock}</div>
    </>
  )
}

export default ProductDetail