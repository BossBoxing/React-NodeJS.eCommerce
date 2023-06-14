import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './Components/Navbar.js';
import Product from './Components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  );
}

export default App;
