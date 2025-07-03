import SignUp from "./Form/signUp.jsx";
import Navbar from "./Nav/Navbar.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";

function App() {

  return(
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Homepage/ >} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/homepage" element={<Homepage />} />



    </Routes>
    
    
    
    </BrowserRouter>
  );


}

export default App
