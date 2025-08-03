import Navbar from "../../Nav/Navbar";
import inventoryPicture from "../../assets/inventoryPicture.jpg";
import labStaffPicture from "../../assets/labStaff.jpeg";
import { useNavigate } from "react-router-dom"; 
import "./FOE_Dashboard.css";
import "./Inventory/Inventory_Dashboard.css";
import image_labManagement from "../../assets/lab.jpg";
import course_management from "../../assets/course management system.jpg";

function FOE_Dashboard(){

    const navigation = useNavigate();

    function goToInventoryDashboard(e){
        e.preventDefault();
        navigation("/inventoryDashboard");
    }

    function goToStaffDashboard(e){
        e.preventDefault();
        navigation("/labStaffDashboard");
    }

    function goToLabManagement(){
        navigation("/lab_manage_dashboard");
    }

    function goToCoursesManagement(){
        navigation("/Courses_manage");
    }



    return(

        <div id="div_1">
            <Navbar pageType="Faculty Of Engineering"/>

                <div id="labEngineer-dashboardCards">

                {/* Card for inventory management */}
                <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={inventoryPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Inventory Management</h5>
                    <p className="card-text">Add inventory, see present inventory. Print out report for PEC requirement.</p>
                    <a onClick={goToInventoryDashboard} href="#" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                </div>
                </div>

                {/* Card for lab staff */}
                <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={labStaffPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Lab Staff</h5>
                    <p className="card-text">Add, edit and view lab staff members and print the report.</p>
                    <a onClick={goToStaffDashboard} href="#" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                </div>
                </div>

                {/* Card for lab management */}
                <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={image_labManagement} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Labs Management</h5>
                    <p className="card-text">Add, edit and view labs of Faculty of Engineering.</p>
                    <a onClick={goToLabManagement} href="#" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                </div>
                </div>
                {/* courses  */}
                 <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                <img src={course_management} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                    <h5 className="card-title" style={{ fontWeight: 700 }}>Courses Management</h5>
                    <p className="card-text">Add, edit and view courses of Faculty of Engineering.</p>
                    <a onClick={goToCoursesManagement} href="#" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                </div>
                </div>

                </div>
            
        </div>

    );  
}

export default FOE_Dashboard;