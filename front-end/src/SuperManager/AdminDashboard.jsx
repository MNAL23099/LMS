// import Navbar from "../Nav/Navbar";
// import { useNavigate } from "react-router-dom";
// import inventoryPicture from "../assets/FOE.jpg"; // change path to your actual image
// // import reportPicture from "../assets/report.jpg";       // change path to your actual image

// const AdminDashboard = () => {
//   const navigate = useNavigate();

//   // This function will navigate to the inventory dashboard
//  const goToFOEDashboard = () => {
//   navigate("/foe_dashboard");
// };

//   return (
//     <>
//       <Navbar pageType="Admin Dashboard"/>
//       <div>
//         <div className="d-flex flex-wrap justify-content-center gap-4" style={{marginTop: '3rem'}}>
//           {/* FOE Card */}
//           <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
//             <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem", height: "140px", objectFit: "cover" }} />
//             <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
//               <div className="text-center">
//                 <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Engineering</h5>
//                 <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOE</p>
//               </div>
//               <button onClick={goToFOEDashboard} className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
//             </div>
//           </div>
//           {/* FOS Card */}
//           <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
//             <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
//             <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
//               <div className="text-center">
//                 <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Sciences</h5>
//                 <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOS</p>
//               </div>
//               <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
//             </div>
//           </div>
//           {/* FOB Card */}
//           <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
//             <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
//             <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
//               <div className="text-center">
//                 <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Business and Economics</h5>
//                 <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOB</p>
//               </div>
//               <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
//             </div>
//           </div>
//           {/* FOM Card */}
//           <div className="card d-flex flex-column justify-content-between" style={{ width: "15rem", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,33,71,0.10)", border: "1.5px solid #002147", fontFamily: 'Segoe UI, Arial, sans-serif', minHeight: '340px', marginTop: '1rem' }}>
//             <img src={inventoryPicture} className="card-img-top" alt="Inventory" style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: "140px", objectFit: "cover" }} />
//             <div className="card-body d-flex flex-column justify-content-between" style={{ background: "#fff", color: "#002147", borderRadius: "0 0 1rem 1rem", flex: 1 }}>
//               <div className="text-center">
//                 <h5 className="card-title" style={{ fontWeight: 700, color: '#002147', fontSize: '1.15rem', marginBottom: '0.5rem' }}>Faculty Of Management</h5>
//                 <p className="card-text" style={{ color: '#002147', fontSize: '1rem', marginBottom: '0.5rem' }}>FOM</p>
//               </div>
//               <button className="btn w-100 mt-auto" style={{ background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", borderRadius: "25px", fontWeight: 700, border: "none" }}>Go</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../Nav/Navbar";
// import inventoryPicture from "../assets/FOE.jpg"; // placeholder image for all cards

// const AdminDashboard = () => {
//   const [faculties, setFaculties] = useState([]);
//   const navigate = useNavigate();

//   // Fetch faculties when page loads
//   useEffect(() => {
//     const fetchFaculties = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/faculty/all");
//         const data = await res.json();
//         setFaculties(data);
//       } catch (err) {
//         console.error("Error fetching faculties:", err);
//       }
//     };

//     fetchFaculties();
//   }, []);

//   const goToFacultyDashboard = (faculty) => {
//     // Example: navigate based on faculty short code
//     navigate(`/faculty/${faculty.id}/dashboard`);
//   };

//   return (
//     <>
//       <Navbar pageType="Admin Dashboard" />
//       <div>
//         <div
//           className="d-flex flex-wrap justify-content-center gap-4"
//           style={{ marginTop: "3rem" }}
//         >
//           {faculties.length > 0 ? (
//             faculties.map((faculty) => (
//               <div
//                 key={faculty.id}
//                 className="card d-flex flex-column justify-content-between"
//                 style={{
//                   width: "15rem",
//                   background: "#fff",
//                   borderRadius: "1rem",
//                   boxShadow: "0 4px 24px rgba(0,33,71,0.10)",
//                   border: "1.5px solid #002147",
//                   fontFamily: "Segoe UI, Arial, sans-serif",
//                   minHeight: "340px",
//                   marginTop: "1rem",
//                 }}
//               >
//                 <img
//                   src={inventoryPicture}
//                   className="card-img-top"
//                   alt="Faculty"
//                   style={{
//                     borderTopLeftRadius: "0.5rem",
//                     borderTopRightRadius: "0.5rem",
//                     height: "140px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div
//                   className="card-body d-flex flex-column justify-content-between"
//                   style={{
//                     background: "#fff",
//                     color: "#002147",
//                     borderRadius: "0 0 1rem 1rem",
//                     flex: 1,
//                   }}
//                 >
//                   <div className="text-center">
//                     <h5
//                       className="card-title"
//                       style={{
//                         fontWeight: 700,
//                         color: "#002147",
//                         fontSize: "1.15rem",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       {faculty.name}
//                     </h5>
//                     <p
//                       className="card-text"
//                       style={{
//                         color: "#002147",
//                         fontSize: "1rem",
//                         marginBottom: "0.5rem",
//                       }}
//                     >
//                       {faculty.department}
//                     </p>
//                   </div>
//                   <button
//                     onClick={() => goToFacultyDashboard(faculty)}
//                     className="btn w-100 mt-auto"
//                     style={{
//                       background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)",
//                       color: "#002147",
//                       borderRadius: "25px",
//                       fontWeight: 700,
//                       border: "none",
//                     }}
//                   >
//                     Go
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p className="text-center text-gray-600">No faculties added yet.</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;


// import React, { useEffect, useState } from "react";
// import Navbar from "../Nav/Navbar";

// const AdminDashboard = () => {
//   const [faculties, setFaculties] = useState([]);
//   const [facultyName, setFacultyName] = useState("");

//   // Fetch faculties from backend
//   const fetchFaculties = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/faculty/all");
//       const data = await response.json();
//       setFaculties(data.faculties);
//     } catch (err) {
//       console.error("Error fetching faculties:", err);
//     }
//   };

//   useEffect(() => {
//     fetchFaculties();
//   }, []);

//   // Add new faculty
//   const handleAddFaculty = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch("http://localhost:5000/faculty/add", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ facultyName }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to add faculty");
//       }

//       const newFaculty = await response.json();
//       setFaculties((prev) => [newFaculty, ...prev]); // update instantly
//       setFacultyName(""); // clear input
//     } catch (err) {
//       console.error("Error adding faculty:", err);
//     }
//   };

//   return (
//     <>
//       <Navbar pageType="AdminDashboard" />

//       <div className="p-6">
//         <h2 className="text-xl font-bold mb-4">Admin Dashboard - Faculties</h2>

//         {/* Add Faculty Form */}
//         <form onSubmit={handleAddFaculty} className="flex gap-2 mb-6">
//           <input
//             type="text"
//             value={facultyName}
//             onChange={(e) => setFacultyName(e.target.value)}
//             placeholder="Enter Faculty Name"
//             className="border p-2 rounded w-64"
//           />
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//             Add Faculty
//           </button>
//         </form>

//         {/* Faculty List */}
//         <div className="grid grid-cols-3 gap-4">
//           {faculties.map((faculty) => (
//             <div
//               key={faculty.id}
//               className="p-4 border rounded shadow bg-white"
//             >
//               <h3 className="text-lg font-semibold">{faculty.name}</h3>
//               <p>{faculty.department} </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AdminDashboard;


import React, { useEffect, useState } from "react";
import Navbar from "../Nav/Navbar";
import course_management from "../assets/FOE.jpg"; // replace with your actual image path

const AdminDashboard = () => {
  const [faculties, setFaculties] = useState([]);

  // Fetch all faculties from backend
  const fetchFaculties = async () => {
    try {
      const res = await fetch("http://localhost:5000/faculties/all");
      const data = await res.json();
      if (res.ok) {
        setFaculties(data.faculties); // since your controller sends { success, faculties }
      }
    } catch (err) {
      console.error("Error fetching faculties:", err);
    }
  };

  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <>
      <Navbar pageType="AdminDashboard" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Faculties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {faculties.map((faculty) => (
            <div
              key={faculty.id}
              className="card"
              style={{
                width: "17rem",
                background: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 4px 24px rgba(0,33,71,0.10)",
                border: "1.5px solid #002147",
                fontFamily: "Segoe UI, Arial, sans-serif",
                minHeight: "340px",
              }}
            >
              <img
                src={course_management}
                className="card-img-top"
                alt={faculty.name}
                style={{
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                  height: "140px",
                  objectFit: "cover",
                }}
              />
              <div
                className="card-body d-flex flex-column justify-content-between"
                style={{
                  background: "#fff",
                  color: "#002147",
                  borderRadius: "0 0 1rem 1rem",
                  flex: 1,
                }}
              >
                <div className="text-center">
                  <h5
                    className="card-title"
                    style={{
                      fontWeight: 700,
                      color: "#002147",
                      fontSize: "1.15rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {faculty.name}  {/* Faculty Name */}
                  </h5>
                  <p
                    className="card-text"
                    style={{
                      color: "#002147",
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Department: {faculty.department} {/* Department */}
                  </p>
                </div>
                <button
                  className="btn w-100 mt-auto"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)",
                    color: "#002147",
                    borderRadius: "25px",
                    fontWeight: 700,
                    border: "none",
                  }}
                >
                  View Faculty
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
