import Navbar from "../../../Nav/Navbar";
import { useNavigate } from "react-router-dom"; 
import inventoryPicture from "../../../assets/inventoryPicture.jpg"
import image_labManagement from "../../../assets/viewInventoryCard.jpg"
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
        navigation("/viewlabss");
        window.location.reload();
    }

    return (
        <>
            <Navbar pageType="Lab Management"/>
            <div id="labEngineer-dashboardCards" style={{marginTop: '3rem'}}>
                {/* Card for adding labs  */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                    <img src={inventoryPicture} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                        <div className="text-center">
                            <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Add labs</h5>
                            <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add Labs in the list of labs that will be assigned to different faculties.</p>
                        </div>
                        <a onClick={goToAddLabs} href="/addlabs" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                    </div>
                </div>
            
                {/* Card for viewing labs in the list */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem'}}>
                    <img src={image_labManagement} className="card-img-top" alt="..." style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                        <div className="text-center">
                            <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Labs</h5>
                            <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>View added labs of Faculty of Engineering.</p>
                        </div>
                        <a onClick={goToViewLabs} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                    </div>
                </div>
            </div>
        </>
    );
}
    



     