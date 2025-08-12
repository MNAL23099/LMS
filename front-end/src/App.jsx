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
import { Courses_Dashboard } from "./Admin/FacultyOfEngineering/Course/Courses_Dasboardd.jsx";
import { Add_Courses } from "./Admin/FacultyOfEngineering/Course/Add_Course.jsx";
import EditStaff from "./Admin/FacultyOfEngineering/LabStaff/EditStaff.jsx";
import { View_Course } from "./Admin/FacultyOfEngineering/Course/View_Courses.jsx";
import LabSubDashboard from "./Lab Sub Manager/LabSubDashboard.jsx";
import Courses_Dashboard_Sub_Manager from "./Lab Sub Manager/COURSES/Courses_Dashboard.jsx";
import AssignCourses from "./Lab Sub Manager/COURSES/AssignCourses.jsx";
import AssignInventoryToLab from "./Lab Sub Manager/Inventory Allocation/assignInventoryToLab.jsx";
import RequestInventoryForLab from "./Lab Sub Manager/Inventory Allocation/requestInventory.jsx";
import InventoryAllocation from "./Lab Sub Manager/Inventory Allocation/inventoryAllocation.jsx";
import Handle_Pending_Requests from "./Admin/FacultyOfEngineering/Inventory/InventoryRequests/Handle_Pending_Requests.jsx";
import Inventory_Requests_Dashboard from "./Admin/FacultyOfEngineering/Inventory/InventoryRequests/Inventory_Requests_Dashboard.jsx";

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
        <Route path="/editLabStaff" element={<EditStaff />} />
        <Route path="/viewInventory" element={<ViewInventory/>}/>
        <Route path="/assignLabs" element={<AssignLabs />} />
        <Route path="/foe_dashboard" element={<FOE_Dashboard />} />
        <Route path="/lab_manage_dashboard" element= {<Lab_Dasboard/>}/>
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/addlab" element = {<AddLab/>}/>
        <Route path="/viewlabss" element = {<ViewLabs/>}/>
        <Route path="/viewEditAssignedLabs" element = {<ViewEditAssignedLabs />} />
        <Route path="/Courses_manage" element = {<Courses_Dashboard/>}/>
        <Route path="/addCourse" element ={<Add_Courses/>}/>
        <Route path ="/viewCourse" element ={<View_Course/>}/>
        <Route path="/subManagerDashboard" element ={<LabSubDashboard/>} />
        <Route path="/Coursessubdash" element={<Courses_Dashboard_Sub_Manager/>}/>
        <Route path= "/assignCourses" element = {<AssignCourses/>}/>
        <Route path="/AssignInventoryToLab" element={<AssignInventoryToLab/>} />
        <Route path="/RequestInventoryForLab" element={<RequestInventoryForLab/>} /> 
        <Route path="/InventoryAllocation" element={<InventoryAllocation/>} />
        <Route path="/superManager/handleInventoryRequests" element={<Handle_Pending_Requests />} />
        <Route path="/superManager/IRDashboard" element={<Inventory_Requests_Dashboard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App
