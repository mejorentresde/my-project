import React from 'react'




function Size(props) {

  const {size, setSize } = props

  return (
    <div className='pb-6 w-5/6 '>
      <div className=''>
        {size != 'S' && <button onClick={()=> setSize('S')} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>S</button>}
        {size === 'S' && <button onClick={()=> setSize('S')} className='px-4 mx-2 py-2   bg-black rounded-full font-bold text-white'>S</button>}
        {size != 'M' && <button onClick={()=> setSize('M')} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>M</button>}
        {size === 'M' && <button onClick={()=> setSize('M')} className='px-4 mx-2 py-2  bg-black rounded-full font-bold text-white'>M</button>}
        {size != 'L' && <button onClick={()=> setSize('L')} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>L</button>}
        {size === 'L' && <button onClick={()=> setSize('L')} className='px-4 mx-2 py-2   bg-black rounded-full font-bold text-white'>L</button>}
        {size != 'XL' && <button onClick={()=> setSize('XL')} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>XL</button>}
        {size === 'XL' && <button onClick={()=> setSize('XL')} className='px-4 mx-2 py-2   bg-black rounded-full font-bold text-white'>XL</button>}
        {size != '2XL' && <button onClick={()=> setSize('2XL')} className='px-4 mx-2 py-2   bg-slate-200 rounded-full font-bold text-pink-600'>2XL</button>}
        {size === '2XL' && <button onClick={()=> setSize('2XL')} className='px-4 mx-2 py-2   bg-black rounded-full font-bold text-white'>2XL</button>}
      </div>
    </div>
  )
}

export default Size