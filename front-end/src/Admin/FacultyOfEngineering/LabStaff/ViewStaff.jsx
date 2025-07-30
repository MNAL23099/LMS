import Navbar from "../../../Nav/Navbar";


function fetchDataFromBackEnd(){ //This is the function which will fetch all the staff
    //data from the backend and will also display it in the frontend

    fetch("http://localhost:5000/labStaff/viewStaff")
    .then((res)=>{return res.json()})
    .then((data)=>{
        for(let i= 0; i<data.length; i++){
            let tableBody = document.getElementById("viewLabStaff-tableBody");

            let tableRow = document.createElement("tr"); //This is the row that will have the cols below

            //Columns
            let col_rowNo = document.createElement("th"); //This is the col that shows row number
            col_rowNo.scope = "row";
            let col_name = document.createElement("td"); //This is the col that shows the staff member name
            let col_email = document.createElement("td"); //This is the col that shows the staff member email
            let col_designation = document.createElement("td"); //This is the col that shows the staff member designation

            //Assign the cols their values
            col_rowNo.textContent = i + 1; //This is the row number
            col_name.textContent = data[i].name;
            col_email.textContent = data[i].email;
            col_designation.textContent = data[i].designation;

            //Append the children into their parents
            tableRow.appendChild(col_rowNo);
            tableRow.appendChild(col_name);
            tableRow.appendChild(col_email);
            tableRow.appendChild(col_designation);
            tableBody.appendChild(tableRow);
        }

    })
}

function ViewStaff(){
    return(
        <>
            <Navbar pageType="View Lab Staff" />

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    </tr>
                </thead>
                <tbody id="viewLabStaff-tableBody">
                </tbody>
            </table>
        </>
    );
}

fetchDataFromBackEnd(); //Call this function as soon as the page loads

export default ViewStaff;