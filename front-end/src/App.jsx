import AdminDashboard from "./Admin/AdminDashboard.jsx";
import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn/SignIn.jsx";
import Footer from "./Footer/Footer.jsx";
import ViewStaff from "./Admin/FacultyOfEngineering/LabStaff/ViewStaff.jsx";
import { ViewInventory } from "./Admin/FacultyOfEngineering/Inventory/ViewInventory.jsx";
import Inventory_Dashboard from "./Admin/FacultyOfEngineering/Inventory/Inventory_Dashboard.jsx";
import AddInventory from "./Admin/FacultyOfEngineering/Inventory/AddInventory.jsx";
import EditInventory from "./Admin/FacultyOfEngineering/Inventory/EditInventory.jsx";
import LabStaff_Dashboard from "./Admin/FacultyOfEngineering/LabStaff/LabStaff_Dashboard.jsx";
import AssignLabs from "./Admin/FacultyOfEngineering/LabStaff/AssignLabs.jsx";
import FOE_Dashboard from "./Admin/FacultyOfEngineering/FOE_Dashboard.jsx";
import AddStaff from "./Admin/FacultyOfEngineering/LabStaff/AddStaff.jsx";
import { Lab_Dasboard } from "./Admin/FacultyOfEngineering/LabManagement/Lab_dasboard.jsx";
import AddLab from "./Admin/FacultyOfEngineering/LabManagement/AddLabs.jsx";
import ViewEditAssignedLabs from "./Admin/FacultyOfEngineering/LabStaff/ViewEditAssignedLabs.jsx";
import { ViewLabs } from "./Admin/FacultyOfEngineering/LabManagement/ViewLab.jsx";
// import AdminDashboard from "./Admin/AdminDashboard.jsx";

function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/inventoryDashboard" element={<Inventory_Dashboard />} />
        <Route path="/addInventory" element={<AddInventory />}></Route>
        <Route path="/editInventory" element={<EditInventory />} />
        <Route path="/labStaffDashboard" element={<LabStaff_Dashboard />} />
        <Route path="/addLabStaff" element={<AddStaff />} />
        <Route path="/viewLabStaff" element={<ViewStaff />} />
        <Route path="/viewInventory" element={<ViewInventory/>}/>
        <Route path="/assignLabs" element={<AssignLabs />} />
        <Route path="/foe_dashboard" element={<FOE_Dashboard />} />
        <Route path="/lab_manage_dashboard" element= {<Lab_Dasboard/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/addlab" element = {<AddLab/>}/>
        <Route path="/viewlabss" element = {<ViewLabs/>}/>
        <Route path="/viewEditAssignedLabs" element = {<ViewEditAssignedLabs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App
