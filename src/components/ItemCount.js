import React, {useState} from 'react'

function ItemCount(props){
   // const [count, setCount] = useState(props.initial);
    const { amount, setAmount } = props

    function handleAdd() {
        if (amount < props.stock) {
            setAmount (amount + 1)
        } else {alert ("No more stock")}
    }

    function handleSubstract() {
        if (amount > 1) {
            setAmount (amount - 1)
        } else { alert ("You can't have less than one product")};
    }

    return (

        <div className='py-6 px-2  flex  '>

                <button  onClick={handleSubstract} className='px-3  w-10 h-10  bg-slate-200 rounded-full font-bold text-pink-600'> - </button>
                <span className='text-slate-700 font-bold px-10 py-2'>{amount}</span>
                <button onClick={handleAdd} className='px-3  w-10 h-10  bg-slate-200 rounded-full font-bold text-pink-600'> + </button>

        </div>

    )
}

export default ItemCount

