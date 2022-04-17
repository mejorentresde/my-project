
import imglogo from '../assets/img/logo-1.png';
import CartWidget from './CartWidget';


const DaisyNavBar = () => {


  return (

    <div className="navbar bg-base-100">

  <div className="flex-none">
    <img className = "	" width={250} src={imglogo} alt="logo"/>
  </div>
  
  <div className="flex-none">
    <ul className="menu menu-horizontal p-0  ">
    <li className = 'text-secondary ' tabindex="0">
        <a>
          About
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2 bg-base-100 ">
          <li className = 'text-primary'><a>Shipping</a></li>
          <li className = 'text-primary'><a>Size Guide</a></li>
          <li className = 'text-primary'><a>Payment Methods</a></li>
          <li className = 'text-primary'><a>How to Buy</a></li>
          <li className = 'text-primary'><a>Contact</a></li>
        </ul>
      </li>
      <li className = 'text-primary'><a>Top</a></li>
      <li className = 'text-primary'><a>Bottom</a></li>
      <li className = 'text-primary'><a>Accessories</a></li>
      <li className = 'text-primary'><a>Combos</a></li>
    </ul>
  </div>



<CartWidget/>





</div>
  )



  
}

export default DaisyNavBar