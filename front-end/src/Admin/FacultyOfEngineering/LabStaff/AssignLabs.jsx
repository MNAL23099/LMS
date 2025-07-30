import { useState } from "react";
import Navbar from "../../../Nav/Navbar";

function AssignLabs(){

    const [staffType, setStaffType] = useState("");
    const [assignedStaffMember, setAssignedStaffMember] = useState("");
    const [chosenLab, setChosenLab] = useState("");

    function fetchStaff(){ //This function receives the type of lab staff requested and it fetches that type of available staff from DB inside the
    //availableStaff select bar

    if (!staffType){
        console.log("AssignLabs.js -> fetchStaff() -> staffType is null!");
        return
    }

    fetch("http://localhost:5000/labStaff/assignLabs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({staffType: staffType}),
    })
    .then((res)=>{return res.json();})
    .then((data)=>{
        const availableStaff = document.getElementById("assignLabs-select_availableStaff");
        availableStaff.innerHTML = ""; //If it already had children appended, remove them first

        for(let i= 0; i< data.length; i++){
            const option = document.createElement("option");

            //Give the lab staff member email to this option tag
            option.value = data[i].email;
            option.textContent = data[i].email;

            availableStaff.appendChild(option);
        }
    })

    }

    function fetchLabs(){ //This function fetches and displays the avaible labs to be assigned to lab staff inside
        //assignLabs-select_lab

    }

    return(
        <>
            <Navbar pageType="Assign Labs Dashboard"/>

            {/* This select bar is to choose lab staff type */}
            <select onChange={(e)=>{setStaffType(e.target.value);}} class="form-select" aria-label="Default select example">
                <option value="nothing">Staff Type</option>
                <option value="lab_engineer">Lab Engineer</option>
                <option value="lab_technician">Lab Technician</option>
                <option value="lab_assistant">Lab Assistant</option>
            </select>

            {/* Button to set staffType */}
            <button onClick={()=>{fetchStaff();}} type="button" class="btn btn-warning">Set Staff Type</button>

            {/* This select bar is to choose from the fetched lab staff */}
            <select onChange={(e)=>{setAssignedStaffMember(e.target.value)}} id="assignLabs-select_availableStaff" class="form-select" aria-label="Default select example">
                <option selected>Select Staff Member</option>
            </select>

            {/* This select bar is to choose an available lab to assign the staff to it */}
            <select onChange={(e)=>{setChosenLab(e.target.value)}} id="assignLabs-select_lab" class="form-select" aria-label="Default select example">
                <option selected>Select Lab</option>
            </select>

        </>
        
    );
    

}


export default AssignLabs;