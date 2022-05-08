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
            <Link to="/">
              About
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
            </Link>
            <ul className="p-2 bg-base-100 ">
              <li className='text-primary'><Link to="/">Shipping</Link></li>
              <li className='text-primary'><Link to="/">Size Guide</Link></li>
              <li className='text-primary'><Link to="/">Payment Methods</Link></li>
              <li className='text-primary'><Link to="/">How to Buy</Link></li>
              <li className='text-primary'><Link to="/">Contact</Link></li>
            </ul>
          </li>
          <li className='text-primary'><Link to="/category/top">Top</Link></li>
          <li className='text-primary'><Link to="/category/bottom">Bottom</Link></li>
          <li className='text-primary'><Link to="/category/accesories">Accessories</Link></li>
          <li className='text-primary'><Link to="/category/combos">Combos</Link></li>
        </ul>
      </div>

      <CartWidget />

    </div>
  )
}

export default DaisyNavBar