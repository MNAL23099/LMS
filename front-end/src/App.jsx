import AdminDashboard from "./SuperManager/AdminDashboard.jsx";
import SignUp from "./SignUp/signUp.jsx";
import Homepage from "./Homepage/Homepage.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SignIn from "./SignIn/SignIn.jsx";
import Footer from "./Footer/Footer.jsx";
import ViewStaff from "./SuperManager/FacultyOfEngineering/LabStaff/ViewStaff.jsx";
import { ViewInventory } from "./SuperManager/FacultyOfEngineering/Inventory/ViewInventory.jsx";
import Inventory_Dashboard from "./SuperManager/FacultyOfEngineering/Inventory/Inventory_Dashboard.jsx";
import AddInventory from "./SuperManager/FacultyOfEngineering/Inventory/AddInventory.jsx";
import EditInventory from "./SuperManager/FacultyOfEngineering/Inventory/EditInventory.jsx";
import LabStaff_Dashboard from "./SuperManager/FacultyOfEngineering/LabStaff/LabStaff_Dashboard.jsx";
import AssignLabs from "./SuperManager/FacultyOfEngineering/LabStaff/AssignLabs.jsx";
import FOE_Dashboard from "./SuperManager/FacultyOfEngineering/FOE_Dashboard.jsx";
import AddStaff from "./SuperManager/FacultyOfEngineering/LabStaff/AddStaff.jsx";
import { Lab_Dasboard } from "./SuperManager/FacultyOfEngineering/LabManagement/Lab_dasboard.jsx";
import AddLab from "./SuperManager/FacultyOfEngineering/LabManagement/AddLabs.jsx";
import ViewEditAssignedLabs from "./SuperManager/FacultyOfEngineering/LabStaff/ViewEditAssignedLabs.jsx";
import { ViewLabs } from "./SuperManager/FacultyOfEngineering/LabManagement/ViewLab.jsx";
import { Courses_Dashboard } from "./SuperManager/FacultyOfEngineering/Course/Courses_Dasboardd.jsx";
import { Add_Courses } from "./SuperManager/FacultyOfEngineering/Course/Add_Course.jsx";
import EditStaff from "./SuperManager/FacultyOfEngineering/LabStaff/EditStaff.jsx";
import { View_Course } from "./SuperManager/FacultyOfEngineering/Course/View_Courses.jsx";
import LabSubDashboard from "./Lab Sub Manager/LabSubDashboard.jsx";
import Courses_Dashboard_Sub_Manager from "./Lab Sub Manager/COURSES/Courses_Dashboard.jsx";
import AssignCourses from "./Lab Sub Manager/COURSES/AssignCourses.jsx";
import AssignInventoryToLab from "./Lab Sub Manager/Inventory Allocation/assignInventoryToLab.jsx";
import RequestInventoryForLab from "./Lab Sub Manager/Inventory Allocation/requestInventory.jsx";
import Handle_Pending_Requests from "./SuperManager/FacultyOfEngineering/Inventory/InventoryRequests/Handle_Pending_Requests.jsx";
import Inventory_Requests_Dashboard from "./SuperManager/FacultyOfEngineering/Inventory/InventoryRequests/Inventory_Requests_Dashboard.jsx";
import InventoryAllocation from "./Lab Sub Manager/Inventory Allocation/inventoryAllocation.jsx"
import LabEngineerDashboard from "./Lab Engineer/LabEngineerDashboard.jsx";
import { ViewAssignedCourse } from "./Lab Sub Manager/COURSES/View_Assigned_Courses.jsx";
import { ViewAllocatedInventory } from "./Lab Engineer/viewAllocatedInventory.jsx";
import Website_Admin_Dashboard from "./Website_Admin/Website_Admin_Dashboard.jsx";
import Website_Admin_Add_Account from "./Website_Admin/Website_Admin_Add_Account.jsx";
import Website_Admin_View_Accounts from "./Website_Admin/Website_Admin_View_Accounts.jsx";
import Student_Dashboard from "./Student/st_dashboard.jsx";
import { ViewToLabEngineer } from "./Lab Engineer/Courses_show/viewAssignedCourses.jsx";
import { Fetch_lab_space } from "./Lab Engineer/Courses_show/FetchLabSpace.jsx";
import FileUpload from "./fileUploadTest/FileUpload.jsx";
import AddFaculty from  "./SuperManager/FacultyOfEngineering/AddFaculty.jsx";
import AddStudents from "./Student/addStudent.jsx";
function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />}/>

        {/* SuperManager Routes */}
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
        <Route path="/adminDashboard" element={<AdminDashboard />} />
        <Route path="/lab_manage_dashboard" element= {<Lab_Dasboard/>}/>
        <Route path="/addlab" element = {<AddLab/>}/>
        <Route path="/viewlabss" element = {<ViewLabs/>}/>
        <Route path="/viewEditAssignedLabs" element = {<ViewEditAssignedLabs />} />
        <Route path="/Courses_manage" element = {<Courses_Dashboard/>}/>
        <Route path="/addCourse" element ={<Add_Courses/>}/>
        <Route path ="/viewCourse" element ={<View_Course/>}/>
        <Route path= "/fetch_space" element={<Fetch_lab_space/>}/>

        {/* SubManager Routes */}
        <Route path="/subManagerDashboard" element ={<LabSubDashboard/>} />
        <Route path="/Coursessubdash" element={<Courses_Dashboard_Sub_Manager/>}/>
        <Route path= "/assignCourses" element = {<AssignCourses/>}/>
        <Route path="/AssignInventoryToLab" element={<AssignInventoryToLab/>} />
        <Route path="/RequestInventoryForLab" element={<RequestInventoryForLab/>} /> 
        <Route path="/InventoryAllocation" element={<InventoryAllocation/>} />
        <Route path="/superManager/handleInventoryRequests" element={<Handle_Pending_Requests />} />
        <Route path="/superManager/IRDashboard" element={<Inventory_Requests_Dashboard />} />
        <Route path="/LabEngineerDashboard" element={<LabEngineerDashboard/>} />
        <Route path="/viewassigncourses" element={<ViewAssignedCourse/>}/>
        <Route path="/viewAllocatedInventory" element={<ViewAllocatedInventory/>} />
        <Route path="/studentDashboard" element={<Student_Dashboard/>}/>
        <Route path="/AddFaculty" element={<AddFaculty/>} />
        <Route path="/addStudents" element={<AddStudents/>} />

        {/* Website admin Routes */}
        <Route path="/websiteAdmin/dashboard" element={<Website_Admin_Dashboard />} />
        <Route path="/websiteAdmin/Dashboard/addAccount" element={<Website_Admin_Add_Account />}/> 
        <Route path="/websiteAdmin/Dashboard/viewAccounts" element={<Website_Admin_View_Accounts />} />
        <Route path= "/view_courses_by_lab_engineer" element={<ViewToLabEngineer/>}/>
        
        {/* Testing file uploading */}
        <Route path="/uploadFile" element={<FileUpload />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );

}

export default App
