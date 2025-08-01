import { useState } from "react";
import Navbar from "../../../Nav/Navbar";
import { useEffect } from "react";

function AssignLabs(){

    const [staffType, setStaffType] = useState("");
    const [assignedStaffMember, setAssignedStaffMember] = useState("");
    const [chosenLab, setChosenLab] = useState("");

    function submitForm(){

        fetch("http://localhost:5000/labStaff/assignLabToStaffMember", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({staffType: staffType, staffMember: assignedStaffMember, labName: chosenLab}),
        })
        .then((res)=> {return res.text();})
        .then((textRes)=> {
            if (textRes == "missing_entries"){
                window.alert("Please fill all entries")
            }
            else if (textRes == "success"){
                window.alert("The lab has been assigned to the desired staff member!");
                window.location.reload();
            }
        })

    }

    function fetchStaff(){ //This function receives the type of lab staff requested and it fetches that type of available staff from DB inside the
    //availableStaff select bar

    if (!staffType){
        console.log("AssignLabs.js -> fetchStaff() -> staffType is null!");
        return
    }

    const availableStaff = document.getElementById("assignLabs-select_availableStaff");
    availableStaff.innerHTML = ""; //If it already had children appended, remove them first
    const defaultOption = document.createElement("option");
        defaultOption.selected = true;
        defaultOption.textContent = "Select Staff Member";
        availableStaff.appendChild(defaultOption);

    fetch("http://localhost:5000/labStaff/assignLabs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({staffType: staffType}),
    })
    .then((res)=>{return res.json();})
    .then((data)=>{
        

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
        //All the available labs will be fetched from the table labs
        //But we will send staff type
        //What if lab already has lab engineer but doesn't have lab technician? So we need staff type to filter the lab results

        const select_lab = document.getElementById("assignLabs-select_lab");
        select_lab.innerHTML = ""; //Clear the already existing (if any) select_labs options tags 

        const defaultOption = document.createElement("option");
        defaultOption.selected = true;
        defaultOption.textContent = "Select Lab";
        select_lab.appendChild(defaultOption);

        fetch("http://localhost:5000/labStaff/availableLabs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({staffType: staffType}),
        })
        .then((res)=>{return res.json()})
        .then((data)=>{
            for(let i= 0; i< data.length; i++){
                //Dynamically create the option tag and give it the lab name of each row
                let option = document.createElement("option");
                option.value = data[i].lab_name;
                option.textContent = data[i].lab_name;

                select_lab.appendChild(option);
            }
        })
    }

    useEffect(()=>{
        if (staffType){
            fetchStaff();
            fetchLabs();
        }
    }, [staffType]); 

    return(
        <>
            <Navbar pageType="Assign Labs Dashboard"/>

            {/* This select bar is to choose lab staff type */}
            <div className="form-floating">
            <select onChange={(e)=>{setStaffType(e.target.value)}} className="form-select" aria-label="Floating label select example">
                <option defaultValue="nothing">Staff Type</option>
                <option value="lab_engineer">Lab Engineer</option>
                <option value="lab_technician">Lab Technician</option>
                <option value="lab_assistant">Lab Assistant</option>
            </select>
            <label htmlFor="floatingSelect">Choose Staff Type</label>
            </div>

            {/* Button to set staffType, it will be pressed automatically, the user does not see this button */}
            <button id="assignLabs-button_setStaffType" style={{display: "none"}} onClick={()=>{fetchStaff(); fetchLabs();}} type="button" className="btn btn-warning">Set Staff Type</button>

            {/* This select bar is to choose from the fetched lab staff */}
            <div className="form-floating">
            <select onChange={(e)=>{setAssignedStaffMember(e.target.value)}} id="assignLabs-select_availableStaff" className="form-select" aria-label="Floating label select example">
                <option defaultValue="nothing">Select Staff Member</option>
            </select>
            <label htmlFor="floatingSelect">Free Staff Members</label>
            </div>

            {/* This select bar is to choose an available lab to assign the staff to it */}
            <div className="form-floating">
            <select onChange={(e)=>{setChosenLab(e.target.value)}} id="assignLabs-select_lab" className="form-select" aria-label="Floating label select example">
                <option defaultValue="nothing">Select Lab</option>
            </select>
            <label htmlFor="floatingSelect">Available Labs For This Staff Type</label>
            </div>

            {/* Button to submit the name of lab and staff member and the staff type of that staff member */}
            <button onClick={()=>{submitForm();}} type="button" className="btn btn-success">Assign Lab</button>
        </>
        
    );
    
}


export default AssignLabs;