import Navbar from "../Nav/Navbar";
import { useEffect } from "react";

function fetchAllocatedInventory() {
  fetch("http://localhost:5000/inventory/fetchAllocatedInventory")
    .then((res) => res.json())
    .then((res) => {
      const tableBody = document.getElementById("allocated_inventory_table");
      tableBody.innerHTML = ""; // Clear old data

      res.forEach((item, index) => {
        const tableRow = document.createElement("tr");

        const th = document.createElement("th");
        th.scope = "row";
        th.textContent = index + 1;

        const tdName = document.createElement("td");
        tdName.textContent = item.name;

        const tdQuantity = document.createElement("td");
        tdQuantity.textContent = item.quantity;

        const tdLab = document.createElement("td");
        tdLab.textContent = item.lab_name; 

        tableRow.appendChild(th);
        tableRow.appendChild(tdName);
        tableRow.appendChild(tdQuantity);
        tableRow.appendChild(tdLab);

        tableBody.appendChild(tableRow);
      });
    })
    .catch((err) => console.error("Error fetching allocated inventory:", err));
}

export function ViewAllocatedInventory() {
  useEffect(() => {
    fetchAllocatedInventory();
  }, []);

  return (
    <>
      <Navbar pageType="View Assigned Inventory" />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Lab Name</th>
            </tr>
          </thead>
          <tbody id="allocated_inventory_table"></tbody>
        </table>
      </div>
    </>
  );
}
