import React, { useEffect, useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the ScrollToTopButton component

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);

  useEffect(() => {
    fetch("/data/downloads.json")
      .then((res) => res.json())
      .then((data) => setDownloads(data))
      .catch((err) => console.error("Error fetching downloads:", err));
  }, []);

  return (
    <div className="px-8 md:px-24 py-6 min-h-screen">
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-navy">Downloads</h2>
      <div className="h-1 w-20 bg-teal-500 rounded mb-8"></div>
      <ul className="list-decimal pl-6">
        {downloads.map((item, index) => (
          <li key={index} className="mb-2">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default Downloads;

