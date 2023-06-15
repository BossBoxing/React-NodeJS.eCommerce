import '../App.css';
import Navbar from './Navbar.js';
import Product from './Products';
import AddProduct from './AddProduct';

function Home({children}) {
  return (
    <div className="App">
      <div className="flex h-screen m-2 bg-white rounded-[10px]">
        {children}
      </div>
    </div>
  );
}

export default Home;
