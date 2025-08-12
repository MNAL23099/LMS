import Navbar from "../../Nav/Navbar";
import { useState } from "react";


function AssignCourses() {
  
  //Corrected, replaced {} with []
  const [courses, setCourses] = useState("");
  const [labs, setLabs] = useState("");
  const [labEngineer, setLabEngineer] = useState("");

  
  function fetch_again() {
    console.log(courses);
    console.log(labs);
    console.log(labEngineer);
    fetch("http://localhost:5000/Course/assign_course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Courses: courses, lab: labs, labeng: labEngineer }),
    })
      .then((res) => { return res.text(); }) //Corrected from res.json() to res.text()
      .then((res) => {
        if (res === "Not added") {
          window.alert("Cant be added");
        }
        else if (res === "success") {
          window.alert("Successfully added");
        }
        else if("missing_entries"){
          window.alert("Add the entries again");
        }
        //Backend is sending "missing_entries" response but that is not added here
      })
  }

  // fetch_again(); if we call this function as soon as the webpage loads, it's going to send the useState variables to backend
  //We don't want that, we want that we send those variables to the backend when user presses the Assign button but calling this 
  //..function here\ will send those automatically as soon as the webpage loads
  
  return (
    <>
      <Navbar pageType="Assign Course" />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", background: "#fff" }}>
        <div className="card shadow" style={{ width: "370px", borderRadius: "1rem", background: "#fff", border: "2px solid #002147", boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(255,212,0,0.10)", fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4" style={{ color: "#002147", fontWeight: 800, letterSpacing: "1px" }}>Assign Course to Lab</h3>
            <form>
              <div className="form-floating mb-3">
                <select onChange={(e)=>{setCourses(e.target.value);}} className="form-select" id="assigncourses" aria-label="Floating label select example" style={{ border: "1.5px solid #002147", borderRadius: "8px", color: "#002147", fontWeight: 500 }}>
                  <option value="">Select Course</option>
                </select>
                <label htmlFor="floatingSelect" style={{ color: "#002147", fontWeight: 600 }}>Choose Course</label>
              </div>
              <div className="form-floating mb-3">
                <select onChange={(e)=>{setLabs(e.target.value);}} className="form-select" id="assignLab" aria-label="Floating label select example" style={{ border: "1.5px solid #002147", borderRadius: "8px", color: "#002147", fontWeight: 500 }}>
                  <option value="">Select lab</option>
                </select>
                <label htmlFor="floatingSelect" style={{ color: "#002147", fontWeight: 600 }}>Choose lab</label>
              </div>
              <div className="form-floating mb-3">
                <select onChange={(e)=>{setLabEngineer(e.target.value);}} className="form-select" id="assignLabEngineer" aria-label="Floating label select example" style={{ border: "1.5px solid #002147", borderRadius: "8px", color: "#002147", fontWeight: 500 }}>
                  <option value="">Select lab engineer</option>
                </select>
                <label htmlFor="floatingSelect" style={{ color: "#002147", fontWeight: 600 }}>Choose engineer</label>
              </div>
              {/* The fetch_again function will get called when user clicks on Assign */}
              <button onClick={()=> {fetch_again()}} type="submit" className="btn w-100 fw-bold" style={{ borderRadius: "25px", background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", fontWeight: 700, border: "2.5px solid #ffd700" }}>Assign</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
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
     fetch("http://localhost:5000/labStaff/viewHiredEngineerForCourses")
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

export default AssignCourses;
