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
     
    function goToAddFaculty()
    {
        navigation("/AddFaculty");
    }

    function goToViewFaculty()
    {
        navigation("/adminDashboard");
    }

    function goToAddStudents()
    {
        navigation("/addStudents");
    }



    return(

        <div id="div_1">
            <Navbar pageType="Faculty Of Engineering"/>

                <div id="labEngineer-dashboardCards" style={{marginTop: '3rem'}}>

                {/* Card for inventory management */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={inventoryPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Inventory Management</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add inventory, see present inventory. Print out report for PEC requirement.</p>
                    </div>
                    <a onClick={goToInventoryDashboard} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                </div>
                </div>

                {/* Card for lab staff */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={labStaffPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Lab Staff</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add, edit and view lab staff members and print the report.</p>
                    </div>
                    <a onClick={goToStaffDashboard} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                </div>
                </div>

                {/* Card for lab management */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={image_labManagement} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Labs Management</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add, edit and view labs of Faculty of Engineering.</p>
                    </div>
                    <a onClick={goToLabManagement} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                </div>
                </div>
                {/* courses  */}
                 <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={course_management} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Courses Management</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add, edit and view courses of Faculty of Engineering.</p>
                    </div>
                    <a onClick={goToCoursesManagement} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                </div>
                </div>
                {/* Add Faculty Card */}
                <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
                    <img src={course_management} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Add Faculty </h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>can add faculties </p>
                    </div>
                    <button onClick={goToAddFaculty} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
                    </div>
                    </div>
                {/* View Faculty Card */}
                <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
                    <img src={course_management} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Faculty </h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>can view faculties</p>
                    </div>
                    <button onClick={goToViewFaculty} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
                    </div>
                    </div>

                    {/* Card for adding students  */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                <img src={labStaffPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                    <div className="text-center">
                        <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Add students</h5>
                        <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add students for specific batch and streams </p>
                    </div>
                    <a onClick={goToAddStudents} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                </div>
                </div>
                    </div>
        </div>

    );  
}

export default FOE_Dashboard;