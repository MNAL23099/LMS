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
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src={inventoryPicture} className="card-img-top" alt="..."/> */}
                    <div className="card-body themed-card-body">
                        <h5 className="card-title">Add labs </h5>
                        <p className="card-text">Add Labs in the list of labs that will be assigned to different faculties.</p>
                        <a onClick={goToAddLabs} href="/addlabs" className="btn btn-primary">Go</a>
                    </div>
                </div>
                {/* Card for editing labs*/}
                {/* <div className="card" style={{width: "18rem"}}>
                    <img src={labStaffPicture} className="card-img-top" alt="..."/>
                    <div className="card-body themed-card-body ">
                        <h5 className="card-title">Lab name edit</h5>
                        <p className="card-text">edit the name of lab you have from here, can also delete that name from list.</p>
                        <a onClick={goToEditLabs} href="#" className="btn btn-primary">Go</a>
                    </div>
                </div> */}
                {/* Card for viewing labs in the list */}
                <div className="card" style={{width: "18rem"}}>
                    {/* <img src={image_labManagement} className="card-img-top" alt="..."/> */}
                    <div className="card-body themed-card-body ">
                        <h5 className="card-title">View Labs</h5>
                        <p className="card-text"> View added labs of Faculty of Engineering.</p>
                        <a onClick={goToViewLabs} href="#" className="btn btn-primary">Go</a>
                    </div>
                </div>
            </div>
        </>
    );
}
    



     