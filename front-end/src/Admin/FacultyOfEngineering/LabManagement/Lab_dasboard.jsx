import Navbar from "../../../Nav/Navbar";
import { useNavigate } from "react-router-dom"; 
export function Lab_Dasboard(){

     const navigation = useNavigate();

    function goToAddLabs(e){
        e.preventDefault();
        navigation("/addlab");
    }

    // function goToEditLabs(e){
    //     e.preventDefault();
    //     navigation("/labStaffDashboard");
    // }

    function goToViewLabs(e){
        navigation("/lab_manage_dashboard");
    }

    return (
        <>
            <Navbar pageType="Lab Management"/>
            <div id="labEngineer-dashboardCards">
                {/* Card for adding labs  */}
                <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                    {/* <img src={inventoryPicture} className="card-img-top" alt="..."/> */}
                    <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                        <h5 className="card-title" style={{ fontWeight: 700 }}>Add labs </h5>
                        <p className="card-text">Add Labs in the list of labs that will be assigned to different faculties.</p>
                        <a onClick={goToAddLabs} href="/addlabs" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                    </div>
                </div>
            
                {/* Card for viewing labs in the list */}
                <div className="card" style={{width: "18rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800"}}>
                    {/* <img src={image_labManagement} className="card-img-top" alt="..."/> */}
                    <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
                        <h5 className="card-title" style={{ fontWeight: 700 }}>View Labs</h5>
                        <p className="card-text"> View added labs of Faculty of Engineering.</p>
                        <a onClick={goToViewLabs} href="#" className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "2px solid #e65100" }}>Go</a>
                    </div>
                </div>
            </div>
        </>
    );
}
    



     