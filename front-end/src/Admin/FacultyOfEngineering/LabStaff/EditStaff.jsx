
import Navbar from "../../../Nav/Navbar";
import { useState } from "react";
function EditStaff(){

    fetchAndDisplayStaff();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setID] = useState("");
    const [currentRole, setCurrentRole] = useState(""); //This is the current role of staff member, we need to store this to
    //make sure that this staff member does not get edited or deleted while it is assigned to any lab
    const [changedRole, setChangedRole] = useState("no_change"); //This is the changedRole of staff member, by default, its value is no_change

    return (
        <>
            <Navbar pageType="Edit Staff" />
            <div id="editStaff-div_1">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Current Staff
                    </button>
                    <ul id="editStaff-dropDown" className="dropdown-menu"></ul>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Staff Name</span>
                    <input onChange={(e) => setName(e.target.value)} id="editStaff-input_name" type="text" className="form-control" placeholder="Staff Name" aria-label="Username" aria-describedby="basic-addon1" />
                    <span className="input-group-text" id="basic-addon1">Email</span>
                    <input onChange={(e) => setEmail(e.target.value)} id="editStaff-input_email" type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                    <input onChange={(e) => setID(e.target.value)} id="editStaff-input_id" type="hidden" />
                    <span className="input-group-text" id="basic-addon1">Role</span>
                    <input onChange={(e)=>{setCurrentRole(e.target.value)}} id="editStaff-input_CurrentRole" type="text" className="form-control" placeholder="Role" aria-label="Username" aria-describedby="basic-addon1" disabled/>
                </div>
                <button onClick={() => submitEditedStaff(name, email, id, currentRole, changedRole)} type="button" className="btn btn-success">Save Changes</button>
                <button onClick={() => deleteStaffMember(id, email, currentRole)} type="button" className="btn btn-danger">Delete This Staff</button>

                <div className="form-floating">
                    <select onChange={(e) => {setChangedRole(e.target.value)}} className="form-select" aria-label="Floating label select example" id="editStaff-select_ChangeRole">
                        <option defaultValue="no_change">Don't Change Role</option>
                        <option value="lab_engineer">Lab Engineer</option>
                        <option value="lab_technician">Lab Technician</option>
                        <option value="lab_assistant">Lab Assistant</option>
                    </select>
                    <label htmlFor="floatingSelect">Change Role</label>
                </div>
            </div>
        </>
    );

    function displayAllDetails(staffName, staffList) {
        var staffEmail = null;
        var staffID = null;
        var staffRole = null;
        for (let i = 0; i < staffList.length; i++) {
            if (staffName === staffList[i].name) {
                staffEmail = staffList[i].email;
                staffID = staffList[i].id;
                staffRole = staffList[i].role;
            }
        }
        const input_name = document.getElementById("editStaff-input_name");
        const input_email = document.getElementById("editStaff-input_email");
        const input_id = document.getElementById("editStaff-input_id");
        const input_role = document.getElementById("editStaff-input_CurrentRole");
        input_name.value = staffName;
        input_email.value = staffEmail;
        input_id.value = staffID;
        input_role.value = staffRole;
        setName(input_name.value);
        setEmail(input_email.value);
        setID(input_id.value);
        setCurrentRole(input_role.value);
    }

    function fetchAndDisplayStaff() {
        fetch("http://localhost:5000/labStaff/editStaff")
            .then((response) => response.json())
            .then((jsonData) => {
                const dropDown = document.getElementById("editStaff-dropDown");
                dropDown.innerHTML = "";
                for (let i = 0; i < jsonData.length; i++) {
                    const li = document.createElement("li");
                    const a = document.createElement("a");
                    a.href = "#";
                    a.className = "dropdown-item";
                    a.textContent = jsonData[i].name;
                    a.onclick = () => {
                        displayAllDetails(a.textContent, jsonData);
                    };
                    li.appendChild(a);
                    dropDown.appendChild(li);
                }
            });
    }

    function submitEditedStaff(name, email, id, currentRole, changedRole) {
        console.log(currentRole);
        console.log(changedRole);
        fetch("http://localhost:5000/labStaff/submitEditedStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email, id: id, currentRole: currentRole, changedRole: changedRole })
        })
        .then((res) => res.text())
        .then((textRes) => {
                if (textRes === "missing_entries") {
                    window.alert("Please select a staff member to edit first!");
                } 
                else if (textRes === "success") {
                    window.alert("Staff member has been edited!");
                }
                else if (textRes == "staff_member_assingned_to_lab"){
                    window.alert("Un-assign this staff member from lab in order to edit its info");
                }
                window.location.reload();
        });
    }

    function deleteStaffMember(id, email, currentRole) {
        fetch("http://localhost:5000/labStaff/deleteStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id, email: email, currentRole: currentRole })
        })
            .then((res) => res.text())
            .then((textRes) => {
                if (textRes === "missing_entries") {
                    window.alert("Please select a staff member to remove first!");
                } else if (textRes === "success") {
                    window.alert("Staff member has been removed");
                }
                else if (textRes == "staff_member_assingned_to_lab"){
                    window.alert("Un-assign this staff member from lab in order to delete it");
                }
                window.location.reload();
            });
    }
}

export default EditStaff;

