import Navbar from "../../Nav/Navbar";
import { useNavigate } from "react-router-dom";


function Courses_Dashboard_Sub_Manager(){
  const navigate = useNavigate();
  
  function goToassigncourses(){
     navigate("/assigncourses");
      window.location.reload();
  }

   function goToViewassigncourses(){
     navigate("/viewassigncourses");
  }
  

  return (
    <>
      <Navbar pageType="Course Assing By Sub-Manager"/>
      <div style={{ minHeight: '100vh', background: '#fff', paddingTop: '2rem' }}>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {/* Assign Courses Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Assign Courses</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>Request for the courses from the admin and then assign them to labs of faculty of engineering</p>
              </div>
              <button onClick={goToassigncourses} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
          {/* View Assign Courses Card */}
          <div className="card" style={{ width: "17rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px' }}>
            <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
              <div className="text-center">
                <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>View Assign Courses</h5>
                <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>View the assigned courses</p>
              </div>
              <button onClick={goToViewassigncourses} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses_Dashboard_Sub_Manager;
