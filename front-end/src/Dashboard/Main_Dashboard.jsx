import Navbar from "../Nav/Navbar";
import inventoryPicture from "../assets/inventoryPicture.jpg";
import { useNavigate } from "react-router-dom"; 


function Main_Dashboard(){

    const navigation = useNavigate();

    function goToInventoryDashboard(e){
        e.preventDefault();
        navigation("/inventoryDashboard");
    }

    return(

        <div id="div_1">
            <Navbar pageType="Dashboard"/>

                {/* Card for inventory management */}
                <div className="card" style={{width: "18rem"}}>
                <img src={inventoryPicture} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Inventory Management</h5>
                    <p className="card-text">Add inventory, see present inventory. Print out report for PEC requirement.</p>
                    <a onClick={goToInventoryDashboard} href="#" className="btn btn-primary">Go</a>
                </div>
                </div>
            
        </div>

    );  
}

export default Main_Dashboard;