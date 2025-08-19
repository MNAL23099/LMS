import Navbar from "../../../Nav/Navbar";

function fetchLabsData(){
    //This function will fetch the labs data from db and then append rows inside the table that displays the labs
    //This function is called as soon as the webpage loads

    fetch("http://localhost:5000/labStaff/viewEditAssignedLabs")
    .then((res)=>{return res.json()})
    .then((data)=>{

        
        for(let i= 0; i< data.length; i++){

            const tableBody = document.getElementById("viewEditAssignedLabs-tbody");

            //This is the row inside which everything goes
            const tableRow = document.createElement("tr");

            //This is the row counter column
            const rowCount = document.createElement("th");
            rowCount.scope = "row";
            rowCount.textContent = i + 1;

            //This column stores the name of the lab
            const col_labName = document.createElement("td");
            col_labName.textContent = data[i].lab_name;

            //This column stores the lab engineer's mail and the button to remove him
            //Only give the value and the un assign button if that mail column is not null
            const col_labEngMail = document.createElement("td");
            if (!data[i].lab_eng_mail){
                col_labEngMail.textContent = "-";
            }
            else {
                col_labEngMail.textContent = data[i].lab_eng_mail;
                //This is the button
                const button_removeLabEng = document.createElement("button");
                button_removeLabEng.type="button";
                button_removeLabEng.className="btn btn-danger";
                button_removeLabEng.textContent = "Un-Assign";
                button_removeLabEng.style = "margin: 0 5px";
                button_removeLabEng.onclick = ()=>{unAssignLabEng(col_labEngMail.childNodes[0].textContent, col_labName.textContent, "lab_engineer")};
                col_labEngMail.appendChild(button_removeLabEng);
            }
            
            //This column stores the lab technician's mail and the button to remove him
            //Only give the value and the un assign button if that mail column is not null
            const col_labTecMail = document.createElement("td");
            if (!data[i].lab_tec_mail){
                col_labTecMail.textContent = "-";
            }
            else {
                col_labTecMail.textContent = data[i].lab_tec_mail;
                //This is the button
                const button_removeLabTec = document.createElement("button");
                button_removeLabTec.type = "button";
                button_removeLabTec.className = "btn btn-danger";
                button_removeLabTec.textContent = "Un-Assign";
                button_removeLabTec.style = "margin: 0 5px";
                button_removeLabTec.onclick = ()=>{unAssignLabEng(col_labTecMail.childNodes[0].textContent, col_labName.textContent, "lab_technician")};
                col_labTecMail.appendChild(button_removeLabTec);
            }
            
            //This column stores the lab assistant's mail and the button to remove him
            //Only give the value and the un assign button if that mail column is not null
            const col_labAssMail = document.createElement("td");
            if (!data[i].lab_ass_mail){
                col_labAssMail.textContent = "-";
            }
            else {
                col_labAssMail.textContent = data[i].lab_ass_mail;
                //This is the button
                const button_removeLabAss = document.createElement("button");
                button_removeLabAss.type = "button";
                button_removeLabAss.className = "btn btn-danger";
                button_removeLabAss.textContent = "Un-Assign";
                button_removeLabAss.style = "margin: 0 5px";
                button_removeLabAss.onclick = ()=>{unAssignLabEng(col_labAssMail.childNodes[0].textContent, col_labName.textContent, "lab_assistant")};
                col_labAssMail.appendChild(button_removeLabAss);
            }
            
            //Append all the columns inside the table body row
            tableRow.appendChild(rowCount);
            tableRow.appendChild(col_labName);
            tableRow.appendChild(col_labEngMail);
            tableRow.appendChild(col_labTecMail);
            tableRow.appendChild(col_labAssMail);

            //Append the row inside table body
            tableBody.appendChild(tableRow);
        }
    })
}

function ViewEditAssignedLabs(){
    return (
        <>
            <Navbar pageType="View & Edit Assigned Labs" />

            {/* This table body will be given rows dynamically from the db table assigned_labs */}
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Lab Name</th>
                        <th scope="col">Lab Engineer</th>
                        <th scope="col">Lab Technician</th>
                        <th scope="col">Lab Assistant</th>
                    </tr>
                </thead>
                <tbody id="viewEditAssignedLabs-tbody">
                </tbody>
            </table>
        </>
    );
}

//This function runs when user clicks on un-assign button for a lab engineer
function unAssignLabEng(labEngMail, targetLab, staffType){
     fetch("http://localhost:5000/labStaff/unAssignLab", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({targetEmail: labEngMail, targetLab: targetLab, staffType: staffType})
    })
    .then((res)=>{return res.text();})
    .then((textRes)=>{
        if (textRes == "success"){
            window.alert("The following staff member has been un-assigned from the desired lab!");
        }
        else if (textRes == "error"){
            window.alert("An unexpected error has occured, please contact the website developers.");
        }
        //Reload the page after completing the task
        window.location.reload();
    })
}

//Call this function as soon as the webpage loads
fetchLabsData();

export default ViewEditAssignedLabs;
