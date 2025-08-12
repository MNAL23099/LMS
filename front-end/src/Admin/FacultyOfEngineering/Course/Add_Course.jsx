import Navbar from "../../../Nav/Navbar";
import { useState } from "react";

export function Add_Courses(){
                
    const [courseName, setCourseName] = useState("");
    function submitForm(e) {
        e.preventDefault();
        fetch("http://localhost:5000/Course/addcourse", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ courseName}),
        })
            .then((response) => response.text())
            .then((textResponse) => {
                if (textResponse === "missing_entries") {
                    window.alert("Please fill all entries!");
                } else if (textResponse === "new_course_added") {
                    window.alert("New course detected! It has been added");
                } else if (textResponse === "course_already_exists") {
                    window.alert("Course already exists!");
                } else if (textResponse === "failure") {
                    window.alert("Unexpected error occurred! Please contact the developers!");
                }
                window.location.reload();
            });
    }

        return(
        <>
          <Navbar pageType="Add Course"/>

        <div id="addInventory-div_1" style={{
            minHeight: "100vh",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        }}>
        <form onSubmit={submitForm} id="inventory-div_1-form_1" style={{
            background: "#fff",
            borderRadius: "18px",
            boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(255,212,0,0.10)",
            padding: "2rem 2.2rem",
            maxWidth: "370px",
            width: "100%",
            border: "2px solid #002147",
            color: "#002147"
        }}>
        <h2 style={{
            textAlign: "center",
            marginBottom: "1.5rem",
            color: "#002147",
            fontWeight: 800,
            letterSpacing: "1px",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
        }}>Add Courses</h2>
        <div className="mb-3">
            <label htmlFor="add-course-name" className="form-label" style={{fontWeight: 600, color: '#002147'}}>Course Name</label>
            <input onChange={(e)=>{setCourseName(e.target.value)}} type="text" className="form-control" id="add-course-name" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1.5px solid #002147', fontWeight: 500}} aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text" style={{color: '#002147'}}>For example: Linear Algebra, Thermodynamics etc.</div>
        </div>
        <button type="submit" className="inventory-go-btn w-100" style={{
            borderRadius: "25px",
            fontWeight: 700,
            fontSize: "1.1rem",
            background: 'linear-gradient(90deg, #ffd700 0%, #ffb400 100%)',
            color: "#002147",
            border: "2.5px solid #ffd700",
            boxShadow: "0 2px 8px 0 rgba(0,33,71,0.10)",
            marginTop: "1rem"
        }}>Submit</button>
        </form>
        </div>
        </>
        
        
    );
}

