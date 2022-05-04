import React, {useState} from 'react'

function ItemCount(props){
    const [count, setCount] = useState (props.initial);

    function handleAdd() {
        if (count < props.stock) {
            setCount (count + 1)
        } else {alert ("No hay mas stock")}
    }

    function handleSubstract() {
        if (count > 1) {
            setCount (count - 1)
        } else { alert ("No puedes tener menos de 1 producto")};
    }



    return (
        <div className='py-5 text-2xl w-full '>
        <div className='flex '>
                <div className='px-5'>
                <button onClick={handleSubstract} className='h-24 w-24  hover:bg-slate-200 rounded-full font-bold text-pink-600'> - </button>
                <span className='h-24 font-bold px-10 '>{count}</span>
                <button onClick={handleAdd} className='h-24 w-24  hover:bg-slate-200 rounded-full font-bold text-pink-600'> + </button>
                    <button onClick={()=> props.onAdd(count)} className='h-24 px-15 hover:bg-slate-200 px-10 rounded-lg font-bold text-pink-600 hover:text-pink-700'> Add to Cart </button>
                </div>

        </div>
        </div>
    )
}

export default ItemCount

