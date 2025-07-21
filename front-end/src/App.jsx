import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LabEngineerDashboard from "./Lab Engineer/LabEngineerDashboard.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import Inventory_Dashboard from "./Inventory/Inventory_Dashboard/Inventory_Dashboard.jsx";
import AddInventory from "./Inventory/Inventory_Dashboard/addInventory.jsx";
import EditInventory from "./Inventory/Inventory_Dashboard/EditInventory.jsx";

function App() {

  return(
    <BrowserRouter>
    
    <Routes>

    <Route path="/" element={<Homepage />} />
    <Route path="/signup" element={<SignUp />}></Route>
    <Route path="/homepage" element={<Homepage />} />
    <Route path="/signin" element={<SignIn />}/>
    <Route path="/labEngineerDashboard" element={<LabEngineerDashboard />}/>
    <Route path="/inventoryDashboard" element={<Inventory_Dashboard />} />
    <Route path="/addInventory" element={<AddInventory />}></Route>
    <Route path="/editInventory" element={<EditInventory />} />

    </Routes>

    </BrowserRouter>
  );


}

export default App
