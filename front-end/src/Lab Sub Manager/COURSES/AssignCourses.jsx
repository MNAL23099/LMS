import Navbar from "../../Nav/Navbar";
import { useState } from "react";


function AssignCourses() {
  
  //Corrected, replaced {} with []
  const [courses, setCourses] = useState("");
  const [labs, setLabs] = useState("");
  const [labEngineer, setLabEngineer] = useState("");
  const [batch,setBatch] = useState("");

  
  function fetch_again() {
    console.log(courses);
    console.log(labs);
    console.log(labEngineer);
    console.log(batch);
    fetch("http://localhost:5000/Course/assign_course", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Courses: courses, lab: labs, labeng: labEngineer,batchNumber: batch}),
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
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div className="card shadow" style={{ width: "350px", borderRadius: "1rem", backgroundColor: "white", border: "1.5px solid #191751ff" }}>
          <div className="card-body">
            <h3 className="card-title text-center mb-4" style={{ color: "#0d165cff", fontWeight: 700 }}>Assign Course to Lab</h3>
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
              <div className="form-floating mb-3">
                <input onChange={(e)=>{setBatch(e.target.value);}} type="text" className="form-control" id="batchInput" placeholder="21_BSSE" />
                <label htmlFor="batchInput">Enter the Batch (e.g. 21_BSSE)</label>
              </div>

              {/* The fetch_again function will get called when user clicks on Assign */}
              <button onClick={()=> {fetch_again()}} type="submit" className="btn btn-warning w-100 fw-bold" style={{ borderRadius: "25px" }}>Assign</button>
                
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
 function fetch_data(){
     
    fetch("http://localhost:5000/Course/view_course",{
      method: "GET",
    }
      
    )
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
     fetch("http://localhost:5000/labManagement/viewlabs",{
      method: "GET",
    }
      
    )
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
     fetch("http://localhost:5000/labStaff/viewHiredEngineerForCourses",{
      method: "GET",
    }
      
    )
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
