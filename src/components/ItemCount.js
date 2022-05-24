import React, {useState} from 'react'

function ItemCount(props){
    const [count, setCount] = useState (props.initial);

    function handleAdd() {
        if (count < props.stock) {
            setCount (count + 1)
        } else {alert ("No more stock")}
    }

    function handleSubstract() {
        if (count > 1) {
            setCount (count - 1)
        } else { alert ("You can't have less than one product")};
    }

    return (

        <div className='py-10  flex  '>

                <button  onClick={handleSubstract} className='px-1  w-16  bg-slate-200 rounded-full font-bold text-pink-600'> - </button>
                <span className='text-slate-700 font-bold px-10 py-2'>{count}</span>
                <button onClick={handleAdd} className='px-6 py-2   bg-slate-200 rounded-full font-bold text-pink-600'> + </button>
                    <div className='px-6'><button onClick={()=> props.onAdd(count)} className=' px-10 py-2 bg-slate-200  rounded-lg font-bold text-pink-600 hover:text-pink-700 hover:bg-slate-300 rounded-full'> Add to Cart </button>
                    </div>

        </div>

    )
}

export default ItemCount

