

import Navbar from "../../Nav/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ViewToLabEngineer() {
  const [lab_email, setLabEmail] = useState(""); // sirf email ke liye state
  const navigate = useNavigate();
function gotoLabSpace(){
                                     //yhn labs upload ho
    navigate("/fetch_space");
}

function fetchCourses() {
  fetch("http://localhost:5000/Course/view_courses_to_lab_engineer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ lab_email }),
  }) 
     
    .then((res) => res.json())
    .then((res) => {
      // pehle purane results clear kar do
     
      document.getElementById("courses-box").innerHTML = "";

      for (let i = 0; i < res.length; i++) {
      const card = document.createElement("div");
        card.style.border = "1px solid #ddd";
        card.style.padding = "16px";
        card.style.margin = "12px 0";
        card.style.borderRadius = "10px";
        card.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.1)";
        card.style.backgroundColor = "#fff";
        card.style.transition = "transform 0.2s";

        const title = document.createElement("h4");
        title.textContent = res[i].course_name;
        title.style.marginBottom = "6px";
        title.style.color = "#4B0082"; // purple
        title.style.fontFamily = "Arial, sans-serif";
        const batch = document.createElement("p");
        batch.textContent = `Batch: ${res[i].batchnumber}`;
         
          const btn = document.createElement("button");
           btn.onclick = function() {
                gotoLabSpace();
            };
            btn.textContent = "View Details"; 
            btn.style.padding = "6px 10px";
            btn.style.background = "purple";
            btn.style.color = "white";
            btn.style.border = "none";
            btn.style.borderRadius = "5px";
            btn.style.cursor = "pointer";

        card.appendChild(title);
        card.appendChild(batch);
        card.appendChild(btn);

        document.getElementById("courses-box").appendChild(card);
      }
    })
 
}

  return (
    <>
        <Navbar pageType="Lab Engineer View AAsigned Courses"/>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h2>View Assigned Courses</h2>

        <input
          type="email"
          placeholder="Enter lab engineer email"
          value={lab_email}
          onChange={(e) => setLabEmail(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        />
        <button
          onClick={fetchCourses}
          style={{
            padding: "8px 12px",
            background: "purple",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Fetch Courses
        </button>

        {/* yahan cards show honge */}
        <div id="courses-box" style={{ marginTop: "20px" }}></div>
      </div>
    </>
  );
}
