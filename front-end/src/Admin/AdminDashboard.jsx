import Navbar from "../Nav/Navbar";
import inventoryPicture from "../assets/inventoryPicture.jpg";
import labStaffPicture from "../assets/labStaff.jpeg";
import { useNavigate } from "react-router-dom"; 
import "./AdminDashboard.css";
import "./Inventory/Inventory_Dashboard.css";

function AdminDashboard(){

    const navigation = useNavigate();

    function goToInventoryDashboard(e){
        e.preventDefault();
        navigation("/inventoryDashboard");
    }

    function goToStaffDashboard(e){
        e.preventDefault();
        navigation("/labStaffDashboard");
    }


    return(

        <div id="div_1">
            <Navbar pageType="Admin Dashbord"/>

                <div id="labEngineer-dashboardCards">

                {/* Card for inventory management */}
                <div className="card" style={{width: "18rem"}}>
                <img src={inventoryPicture} className="card-img-top" alt="..."/>
                <div className="card-body themed-card-body">
                    <h5 className="card-title">Inventory Management</h5>
                    <p className="card-text">Add inventory, see present inventory. Print out report for PEC requirement.</p>
                    <a onClick={goToInventoryDashboard} href="#" className="btn btn-primary">Go</a>
                </div>
                </div>

                {/* Card for lab staff */}
                <div className="card" style={{width: "18rem"}}>
                <img src={labStaffPicture} className="card-img-top" alt="..."/>
                <div className="card-body themed-card-body ">
                    <h5 className="card-title">Lab Staff</h5>
                    <p className="card-text">Add, edit and view lab staff members and print the report.</p>
                    <a onClick={goToStaffDashboard} href="#" className="btn btn-primary">Go</a>
                </div>
                </div>

                </div>
            
        </div>

    );  
}

export default AdminDashboard;