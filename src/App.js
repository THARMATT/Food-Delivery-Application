
import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
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
    <div>
     <Router>

    
     <Routes>
     <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/login" element={<Signup/>}/>
        </Routes>
      
     </Router>
    </div>
  );
}

export default App;
