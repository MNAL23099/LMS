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
            <div style={{
                minHeight: "100vh",
                background: "#f5f6fa",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <form style={{
                    background: "#fff",
                    borderRadius: "18px",
                    boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(0,33,71,0.08)",
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
                    }}>Assign Lab</h2>
                    <div className="mb-3">
                        <label htmlFor="assignLabs-select_staffType" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Staff Type</label>
                        <select id="assignLabs-select_staffType" onChange={(e)=>{setStaffType(e.target.value)}} className="form-select" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}}>
                            <option defaultValue="nothing">Staff Type</option>
                            <option value="lab_engineer">Lab Engineer</option>
                            <option value="lab_technician">Lab Technician</option>
                            <option value="lab_assistant">Lab Assistant</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="assignLabs-select_availableStaff" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Free Staff Members</label>
                        <select onChange={(e)=>{setAssignedStaffMember(e.target.value)}} id="assignLabs-select_availableStaff" className="form-select" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}}>
                            <option defaultValue="nothing">Select Staff Member</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="assignLabs-select_lab" className="form-label" style={{fontWeight: 500, color: '#002147'}}>Available Labs For This Staff Type</label>
                        <select onChange={(e)=>{setChosenLab(e.target.value)}} id="assignLabs-select_lab" className="form-select" style={{borderRadius: "8px", background: '#fff', color: '#002147', border: '1px solid #0056b3'}}>
                            <option defaultValue="nothing">Select Lab</option>
                        </select>
                    </div>
                    <button style={{borderRadius: "25px", fontWeight: 700, fontSize: "1.1rem", background: 'linear-gradient(90deg, #ffd700 0%, #ffb400 100%)', color: '#002147', border: 'none', marginTop: '1rem'}} onClick={(e)=>{e.preventDefault(); submitForm();}} type="button" className="btn w-100">Assign Lab</button>
                </form>
            </div>
        </>
    );
    
}


export default AssignLabs;