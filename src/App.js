import logo from './logo.svg';
import './App.css';
import Order from './Order';
import NavBar from './NavBar';
import Contact from './Contact.js';
import { BrowserRouter, Routes, Route,Navigate} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>

          <Route path="/" element={<Order/>} />
          <Route path="/contact" element= {<Contact/>}/>
          <Route path ="/*" element={<Navigate to="/"/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
