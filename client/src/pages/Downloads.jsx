import React from "react";

const Downloads = () => {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-navy">Downloads</h2>
      <div className="h-1 w-20 bg-teal-500 rounded mb-8"></div>
      <ul className="list-decimal pl-6">
        <li>
          <a 
            href="https://nitsri.ac.in/Department/Hostel/Residents_Entry_and_Exit_Form.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline"
          >
            Residents Entry/Exit Form
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Downloads;