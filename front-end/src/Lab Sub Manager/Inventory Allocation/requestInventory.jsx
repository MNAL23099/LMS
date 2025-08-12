// import { useEffect, useState } from "react";
// import Navbar from "../../Nav/Navbar";

// function RequestInventoryExternal() {
//   const [items, setItems] = useState([]);
//   const [selectedItem, setSelectedItem] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const [requests, setRequests] = useState([]);

//   useEffect(() => {
//     // Fetch inventory items from backend
//     fetch("http://localhost:5000/inventory/getInventoryItems")
//       .then((res) => res.json())
//       .then((data) => setItems(data))
//       .catch((err) => console.error("Error fetching items:", err));

//     // Fetch existing requests
//     fetch("http://localhost:5000/inventory/getRequests")
//       .then((res) => res.json())
//       .then((data) => setRequests(data))
//       .catch((err) => console.error("Error fetching requests:", err));
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const request = {
//       item: selectedItem,
//       quantity,
//     };

//     const response = await fetch("http://localhost:5000/inventory/sendRequest", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(request),
//     });

//     if (response.ok) {
//       alert("Request submitted successfully!");
//       setSelectedItem("");
//       setQuantity(1);
//       // Refresh the request list
//       const updated = await fetch("http://localhost:5000/inventory/getRequests").then((res) => res.json());
//       console.log("Fetched requests from DB:", updated);

//       setRequests(updated);
//     } else {
//       alert("Error submitting request.");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="container mt-5">
//         <h2 className="text-center mb-4">Request Inventory</h2>
//         <form onSubmit={handleSubmit} className="card p-4 mx-auto" style={{ maxWidth: "400px" }}>
//           <div className="form-group mb-3">
//             <label>Inventory Item</label>
//             <select
//               className="form-control"
//               value={selectedItem}
//               onChange={(e) => setSelectedItem(e.target.value)}
//               required
//             >
//               <option value="">Select Item</option>
//               {items.map((item) => (
//                 <option key={item.id} value={item.item_name}>
//                   {item.item_name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="form-group mb-3">
//             <label>Quantity</label>
//             <input
//               type="number"
//               min="1"
//               className="form-control"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               required
//             />
//           </div>

//           <button type="submit" className="btn btn-warning w-100 fw-bold">
//             Submit Request
//           </button>
//         </form>

//         <div className="mt-5" style={{ paddingBottom: "100px" }}>
//           <h4>Your Requests</h4>
//           <ul className="list-group">
//             {requests.map((req, index) => (
//               <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
//                 {req.item_name} - Quantity: {req.quantity}
//                 <span
//                   className={`badge ${
//                     req.status === "Pending"
//                       ? "bg-secondary"
//                       : req.status === "Accepted"
//                       ? "bg-success"
//                       : "bg-danger"
//                   }`}
//                 >
//                   {req.status}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default RequestInventoryExternal;


import { useEffect, useState } from "react";
import Navbar from "../../Nav/Navbar";

function RequestInventoryExternal() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/inventory/getInventoryItems")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error fetching items:", err));

    fetch("http://localhost:5000/inventory/getRequests")
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Error fetching requests:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const request = { item: selectedItem, quantity };

    const response = await fetch("http://localhost:5000/inventory/sendRequest", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    if (response.ok) {
      alert("Request submitted successfully!");
      setSelectedItem("");
      setQuantity(1);
      const updated = await fetch("http://localhost:5000/inventory/getRequests").then((res) => res.json());
      setRequests(updated);
    } else {
      alert("Error submitting request.");
    }
  };

  return (
    <>
      <Navbar pageType = "Request Inventory" />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh", background: "#fff" }}>
        <div
          className="card shadow"
          style={{
            width: "370px",
            borderRadius: "1rem",
            background: "#fff",
            border: "2px solid #002147",
            boxShadow: "0 8px 32px 0 rgba(0,33,71,0.10), 0 2px 8px 0 rgba(255,212,0,0.10)",
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif"
          }}
        >
          <div className="card-body">
            <h3 className="card-title text-center mb-4" style={{ color: "#002147", fontWeight: 800, letterSpacing: "1px" }}>
              Request Inventory For Lab
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  id="floatingItem"
                  required
                  style={{ border: "1.5px solid #002147", borderRadius: "8px", color: "#002147", fontWeight: 500 }}
                >
                  <option value="">Select Item</option>
                  {items.map((item) => (
                    <option key={item.id} value={item.item_name}>
                      {item.item_name}
                    </option>
                  ))}
                </select>
                <label htmlFor="floatingItem" style={{ color: "#002147", fontWeight: 600 }}>Inventory Item</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  type="number"
                  min="1"
                  className="form-control"
                  id="floatingQuantity"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  required
                  style={{ border: "1.5px solid #002147", borderRadius: "8px", color: "#002147", fontWeight: 500 }}
                />
                <label htmlFor="floatingQuantity" style={{ color: "#002147", fontWeight: 600 }}>Quantity</label>
              </div>

              <button
                type="submit"
                className="btn w-100 fw-bold"
                style={{ borderRadius: "25px", background: "linear-gradient(90deg, #ffd700 0%, #ffb400 100%)", color: "#002147", fontWeight: 700, border: "2.5px solid #ffd700" }}
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5" style={{ paddingBottom: "100px" }}>
        <h4>Your Requests</h4>
        <ul className="list-group">
          {requests.map((req, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {req.item_name} - Quantity: {req.quantity}
              <span
                className={`badge ${
                  req.status === "Pending"
                    ? "bg-secondary"
                    : req.status === "Accepted"
                    ? "bg-success"
                    : "bg-danger"
                }`}
              >
                {req.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default RequestInventoryExternal;
