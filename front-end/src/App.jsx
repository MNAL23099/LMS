import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LabEngineerDashboard from "./Lab Engineer/LabEngineerDashboard.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import Inventory_Dashboard from "./Lab Engineer/Inventory/Inventory_Dashboard.jsx";
import AddInventory from "./Lab Engineer/Inventory/addInventory.jsx";
import EditInventory from "./Lab Engineer/Inventory/EditInventory.jsx";
import LabStaff_Dashboard from "./Lab Engineer/LabStaff/LabStaff_Dashboard.jsx";
import AddStaff from "./Lab Engineer/LabStaff/AddStaff.jsx";
import Footer from "./Footer/Footer.jsx";

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
        <Route path="/labStaffDashboard" element={<LabStaff_Dashboard />} />
        <Route path="/addStaff" element={<AddStaff />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );


}

export default App
