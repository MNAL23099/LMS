// 

import { useEffect, useState } from "react";
import Navbar from "../../../Nav/Navbar";

function ViewStaff() {
    const [staffList, setStaffList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/labStaff/viewStaff")
            .then((res) => res.json())
            .then((data) => setStaffList(data));
    }, []);

    return (
        <>
            <Navbar pageType="View Lab Staff" />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {staffList.map((staff, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{staff.name}</td>
                            <td>{staff.email}</td>
                            <td>{staff.role}</td> // ✅ Correct field name from DB
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ViewStaff;
