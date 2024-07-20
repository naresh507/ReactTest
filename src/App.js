//import logo from './logo.svg';
import './App.css';
import Header from './Component/header';
 import ProdctList from './Component/ProductsList';
 import ClickButton from './Component/ClickButton';
function App() {
  return (
    <div className="App">
       <h1>App</h1>
       <Header/>
       <ProdctList/>
       <header className="App-header">
        <ClickButton />
      </header>
    </div>
  );
}

export default App;
