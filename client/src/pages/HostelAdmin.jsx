import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton";

const HostelAdmin = () => {
  const location = useLocation();
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    fetch("/data/adminData.json")
      .then((res) => res.json())
      .then(setAdminData)
      .catch((err) => console.error("Error loading admin data:", err));

    // Smooth scroll to section on hash
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  if (!adminData) return <div>Loading...</div>;

  const { dean, associateDean, wardens, hallAssistants } = adminData;

  // Get all unique hostel blocks from both wardens and assistants
  const blocks = [
    ...new Set([
      ...wardens.flatMap(w => Array.isArray(w.block) ? w.block : [w.block]),
      ...hallAssistants.flatMap(h => Array.isArray(h.block) ? h.block : [h.block]).filter(Boolean),
    ]),
  ]; 

  // Filter out blocks that don't have either wardens or hall assistants
  const validBlocks = blocks.filter(block => {
    const wardensForBlock = wardens.filter(w => Array.isArray(w.block) ? w.block.includes(block) : w.block === block);
    const assistantsForBlock = hallAssistants.filter(h => Array.isArray(h.block) ? h.block.includes(block) : h.block === block);
    return wardensForBlock.length > 0 || assistantsForBlock.length > 0;
  });

  const assistantsWithoutBlock = hallAssistants.filter(h => !h.block || h.block === "");

  return (
    <div className="px-8 md:px-24 py-10 font-sans bg-white">
      <h2 className="text-3xl font-bold text-navy mb-12 text-center">
        Hostel Administration
      </h2>

      {/* Dean Section */}
      <AdminSection id="dean-welfare" {...dean} title="Dean Students Welfare" />

      {/* Associate Dean Section */}
      <AdminSection id="associate-dean" {...associateDean} title="Associate Dean Students Welfare" />

      {/* Block-wise Sections */}
      {validBlocks.map((block, idx) => {
        const wardensForBlock = wardens.filter(w => Array.isArray(w.block) ? w.block.includes(block) : w.block === block);
        const assistantsForBlock = hallAssistants.filter(h => Array.isArray(h.block) ? h.block.includes(block) : h.block === block);

        return (
          <section key={idx} id={`block-${block}`} className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">{block}</h3>

            {wardensForBlock.length > 0 && (
              <>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Wardens</h4>
                <CardGrid data={wardensForBlock} type="warden" />
              </>
            )}

            {assistantsForBlock.length > 0 && (
              <>
                <h4 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Hall Assistants</h4>
                <CardGrid data={assistantsForBlock} type="hall" />
              </>
            )}
          </section>
        );
      })}

      {/* Assistants with No Block */}
      {assistantsWithoutBlock.length > 0 && (
        <section className="mb-16 scroll-mt-24">
          <h3 className="text-2xl font-bold text-teal-700 mb-4">
            Hall Assistants (No Block Assigned)
          </h3>
          <CardGrid data={assistantsWithoutBlock} type="hall" />
        </section>
      )}
    </div>
  );
};

const AdminSection = ({ id, image, title, name, designation, email, contact }) => (
  <section id={id} className="mb-16 scroll-mt-24 bg-white shadow-md rounded-lg p-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={image}
        alt={title}
        className="w-48 h-48 object-cover rounded-md border border-gray-200 shadow"
      />
      <div className="text-gray-800 space-y-1">
        <h3 className="text-xl font-bold text-teal-700">{title}</h3>
        {name && <p className="text-lg font-semibold">{name}</p>}
        {designation && <p className="text-sm text-gray-600">{designation}</p>}
        {email && (
          <p className="text-sm text-gray-700">
            Email:{" "}
            <a href={`mailto:${email}`} className="text-teal-600 underline">{email}</a>
          </p>
        )}
        {contact && <p className="text-sm text-gray-700">Contact No: {contact}</p>}
      </div>
    </div>
  </section>
);

const CardGrid = ({ data, type }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((item, index) => {
      const blocks = Array.isArray(item.block) ? item.block.join(" / ") : item.block;
      return (
        <div
          key={index}
          className="bg-white border rounded-lg shadow p-4 flex flex-col items-center text-center"
        >
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 border" />
          )}

          <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>

          {type === "warden" && (
            <>
              <p className="text-sm text-gray-600">{item.department}</p>
              <p className="text-sm text-gray-500">{blocks}</p>
              {item.email && (
                <p className="text-sm text-gray-700 mt-1">
                  Email:{" "}
                  <a href={`mailto:${item.email}`} className="text-teal-600 underline">{item.email}</a>
                </p>
              )}
              <p className="text-sm text-gray-700">Contact: {item.contact}</p>
            </>
          )}

          {type === "hall" && (
            <>
              <p className="text-sm text-gray-700">Contact: {item.contact}</p>
              {item.block && <p className="text-sm text-gray-500">{blocks}</p>}
            </>
          )}
        </div>
      );
    })}
    <ScrollToTopButton />
  </div>
);

export default HostelAdmin;
