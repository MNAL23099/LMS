import Navbar from "../../../Nav/Navbar";

export function View_Course(){

    fetch("http://localhost:5000/Course/view_course")
    .then((res)=>{  return res.json();})
    .then((res)=>{
        for(let i = 0 ; i<res.length ; i++){
            const tablebody = document.getElementById("view_courses_table_2");
            const tablerow = document.createElement("tr");
            const tablehead = document.createElement("th");
            tablehead.scope = "row";
            const tabledata_1 = document.createElement("td");
            const tabledata_2 = document.createElement("td");

            tablehead.textContent = i+1;
            tabledata_1.textContent = res[i].course_name;

            // Add delete button for each row
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "btn btn-danger btn-sm";
            deleteBtn.onclick = function() {
                Deletion(res[i].id);
            };
            tabledata_2.appendChild(deleteBtn);

            tablerow.appendChild(tablehead);
            tablerow.appendChild(tabledata_1);
            tablerow.appendChild(tabledata_2);
            tablebody.appendChild(tablerow);
        }
    })
    
    return(

      <>
      <Navbar pageType="View Courses" />
      <div>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody id="view_courses_table_2">
          </tbody>
        </table>
      </div>
    </>

    );
}

function Deletion(courseId){
  fetch("http://localhost:5000/Course//delete_course", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: courseId })
  })
  .then((res)=>res.text())
  .then((res)=>{
      if(res === "missing_entries"){
        window.alert("Fill the required ID");
      }
      else if(res==="success"){
        window.alert("Successfully deleted");
     
      }
      else {
        window.alert("Error: ");
      }
  })
}


//   <tr>
//       <th scope="row">3</th>
//       <td>John</td>
//       <td>Doe</td>
//       <td>@social</td>
//     </tr>