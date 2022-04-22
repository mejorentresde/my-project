import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Principal from './components/Principal';
import ItemListContainer from './components/ItemListContainer';




function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemListContainer titulo="Hola Mundo" />
      <ItemListContainer titulo="Hola Andy" />
      <ItemListContainer titulo="Otra Prop" />
      <Principal></Principal>






    </div>
  );
}



export default App;

