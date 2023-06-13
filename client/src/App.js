import logo from './logo.svg';
import './App.css';

// Components
import Navbar from './Components/Navbar.js';
import Showcase from './Components/Showcase.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Showcase/>
    </div>
  );
}

export default App;
