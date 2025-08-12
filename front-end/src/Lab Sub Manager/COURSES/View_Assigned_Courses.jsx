import Navbar from "../../Nav/Navbar";

function fetch_courses(){

    fetch("http://localhost:5000/Course/view_assigned_courses")
    .then((res)=>{return res.json()})
    .then((res)=>{

        for(let i= 0; i<res.length; i++){
            const tableBody = document.getElementById("view_assigned_courses_table_1");

            const tableRow = document.createElement("tr");
            const tablehead = document.createElement("th");
            tablehead.scope = "row";
            const tabledata = document.createElement("td");
            const tabledata1 = document.createElement("td");
            const tabledata2 = document.createElement("td");
       

            tablehead.textContent = i+1;
            tabledata.textContent = res[i].course_name;
            tabledata1.textContent = res[i].lab;
            tabledata2.textContent = res[i].labengineer;
          

            tableBody.appendChild(tableRow);
            tableRow.appendChild(tablehead);
            tableRow.appendChild(tabledata);
            tableRow.appendChild(tabledata1);
            tableRow.appendChild(tabledata2);
         
        }})
    
}
export function ViewAssignedCourse() {
    fetch_courses();
  return (

    <>
      <Navbar pageType="View Assigned Courses" />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Lab</th>
              <th scope="col">Lab Engineer</th>
            </tr>
          </thead>
          <tbody id="view_assigned_courses_table_1">
          </tbody>
        </table>
      </div>
    </>

  );
}


