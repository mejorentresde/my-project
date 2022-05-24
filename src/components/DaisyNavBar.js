import imglogo from '../assets/img/logo-1.png';
import CartWidget from './CartWidget';
import {Link} from 'react-router-dom';

import useCartContext from '../store/CartContext';

const DaisyNavBar = () => {
  const { contextFunction } = useCartContext();
  contextFunction();

  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <Link to="/"  >
        <img className="	" width={250} src={imglogo} alt="logo" />
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0  ">
          <li className='text-secondary ' tabindex="0">
            

          </li>
          <li className='text-primary'><Link to="/category/top">Top</Link></li>
          <li className='text-primary'><Link to="/category/bottom">Bottom</Link></li>
        </ul>
      </div>

      <CartWidget />

    </div>
  )
}

export default DaisyNavBar