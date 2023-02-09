import "./App.css";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HomePage } from "./components/HomePage";
import { Payment } from "./components/Payment";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />   
        <Routes>
        <Route exact path="/" element={<HomePage/>}></Route>  
        
        <Route exact path="/Home" element={<HomePage/>}></Route>
          
        <Route exact path="/Menu" element={<Menu/>}></Route>

        <Route exact path = "/Payment" element={<Payment/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
