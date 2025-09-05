import React, { useState } from "react";
import Navbar from "../../Nav/Navbar";

const AddFaculty = () => {
  const [facultyName, setFacultyName] = useState("");
  // const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/faculties/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: facultyName
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Faculty added successfully!");
        setFacultyName("");
        // setDepartment("");
      } else {
        setMessage(data.error || "Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setMessage("Error: Could not connect to server.");
    }
  };

  return (
    <>
      <Navbar pageType=" Super Manager" />
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow-lg w-96">
          <h2 className="text-xl font-bold mb-4 text-center">Add Faculty</h2>

          {message && <p className="text-center text-sm text-blue-600">{message}</p>}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Faculty Name"
              value={facultyName}
              onChange={(e) => setFacultyName(e.target.value)}
              className="p-2 border rounded"
              required
            />
            {/* <input
              type="text"
              placeholder="Department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="p-2 border rounded"
              required
            /> */}

            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Add Faculty
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddFaculty;
