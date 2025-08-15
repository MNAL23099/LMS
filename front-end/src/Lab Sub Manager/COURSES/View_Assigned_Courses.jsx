import Navbar from "../../Nav/Navbar";

function render_courses(batchFilter) {
   fetch("http://localhost:5000/Course/filter_assign_course", {
      
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ batchNumber: batchFilter })
  })
    .then((res)=>{return res.json()})
    .then((res)=>{
        const tableBody = document.getElementById("view_assigned_courses_table_1");
         tableBody.innerHTML = "";
       
        let rowNum = 1;
        for(let i= 0; i<res.length;i++){
           
            const tableRow = document.createElement("tr");
            const tablehead = document.createElement("th");
            tablehead.scope = "row";
            const tabledata = document.createElement("td");
            const tabledata1 = document.createElement("td");
            const tabledata2 = document.createElement("td");
            tablehead.textContent = rowNum++;
            tabledata.textContent = res[i].course_name;
            tabledata1.textContent = res[i].lab;
            tabledata2.textContent = res[i].labengineer;
            const unassignBtn = document.createElement("button");
            unassignBtn.textContent = "Un_Assign";
            unassignBtn.className = "btn btn-danger btn-sm";
              unassignBtn.onclick = function() {
                Delete(res[i].id);
            };
            tableBody.appendChild(tableRow);
            tableRow.appendChild(tablehead);
            tableRow.appendChild(tabledata);
            tableRow.appendChild(tabledata1);
            tableRow.appendChild(tabledata2);
            const actionTd = document.createElement("td");
            actionTd.appendChild(unassignBtn);
            tableRow.appendChild(actionTd);

          
        }
    })
}

function Delete(id){
   fetch("http://localhost:5000/Course/unassin_course", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ID :id})
  })
  .then((res)=>res.text())
  .then((res)=>{
      if(res === "missing_entries"){
        window.alert("Fill the required ID");
      }
      else if(res==="success"){
        window.alert("Successfully deleted");
        
           window.location.reload();
     
      }
      else {
        window.alert("Error: ");
      }
  })
}

export function ViewAssignedCourse() {

  return (
    <>
      <Navbar pageType="View Assigned Courses" />
      <div className="mb-3" style={{ maxWidth: '400px', margin: '0 auto', marginTop: '2rem' }}>
        <input type="text" id="batchFilterInput" className="form-control" placeholder="Enter batch number to filter" />
        <button className="btn btn-primary mt-2 w-100" onClick={() => {
          const batch = document.getElementById('batchFilterInput').value;
          render_courses(batch);
        }}>Filter</button>
      </div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Course</th>
              <th scope="col">Lab</th>
              <th scope="col">Lab Engineer</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="view_assigned_courses_table_1">
          </tbody>
        </table>
      </div>
    </>

  );
}


