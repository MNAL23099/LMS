import Navbar from "../../../Nav/Navbar";
import { useNavigate } from "react-router-dom";


export function Courses_Dashboard (){
    
    const navigation = useNavigate();
    function gotoAddCourses(e){
           e.preventDefault();
               navigation("/addCourse");
    } 
    function gotoViewCourses(e){
           e.preventDefault();
           navigation("/viewCourse");
           window.location.reload();
        
    } 
    return(
     <>
         <Navbar pageType="Courses Management"/>
            <div id="labEngineer-dashboardCards" style={{marginTop: '3rem'}}>
                {/* Card for adding labs  */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '260px', marginTop: '1rem'}}>
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                        <div className="text-center">
                            <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Add Courses</h5>
                            <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Add Courses in the list of Courses that will be assigned to different labs.</p>
                        </div>
                        <a onClick={gotoAddCourses} href="/addlabs" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                    </div>
                </div>
            
                {/* Card for viewing labs in the list */}
                <div className="card d-flex flex-column justify-content-between" style={{width: "18rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '260px', marginTop: '1rem'}}>
                    <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
                        <div className="text-center">
                            <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.1rem', marginBottom: '0.5rem' }}>View Courses</h5>
                            <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>View added Courses of Faculty of Engineering</p>
                        </div>
                        <a onClick={gotoViewCourses} href="#" className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</a>
                    </div>
                </div>
            </div>
     
     
     
     </>

    );
}