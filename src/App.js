
import './App.css';
import About from './Components/Features/About';
import Home from './Components/Features/Home';
import Products from './Components/Features/Products';
import Solutions from './Components/Features/Solutions';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Solutions />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
