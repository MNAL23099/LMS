import React from 'react';

function Sidebar  (){
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Dashboard</h2>
      <ul>
        <li className="mb-4">Home</li>
        <li className="mb-4">Users</li>
        <li className="mb-4">Reports</li>
      </ul>
    </div>
  );
};

export default Sidebar;
