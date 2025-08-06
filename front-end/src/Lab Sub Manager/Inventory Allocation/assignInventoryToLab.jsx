// import { useState, useEffect } from "react";
// import Navbar from "../Nav/Navbar";


// import { useState, useEffect } from "react";
// import Navbar from "../Nav/Navbar";
// import inventoryImage from "../assets/FOE.jpg"; // use your desired image
// import { useNavigate } from "react-router-dom";

// function AssignInventoryForm() {
//   const [items, setItems] = useState([]);
//   const [labs, setLabs] = useState([]);
//   const [selectedItem, setSelectedItem] = useState("");
//   const [selectedLab, setSelectedLab] = useState("");
//   const [quantity, setQuantity] = useState("");

//   useEffect(() => {
//     const fetchItemsAndLabs = async () => {
//       try {
//         const itemRes = await fetch("http://localhost:5000/inventory/freeItems");
//         const itemData = await itemRes.json();
//         setItems(itemData);

//         const labRes = await fetch("http://localhost:5000/inventory/labs");
//         const labData = await labRes.json();
//         setLabs(labData);
//         const uniqueLabs = Array.from(new Set(labData.map(lab => lab.lab_name)))
//         .map(name => labData.find(lab => lab.lab_name === name));
//         setLabs(uniqueLabs);

//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };

//     fetchItemsAndLabs();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/inventory/assignInventoryItem", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           item_name: selectedItem,
//           lab_name: selectedLab,
//           assign_quantity: parseInt(quantity),
//         }),
//       });

//       if (res.ok) {
//         alert("Inventory successfully assigned!");
//         setSelectedItem("");
//         setSelectedLab("");
//         setQuantity("");
//       } else {
//         alert("Failed to assign inventory.");
//       }
//     } catch (error) {
//       console.error(error);
//       alert("Error while assigning inventory.");
//     }
//   };

//   // Styles
//   const styles = {
//     page: {
//       backgroundColor: "#fff8f1",
//       padding: "2rem",
//       minHeight: "100vh",
//     },
//     card: {
//       maxWidth: "600px",
//       margin: "2rem auto",
//       borderRadius: "1rem",
//       overflow: "hidden",
//       background: "linear-gradient(135deg, #ff9800 0%, #ffb74d 100%)",
//       boxShadow: "0 4px 24px rgba(255, 152, 0, 0.15)",
//       border: "2px solid #ff9800",
//     },
//     image: {
//       width: "100%",
//       height: "200px",
//       objectFit: "cover",
//       borderTopLeftRadius: "1rem",
//       borderTopRightRadius: "1rem",
//     },
//     body: {
//       padding: "2rem",
//       background: "#fff3e0",
//       color: "#e65100",
//     },
//     title: {
//       fontWeight: "700",
//       marginBottom: "1.5rem",
//       textAlign: "center",
//     },
//     form: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "1rem",
//     },
//     input: {
//       padding: "0.75rem",
//       border: "1px solid #ffcc80",
//       borderRadius: "10px",
//       fontSize: "1rem",
//     },
//     button: {
//       padding: "0.75rem",
//       fontWeight: "bold",
//       fontSize: "1rem",
//       background: "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)",
//       color: "#fff",
//       border: "2px solid #e65100",
//       borderRadius: "25px",
//       cursor: "pointer",
//       transition: "all 0.2s ease",
//     },
//     buttonHover: {
//       background: "#e65100",
//     },
//   };

//   return (
//     <div style={styles.page}>
//       <Navbar pageType="Assign Inventory" />

//       <div style={styles.card}>
//         <img src={inventoryImage} alt="Inventory" style={styles.image} />

//         <div style={styles.body}>
//           <h2 style={styles.title}>Assign Inventory to Lab</h2>
//           <form onSubmit={handleSubmit} style={styles.form}>
//             <select
//               value={selectedItem}
//               onChange={(e) => setSelectedItem(e.target.value)}
//               required
//               style={styles.input}
//             >
//               <option value="">Select Item</option>
//               {items.map((item) => (
//                 <option key={item.id} value={item.item_name}>
//                   {item.item_name}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={selectedLab}
//               onChange={(e) => setSelectedLab(e.target.value)}
//               required
//               style={styles.input}
//             >
//               <option value="">Select Lab</option>
//               {labs.map((lab) => (
//                 <option key={lab.id} value={lab.lab_name}>
//                   {lab.lab_name}
//                 </option>
//               ))}
//             </select>

//             <input
//               type="number"
//               placeholder="Quantity"
//               value={quantity}
//               onChange={(e) => setQuantity(e.target.value)}
//               required
//               min={1}
//               style={styles.input}
//             />

//             <button
//               type="submit"
//               style={styles.button}
//               onMouseOver={(e) => (e.target.style.background = "#e65100")}
//               onMouseOut={(e) =>
//                 (e.target.style.background =
//                   "linear-gradient(90deg, #ff9800 0%, #ffb74d 100%)")
//               }
//             >
//               Assign Inventory
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AssignInventoryForm;



// 



import { useState, useEffect } from "react";
import Navbar from "../../Nav/Navbar";

function AssignInventoryForm() {
  const [items, setItems] = useState([]);
  const [labs, setLabs] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchItemsAndLabs = async () => {
      try {
        const itemRes = await fetch("http://localhost:5000/inventory/freeItems");
        const itemData = await itemRes.json();
        setItems(itemData);

        const labRes = await fetch("http://localhost:5000/inventory/labs");
        const labData = await labRes.json();
        const uniqueLabs = Array.from(new Set(labData.map(lab => lab.lab_name)))
          .map(name => labData.find(lab => lab.lab_name === name));
        setLabs(uniqueLabs);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchItemsAndLabs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/inventory/assignInventoryItem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item_name: selectedItem,
          lab_name: selectedLab,
          assign_quantity: parseInt(quantity),
        }),
      });

      if (res.ok) {
        alert("Inventory successfully assigned!");
        setSelectedItem("");
        setSelectedLab("");
        setQuantity("");
      } else {
        alert("Failed to assign inventory.");
      }
    } catch (error) {
      console.error(error);
      alert("Error while assigning inventory.");
    }
  };

  return (
    <>
      <Navbar pageType="Assign Inventory" />

      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
        <div
          className="card shadow"
          style={{
            width: "350px",
            borderRadius: "1rem",
            background: "linear-gradient(135deg, #fffbe6 0%, #ffe0b2 100%)",
            border: "1.5px solid #ff9800",
          }}
        >
          <div className="card-body">
            <h3 className="card-title text-center mb-4" style={{ color: "#e65100", fontWeight: 700 }}>
              Assign Inventory to Lab
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3">
                <select
                  id="itemSelect"
                  className="form-select"
                  value={selectedItem}
                  onChange={(e) => setSelectedItem(e.target.value)}
                  required
                >
                  <option value="">Select Item</option>
                  {items.map((item) => (
                    <option key={item.id} value={item.item_name}>
                      {item.item_name}
                    </option>
                  ))}
                </select>
                <label htmlFor="itemSelect">Choose Inventory Item</label>
              </div>

              <div className="form-floating mb-3">
                <select
                  id="labSelect"
                  className="form-select"
                  value={selectedLab}
                  onChange={(e) => setSelectedLab(e.target.value)}
                  required
                >
                  <option value="">Select Lab</option>
                  {labs.map((lab) => (
                    <option key={lab.id} value={lab.lab_name}>
                      {lab.lab_name}
                    </option>
                  ))}
                </select>
                <label htmlFor="labSelect">Choose Lab</label>
              </div>

              <div className="form-floating mb-4">
                <input
                  id="quantityInput"
                  type="number"
                  className="form-control"
                  placeholder="Enter Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                  min={1}
                />
                <label htmlFor="quantityInput">Quantity</label>
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-bold" style={{ borderRadius: "25px" }}>
                Assign
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignInventoryForm;
