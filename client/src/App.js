import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from './Components/Navbar.js';
import Product from './Components/Products';
import AddProduct from './Components/AddProduct';
import Home from './Components/Home';
import NoPage from './Components/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
