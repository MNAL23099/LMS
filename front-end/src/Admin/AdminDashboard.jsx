import Navbar from "../Nav/Navbar";
import { useNavigate } from "react-router-dom";
import image_FOE from "../assets/FOE.jpg";

function AdminDashboard(){

    const navigation = useNavigate();

    function goToFOE(){
        navigation("/foe_dashboard");
    }

    return (
        <>
            <Navbar pageType="Admin Dashboard" />

            {/* Faculty Of Engineering */}
            <div id="inventory-div_1">
            <div  onClick= {goToFOE}className="card" style={{width: "18rem"}}>
            <img src={image_FOE} class="card-img-top" alt="..."/>
            <div className="card-body themed-card-body">
                <h5 className="card-title">Faculty Of Engieering</h5>
                <p className="card-text">Handle the inventory, lab staff of FOE labs.</p>
                <a className="btn btn-primary">Go</a>
            </div>
            </div>
            </div>
        
        </>
    );
}

export default AdminDashboard;