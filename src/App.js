
import './App.css';
import About from './Components/About';
import { CartProvider } from './Components/ContextReducer';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Cart from './screens/Cart';
import Home from './screens/Home';
import Login from './screens/Login'
import Signup from './screens/Signup';
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <CartProvider>
     <Router>

    
     <Routes>
     <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
        </Routes>
      <Cart/>
     </Router>
    </CartProvider>
  );
}

export default App;
