import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Principal from './components/Principal';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';




function App() {
  return (
    <div className="App">
      <DaisyNavBar/>
      {/*<ItemListContainer titulo="Feel the BluePink Panther Power" />/*}

    {/*<ItemCount stock={9} initial={1}></ItemCount>*/}

      <Principal/>

      <ItemDetailContainer id={1}/>
      <ItemDetailContainer id={2}/>








    </div>
  );
}



export default App;

