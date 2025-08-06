import Navbar from "../../Nav/Navbar";
import { useNavigate } from "react-router-dom";


function Courses_Dashboard_Sub_Manager(){
  const navigate = useNavigate();
  
  function goToassigncourses(){
     navigate("/assigncourses");
  }

   function goToViewassigncourses(){
     navigate("/viewassigncourses");
  }
  

  return (
    <>
      <Navbar pageType="Lab Sub Manager Dashboard"/>
      <div>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Request Inventory Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
         
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>Assign Courses</h5>
              <p className="card-text">Request for the courses from teh admin and then assign them to labs of faculty of engineering </p>
              <button onClick={goToassigncourses} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* Course Assignment  Card */}
          <div className="card" style={{ width: "15rem", background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)", border: "1.5px solid #ff9800" }}>
          
            <div className="card-body" style={{ background: "#fff3e0", color: "#e65100", borderRadius: "0 0 1rem 1rem" }}>
              <h5 className="card-title" style={{ fontWeight: 700 }}>View Assign Courses</h5>
              <p className="card-text"> View the assigned courses </p>
              <button  onClick={goToViewassigncourses} className="btn btn-primary" style={{ background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)", color: "#fff", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Courses_Dashboard_Sub_Manager;
