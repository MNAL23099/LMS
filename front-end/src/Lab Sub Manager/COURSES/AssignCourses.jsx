import Navbar from "../../Nav/Navbar";
import { useState } from "react";


function AssignCourses() {
  
  const {courses, setCourses} = useState("");
  const {labs, setLabs}= useState("");
  const {labEngineer, setLabEngineer} = useState("");

   function fetch_data(){
     
    fetch("http://localhost:5000/Course/view_course")
    .then((res)=>{return res.json();})
    .then((res)=>{
       const course = document.getElementById("assigncourses");

       for(let i =0; i < res.length; i++){
        const option = document.createElement("option");
        option.textContent = res[i].course_name;
        option.value = res[i].course_name;

        course.appendChild(option);

       }
    })
     fetch("http://localhost:5000/labManagement/viewlabs")
     .then((res)=>{return res.json();})
     .then((res)=>{
      const labs = document.getElementById("assignLab");

       for(let i =0; i < res.length; i++){
        const option = document.createElement("option");
        option.textContent = res[i].lab_name;
        option.value = res[i].lab_name;

        labs.appendChild(option);

       }
     })
     fetch("http://localhost:5000/labStaff/viewStaff")
     .then((res)=>{return res.json();})
     .then((res)=>{
      const labEngineer = document.getElementById("assignLabEngineer");

       for(let i =0; i < res.length; i++){
        const option = document.createElement("option");
        option.textContent = res[i].email;
        option.value = res[i].email;

        labEngineer.appendChild(option);

       }
     })
     
   }

   fetch_data();
  
  return (
    <>
      <Navbar pageType="Assign Course" />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card shadow" style={{ width: "350px", borderRadius: "1rem", background: "linear-gradient(135deg, #fffbe6 0%, #ffe0b2 100%)", border: "1.5px solid #ff9800" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4" style={{ color: "#e65100", fontWeight: 700 }}>Assign Course to Lab</h3>
            <form>
              <div className="form-floating mb-3">
                <select onChange={(e)=>{setCourses(e.target.value);}} className="form-select" id="assigncourses" aria-label="Floating label select example">
                  <option value="">Select Course</option>
                 
                </select>
                <label htmlFor="floatingSelect">Choose Course</label>
              </div>
              <div className="form-floating mb-3">
                <select onChange={(e)=>{setLabs(e.target.value);}} className="form-select" id="assignLab" aria-label="Floating label select example">
                  <option value="">Select lab</option>
                 
                </select>
                <label htmlFor="floatingSelect">Choose lab</label>
              </div>
                  <div className="form-floating mb-3">
                <select onChange={(e)=>{setLabEngineer(e.target.value);}} className="form-select" id="assignLabEngineer" aria-label="Floating label select example">
                  <option value="">Select lab engineer</option>
             
                </select>
                <label htmlFor="floatingSelect">Choose engineer</label>
              </div>
              <button type="submit" className="btn btn-warning w-100 fw-bold" style={{ borderRadius: "25px" }}>Assign</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignCourses;
