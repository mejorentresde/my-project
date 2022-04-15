import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import Saludo from './components/Saludo';
import Card from './components/Card';

function App() {
  return (
    <div className="App">



      <DaisyNavBar/>

      <h1 className="text-3xl font-bold font-mono text-orange-500">
      Hello world!
      </h1>
      
    <Saludo name='Ana' edad='20' /> 
    <Saludo name='Andy' edad='28'/>

    <Card>
      <Saludo name = 'Agustin' edad='34'/>
      <Saludo name = 'Andy' edad='15'/>
    </Card>

    </div>
  );
}



export default App;

