
import Navbar from "../../../Nav/Navbar";
import { useState } from "react";
function EditStaff(){

    fetchAndDisplayStaff();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setID] = useState("");
    const [role, setRole] = useState("");

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
                    <input onChange={(e) => setRole(e.target.value)} id="editStaff-input_role" type="text" className="form-control" placeholder="Role" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button onClick={() => submitEditedStaff(name, email, id, role)} type="button" className="btn btn-success">Save Changes</button>
                <button onClick={() => deleteStaffMember(id)} type="button" className="btn btn-danger">Delete This Staff</button>
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
        const input_role = document.getElementById("editStaff-input_role");
        input_name.value = staffName;
        input_email.value = staffEmail;
        input_id.value = staffID;
        input_role.value = staffRole;
        setName(input_name.value);
        setEmail(input_email.value);
        setID(input_id.value);
        setRole(input_role.value);
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

    function submitEditedStaff(name, email, id, role) {
        fetch("http://localhost:5000/labStaff/submitEditedStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: name, email: email, id: id, role: role })
        })
            .then((res) => res.text())
            .then((textRes) => {
                if (textRes === "missing_entries") {
                    window.alert("Please select a staff member to edit first!");
                } else if (textRes === "success") {
                    window.alert("Staff member has been edited!");
                }
                window.location.reload();
            });
    }

    function deleteStaffMember(id) {
        fetch("http://localhost:5000/labStaff/deleteStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id })
        })
            .then((res) => res.text())
            .then((textRes) => {
                if (textRes === "missing_entries") {
                    window.alert("Please select a staff member to remove first!");
                } else if (textRes === "success") {
                    window.alert("Staff member has been removed");
                }
                window.location.reload();
            });
    }
}

export default EditStaff;

