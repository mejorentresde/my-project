import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Principal from './components/Principal';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';




function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemListContainer titulo="Hola Mundo" />
      <ItemListContainer titulo="Hola Andy" />
      <ItemListContainer titulo="Otra Prop" />

    <ItemCount stock={9} initial={1}></ItemCount>


      <Principal></Principal>






    </div>
  );
}



export default App;

