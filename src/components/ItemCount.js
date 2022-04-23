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
        } else { alert ("No puedes tener menos de 1 producto")}
    }


    return (
        <div className='container px-5 py-8 mx-auto '>
        <div className='flex flex-col text-center w-80 mb-12 bg-slate-100 rounded-2xl py-5'>
            <h1 className='sm:text-3x1 text-2x1 title-font mb  '> Cantidad de productos </h1>
            <div className=''>
                <div>
                <button onClick={handleSubstract} className='w-6 bg-slate-200 hover:bg-slate-300 rounded-full font-bold'> - </button>
                <span className='font-bold px-3 '> {count} </span>
                <button onClick={handleAdd} className='w-6 bg-slate-200 hover:bg-slate-300 rounded-full font-bold'> + </button>
                </div>
                <div className='pt-3'>
                    <button className='bg-slate-200 hover:bg-slate-300 w-48 py-1 rounded-lg font-bold text-pink-600 hover:text-pink-700'> Agregar al Carrito </button>
                </div>
            </div>
        </div>
        </div>
    )
}



export default ItemCount

