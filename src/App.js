import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Principal from './components/Principal';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <DaisyNavBar />
        <Principal />
        <Routes>
          <Route path="/" element={<ItemListContainer titulo="Hola desde React Router" />} />
          <Route path="/category/:categoryid" element={<ItemListContainer titulo="Categoria de Productos" />} />
          <Route path="/product/:itemid" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>





    </div>
  );
}

export default App;

