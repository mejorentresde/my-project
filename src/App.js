import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Principal from './components/Principal';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./store/CartContext";
import Cart from './components/Cart';
import Payment from './components/Payment';




function App() {
  return (
    <div className="App">

      <CartContextProvider>
        <BrowserRouter>
          <DaisyNavBar />
          <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/category/:categoryid" element={<ItemListContainer />} />
            <Route path="/product/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>}/> 
            <Route path="/payment" element={<Payment/>}/> 

          </Routes>

        </BrowserRouter>
      </CartContextProvider>



    </div>
  );
}

export default App;

