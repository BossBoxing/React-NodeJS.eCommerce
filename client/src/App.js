import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './Components/Navbar.js';
import Product from './Components/Products';
import AddProduct from './Components/AddProduct';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddProduct/>
      {/* <Product/> */}
    </div>
  );
}

export default App;
