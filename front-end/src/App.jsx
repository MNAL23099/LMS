import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import AddStaff from "./Admin/LabStaff/AddStaff.jsx";
import Footer from "./Footer/Footer.jsx";
import ViewStaff from "./Admin/LabStaff/ViewStaff.jsx";
import { ViewInventory } from "./Admin/Inventory/ViewInventory.jsx";
import Inventory_Dashboard from "./Admin/Inventory/Inventory_Dashboard.jsx";
import AddInventory from "./Admin/Inventory/AddInventory.jsx";
import EditInventory from "./Admin/Inventory/EditInventory.jsx";
import LabStaff_Dashboard from "./Admin/LabStaff/LabStaff_Dashboard.jsx";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/adminDashboard" element={<AdminDashboard />}/>
        <Route path="/inventoryDashboard" element={<Inventory_Dashboard />} />
        <Route path="/addInventory" element={<AddInventory />}></Route>
        <Route path="/editInventory" element={<EditInventory />} />
        <Route path="/labStaffDashboard" element={<LabStaff_Dashboard />} />
        <Route path="/addLabStaff" element={<AddStaff />} />
        <Route path="/viewLabStaff" element={<ViewStaff />} />
        <Route path="/viewInventory" element={<ViewInventory/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );


}

export default App
