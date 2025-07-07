import SignUp from "./SignUp/signUp.jsx";
import Navbar from "./Nav/Navbar.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import SignIn from "./SignIn/SignIn.jsx";

function App() {

  return(
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/dashboard" element={<Dashboard />}/>

    </Routes>

    </BrowserRouter>
  );


}

export default App
