import React from 'react';
import {Link} from 'react-router-dom';
import Products from './firebase-examples/Products';



function Item({ product }) {
  return (
    

    <div className=' w-1/4  px-3 pt-1 pb-3  hover:scale-105 duration-700 ease-in-out'>
      <div className=' shadow-xl bg-white  rounded-xl'>

      <Link to={`/product/${product.id}`}>
        <div>
          <img
            alt={product.title}
            className="rounded-t-xl"
            src={product.imgURL}
          />
        </div>

        <h3 className='text-grey-800 font-bold title-font pt-2'>
          {product.title}
        </h3>
        <h2 className=' pb-2 text-gray-900'>
          USD {product.price}
        </h2>
        
          <h2 className=' pb-3 text-gray-500'>
            See Product
          </h2>
        </Link>
      </div>
    </div>

  );
};

export default Item