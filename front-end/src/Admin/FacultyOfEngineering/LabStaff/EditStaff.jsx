// import React, { useEffect, useState } from "react";
// import Navbar from "../../../Nav/Navbar";
// function EditStaff() {
//   const [staffList, setStaffList] = useState([]);
//   const [formData, setFormData] = useState({
//     staffID: "",
//     staffName: "",
//     staffRole: "",
//   });

//   // Fetch staff list on component mount
//   useEffect(() => {
//     fetch("/editStaff")
//       .then((res) => res.json())
//       .then((data) => setStaffList(data))
//       .catch((err) => console.error("Error fetching staff:", err));
//   }, []);

//   // Handle clicking "Edit"
//   const handleEdit = (staff) => {
//     setFormData({
//       staffID: staff.id,
//       staffName: staff.name,
//       staffRole: staff.role,
//     });
//   };

//   // Handle deleting a staff member
//   const handleDelete = (staffID) => {
//     if (window.confirm("Are you sure you want to delete this staff member?")) {
//       fetch("/deleteStaff", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ staffID }),
//       })
//         .then((res) => res.text())
//         .then((result) => {
//           if (result === "success") {
//             alert("Staff deleted.");
//             setStaffList(staffList.filter((s) => s.id !== staffID));
//           } else {
//             alert("Delete failed: " + result);
//           }
//         });
//     }
//   };

//   // Handle form submit for editing
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch("/submitEditedStaff", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     })
//       .then((res) => res.text())
//       .then((result) => {
//         if (result === "success") {
//           alert("Staff updated successfully!");
//           // Refresh the list
//           fetch("/editStaff")
//             .then((res) => res.json())
//             .then((data) => {
//               setStaffList(data);
//               setFormData({ staffID: "", staffName: "", staffRole: "" });
//             });
//         } else {
//           alert("Update failed: " + result);
//         }
//       });
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Edit Lab Staff</h2>
//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Role</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {staffList.map((staff) => (
//             <tr key={staff.id}>
//               <td>{staff.id}</td>
//               <td>{staff.name}</td>
//               <td>{staff.role}</td>
//               <td>
//                 <button onClick={() => handleEdit(staff)}>Edit</button>
//                 <button onClick={() => handleDelete(staff.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3>Edit Selected Staff</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="hidden"
//           value={formData.staffID}
//         />
//         <label>Name: </label>
//         <input
//           type="text"
//           value={formData.staffName}
//           onChange={(e) => setFormData({ ...formData, staffName: e.target.value })}
//         />
//         <br />
//         <label>Role: </label>
//         <input
//           type="text"
//           value={formData.staffRole}
//           onChange={(e) => setFormData({ ...formData, staffRole: e.target.value })}
//         />
//         <br />
//         <button type="submit">Save Changes</button>
//       </form>
//     </div>
//   );
// }

// export default EditStaff;

// 


import { useEffect, useState } from "react";
import Navbar from "../../../Nav/Navbar";

function EditStaff() {
    const [staffList, setStaffList] = useState([]);
    const [staffName, setStaffName] = useState("");
    const [staffEmail, setStaffEmail] = useState("");
    const [staffID, setStaffID] = useState("");
    const [staffRole, setStaffRole] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/staff/editStaff")
            .then((res) => res.json())
            .then((jsonData) => {
                setStaffList(jsonData);
            });
    }, []);

    function handleStaffSelect(selectedName) {
        const selected = staffList.find((staff) => staff.name === selectedName);
        if (selected) {
            setStaffName(selected.name);
            setStaffEmail(selected.email);
            setStaffID(selected.id);
            setStaffRole(selected.role); // ✅ show role
        }
    }

    function submitEditedStaff() {
        if (!staffID) {
            window.alert("Please select a staff member to edit!");
            return;
        }

        fetch("http://localhost:5000/staff/submitEditedStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: staffID,
                name: staffName,
                email: staffEmail,
                role: staffRole, // ✅ include role in request
            }),
        })
            .then((res) => res.text())
            .then((textRes) => {
                if (textRes === "success") {
                    window.alert("Staff member updated successfully.");
                    window.location.reload();
                } else {
                    window.alert("Error: " + textRes);
                }
            });
    }

    function deleteStaffMember() {
        if (!staffID) {
            window.alert("Please select a staff member to delete!");
            return;
        }

        fetch("http://localhost:5000/staff/deleteStaff", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: staffID }),
        })
            .then((res) => res.text())
            .then((textRes) => {
                if (textRes === "success") {
                    window.alert("Staff member deleted successfully.");
                    window.location.reload();
                } else {
                    window.alert("Error: " + textRes);
                }
            });
    }

    return (
        <>
            <Navbar pageType="Edit Lab Staff" />
            <div id="editStaff-div_1">

                {/* Dropdown */}
                <div className="dropdown mb-3">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >
                        Current Lab Staff
                    </button>
                    <ul className="dropdown-menu">
                        {staffList.map((staff, index) => (
                            <li key={index}>
                                <a
                                    className="dropdown-item"
                                    href="#"
                                    onClick={() => handleStaffSelect(staff.name)}
                                >
                                    {staff.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Input fields */}
                <div className="input-group mb-3">
                    <span className="input-group-text">Name</span>
                    <input
                        type="text"
                        className="form-control"
                        value={staffName}
                        onChange={(e) => setStaffName(e.target.value)}
                        placeholder="Name"
                    />
                    <span className="input-group-text">Email</span>
                    <input
                        type="email"
                        className="form-control"
                        value={staffEmail}
                        onChange={(e) => setStaffEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <span className="input-group-text">Role</span>
                    <input
                        type="text"
                        className="form-control"
                        value={staffRole}
                        onChange={(e) => setStaffRole(e.target.value)}
                        placeholder="Role"
                    />
                </div>

                <button onClick={submitEditedStaff} className="btn btn-success me-2">
                    Save Changes
                </button>
                <button onClick={deleteStaffMember} className="btn btn-danger">
                    Delete This Staff Member
                </button>
            </div>
        </>
    );
}

export default EditStaff;
