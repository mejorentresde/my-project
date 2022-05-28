import React from 'react'
import  { useState, Component } from 'react'
import Select from 'react-select'



function Size(props) {

const [size, setSize] = useState();


  return (
    <div className='pb-6'>
      <div className=''>
        <button onClick={()=> props.onAdd(size)} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>S</button>
        <button className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>M</button>
        <button className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>L</button>
        <button className='px-4 mx-2  py-2   bg-slate-200 rounded-full font-bold text-pink-600'>XL</button>
        <button className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>2XL</button>
      </div>
    </div>
  )
}

export default Size