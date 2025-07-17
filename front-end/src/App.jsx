import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main_Dashboard from "./Dashboard/Main_Dashboard.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import Inventory_Dashboard from "./Inventory/Inventory_Dashboard/Inventory_Dashboard.jsx";
import AddInventory from "./Inventory/Inventory_Dashboard/addInventory.jsx";

function App() {

  return(
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/dashboard" element={<Main_Dashboard />}/>
    <Route path="/inventoryDashboard" element={<Inventory_Dashboard />} />
    <Route path="/addInventory" element={<AddInventory />}></Route>

    </Routes>

    </BrowserRouter>
  );


}

export default App
