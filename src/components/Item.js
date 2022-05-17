import React from 'react';
import {Link} from 'react-router-dom';
import Products from './firebase-examples/Products';



function Item({ product }) {
  return (
    

    <div className=' w-1/4 px-3 pt-3 pb-3 text-xl hover:scale-105 duration-700 ease-in-out'>
      <div className='shadow-xl bg-white p-2 rounded-2xl'>
        <div>
          <img
            alt={product.title}
            className="rounded-2xl object-center"
            src={product.imgURL}
          />
        </div>

        <h3 className='h-50 text-grey-800 font-bold title-font pt-3'>
          {product.title}
        </h3>
        <h2 className='font text-2x1 pb-3 text-gray-900'>
          USD {product.price}
        </h2>
        <Link to={`/product/${product.id}`}>
          <h2 className='font text-2x1 pb-3 text-gray-500'>
            See Product
          </h2>
        </Link>
      </div>
    </div>

  );
};

export default Item