import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo-white.png";
import instituteLogo from "../assets/images/logo-name.png";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showDownloadsDropdown, setShowDownloadsDropdown] = useState(false);
  const [downloadsData, setDownloadsData] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/data/downloads.json")
      .then((res) => res.json())
      .then((data) => setDownloadsData(data))
      .catch((err) => console.error("Error fetching downloads:", err));
  }, []);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowContactModal(false);
    }
  };

  // Add this function inside Navbar component
  const handleDropdownParentClick = (dropdownKey, parentRoute) => {
    if (window.innerWidth < 768) { // mobile only
      if (activeDropdown === dropdownKey) {
        setActiveDropdown(null);
        // Optionally navigate to parentRoute here if you want navigation on second click
        // window.location.href = parentRoute; // or use navigate from react-router
      } else {
        setActiveDropdown(dropdownKey);
      }
    }
  };

  // Add this function inside Navbar component
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  // Add this function inside Navbar component
  const handleDropdownOptionClick = () => {
    setActiveDropdown(null);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Existing header — visible only on md and above */}
      <div className="bg-teal-800 text-white text-opacity-90 pt-2 px-4 hidden md:block">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex w-full justify-between items-center mb-4">
            <div className="flex-shrink-0 ml-8">
              <a
                href="https://nitsri.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-24 w-auto cursor-pointer"
                />
              </a>
            </div>

            <div className="flex flex-col items-center text-center flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">
                राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold pt-1">
                National Institute of Technology Srinagar
              </h2>
            </div>

            <div className="flex-shrink-0 w-16"></div>
          </div>
        </div>
      </div>

      {/* Mobile header — visible only on small screens */}
      <div className="bg-teal-800 text-white text-opacity-90 px-4 py-3 flex justify-between items-center md:hidden shadow-md">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href="https://nitsri.ac.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-auto sm:h-12 cursor-pointer rounded"
            />
          </a>
          <span className="font-semibold text-sm leading-snug sm:text-base sm:leading-snug">
            National Institute of Technology
            <br />
            Srinagar
          </span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center text-3xl focus:outline-none hover:text-gray-200 transition"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Navigation bar */}
      <nav className="bg-teal-800 text-white text-opacity-90 pb-2 px-4">
        <div className="container mx-auto">
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col md:flex-row md:justify-end md:space-x-4 md:mt-0 text-sm sm:text-base font-medium">
              {/* Home */}
              <li>
                <Link to="/" className="hover:underline block py-2 md:py-0" onClick={handleNavLinkClick}>
                  Home
                </Link>
              </li>

              {/* Hostel Administration */}
              <li>
                <Link
                  to="/hostel-admin"
                  className="hover:underline block py-2 md:py-0"
                  onClick={handleNavLinkClick}
                >
                  Hostel Administration
                </Link>
              </li>
            
              {/* Hostel Info */}
              <li
                onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown("hostel")}
                onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                className="relative"
              >
                <span
                  className="cursor-pointer hover:underline block py-2 md:py-0"
                  onClick={() => handleDropdownParentClick("hostel")}
                >
                  Hostel Info ▾
                </span>
                {activeDropdown === "hostel" && (
                  <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
                    <li>
                      <Link
                        to="/girls-hostel"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Girls Hostel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/boys-hostel"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Boys Hostel
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Anti-Ragging */}
              <li
                onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown("antiRagging")}
                onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                className="relative"
              >
                <span
                  className="cursor-pointer hover:underline block py-2 md:py-0"
                  onClick={() => handleDropdownParentClick("antiRagging")}
                >
                  Anti-Ragging ▾
                </span>
                {activeDropdown === "antiRagging" && (
                  <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
                    <li>
                      <a
                        href="/anti-ragging/committee"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Anti Ragging Committee
                      </a>
                    </li>
                    <li>
                      <a
                        href="/anti-ragging/rules"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Anti Ragging Rules, Regulations and Undertakings
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Rules */}
              <li
                onMouseEnter={() => window.innerWidth >= 768 && setActiveDropdown("rules")}
                onMouseLeave={() => window.innerWidth >= 768 && setActiveDropdown(null)}
                className="relative"
              >
                <span
                  className="cursor-pointer hover:underline block py-2 md:py-0"
                  onClick={() => handleDropdownParentClick("rules")}
                >
                  Rules ▾
                </span>
                {activeDropdown === "rules" && (
                  <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
                    <li>
                      <Link
                        to="/hostel-rules-summary"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Summary
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hostel-rules"
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={handleDropdownOptionClick}
                      >
                        Detailed Rules
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Downloads */}
              <li
                onMouseEnter={() => window.innerWidth >= 768 && setShowDownloadsDropdown(true)}
                onMouseLeave={() => window.innerWidth >= 768 && setShowDownloadsDropdown(false)}
                className="relative"
              >
                <span
                  className="cursor-pointer hover:underline block py-2 md:py-0"
                  onClick={() => handleDropdownParentClick("downloads")}
                >
                  Downloads ▾
                </span>
                {activeDropdown === "downloads" && (
                  <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
                    {downloadsData.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-100"
                          onClick={handleDropdownOptionClick}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Contact Us */}
              <li>
                <button
                  onClick={() => { setShowContactModal(true); handleNavLinkClick(); }}
                  className="hover:underline block py-2 md:py-0 text-left w-full md:w-auto"
                >
                  Contact Us
                </button>
              </li>

              {/* Web Team */}
              <li>
                <Link
                  to="/webteam"
                  className="hover:underline block py-2 md:py-0"
                  onClick={handleNavLinkClick}
                >
                  Web Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Us Modal */}
      {showContactModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full overflow-y-auto max-h-[90vh] mx-4">
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-2 right-2 text-gray-900 hover:text-gray-700 font-bold text-xl"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <ul className="space-y-4 text-gray-900">
              <li>
                <strong>Dean Students Welfare:</strong> +91-6005103740,{" "}
                <a
                  href="mailto:deanstudentswelfare@nitsri.ac.in"
                  className="text-teal-600 underline"
                >
                  deanstudentswelfare@nitsri.ac.in
                </a>
              </li>
              <li>
                <strong>Associate Dean:</strong> +91-8986948677,{" "}
                <a
                  href="mailto:shashikantkumar@nitsri.ac.in"
                  className="text-teal-600 underline"
                >
                  shashikantkumar@nitsri.ac.in
                </a>
              </li>
              <li>
                <strong>Anti-Ragging Cell:</strong> +91-7006725396,{" "}
                <a
                  href="mailto:anti.ragging@nitsri.ac.in"
                  className="text-teal-600 underline"
                >
                  anti.ragging@nitsri.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

// import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import logo from "../assets/images/logo-white.png";
// import instituteLogo from "../assets/images/logo-name.png";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [showContactModal, setShowContactModal] = useState(false);
//   const [showDownloadsDropdown, setShowDownloadsDropdown] = useState(false);
//   const [downloadsData, setDownloadsData] = useState([]);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     fetch("/data/downloads.json")
//       .then((res) => res.json())
//       .then((data) => setDownloadsData(data))
//       .catch((err) => console.error("Error fetching downloads:", err));
//   }, []);

//   const handleOutsideClick = (e) => {
//     if (e.target.id === "modal-overlay") {
//       setShowContactModal(false);
//     }
//   };

//   return (
//     <>
//       <div className="bg-teal-800 text-white text-opacity-90 pt-2 px-4">
//         <div className="container mx-auto flex flex-col items-center">
//           <div className="flex w-full justify-between items-center mb-4">
//             <div className="flex-shrink-0 ml-8">
//               <a href="https://nitsri.ac.in" target="_blank" rel="noopener noreferrer">
//                 <img src={logo} alt="Logo" className="h-24 w-auto cursor-pointer" />
//               </a>
//             </div>

//             <div className="flex flex-col items-center text-center flex-1">
//               <h1 className="text-2xl md:text-3xl font-bold">राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर</h1>
//               <h2 className="text-2xl md:text-3xl font-bold pt-1">National Institute of Technology Srinagar</h2>
//               {/* <h3 className="text-lg md:text-xl">Hostel</h3> */}
//             </div>

//             <div className="flex-shrink-0 w-16"></div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation bar below, aligned to right */}
//       <nav className="bg-teal-800 text-white text-opacity-90 pb-2 px-4">
//         <div className="container mx-auto">
//           {/* Hamburger Toggle Button (Visible on small screens) */}
//           <div className="md:hidden flex justify-end mb-2">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="flex items-center"
//             >
//               <span className="text-white">☰</span> {/* Hamburger icon */}
//             </button>
//           </div>

//           <div
//             className={`${
//               isMobileMenuOpen ? "block" : "hidden"
//             } w-full md:block md:w-auto`}
//           >
//             <ul className="flex flex-col md:flex-row md:justify-end md:space-x-4 md:mt-0 text-sm sm:text-base font-medium">
//               {/* Home */}
//               <li>
//                 <Link to="/" className="hover:underline block py-2 md:py-0">
//                   Home
//                 </Link>
//               </li>

//               {/* Hostel Administration */}
//               <li
//                 onMouseEnter={() => setActiveDropdown("admin")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//                 className="relative"
//               >
//                 <Link
//                   to="/hostel-admin"
//                   className="hover:underline block py-2 md:py-0"
//                 >
//                   Hostel Administration ▾
//                 </Link>
//                 {activeDropdown === "admin" && (
//                   <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
//                     <li>
//                       <a
//                         href="/hostel-admin#dean-welfare"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Dean Students Welfare
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/hostel-admin#associate-dean"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Associate Dean
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/hostel-admin#wardens"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Wardens
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/hostel-admin#hall-assistants"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Hall Assistants
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               {/* Hostel Info */}
//               <li
//                 onMouseEnter={() => setActiveDropdown("hostel")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//                 className="relative"
//               >
//                 <span className="cursor-pointer hover:underline block py-2 md:py-0">
//                   Hostel Info ▾
//                 </span>
//                 {activeDropdown === "hostel" && (
//                   <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
//                     <li>
//                       <Link
//                         to="/girls-hostel"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Girls Hostel
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/boys-hostel"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Boys Hostel
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               {/* Anti-Ragging */}
//               <li
//                 onMouseEnter={() => setActiveDropdown("antiRagging")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//                 className="relative"
//               >
//                 <Link
//                   to="/anti-ragging/rules"
//                   className="hover:underline block py-2 md:py-0"
//                 >
//                   Anti-Ragging ▾
//                 </Link>
//                 {activeDropdown === "antiRagging" && (
//                   <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
//                     <li>
//                       <a
//                         href="/anti-ragging/committee"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Anti Ragging Committee
//                       </a>
//                     </li>
//                     <li>
//                       <a
//                         href="/anti-ragging/rules"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Anti Ragging Rules, Regulations and Undertakings
//                       </a>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               {/* Rules */}
//               <li
//                 onMouseEnter={() => setActiveDropdown("rules")}
//                 onMouseLeave={() => setActiveDropdown(null)}
//                 className="relative"
//               >
//                 <Link
//                   to="/hostel-rules"
//                   className="hover:underline block py-2 md:py-0"
//                 >
//                   Rules ▾
//                 </Link>
//                 {activeDropdown === "rules" && (
//                   <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
//                     <li>
//                       <Link
//                         to="/hostel-rules-summary"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Summary
//                       </Link>
//                     </li>
//                     <li>
//                       <Link
//                         to="/hostel-rules"
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         Detailed Rules
//                       </Link>
//                     </li>
//                   </ul>
//                 )}
//               </li>

//               {/* Downloads */}
//               <li
//                 onMouseEnter={() => setShowDownloadsDropdown(true)}
//                 onMouseLeave={() => setShowDownloadsDropdown(false)}
//                 className="relative"
//               >
//                 <Link
//                   to="/downloads"
//                   className="cursor-pointer hover:underline block py-2 md:py-0"
//                 >
//                   Downloads ▾
//                 </Link>
//                 {showDownloadsDropdown && (
//                   <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
//                     {downloadsData.map((item, index) => (
//                       <li key={index}>
//                         <a
//                           href={item.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="block px-4 py-2 hover:bg-gray-100"
//                         >
//                           {item.name}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>

//               {/* Contact Us */}
//               <li>
//                 <button
//                   onClick={() => setShowContactModal(true)}
//                   className="hover:underline block py-2 md:py-0 text-left w-full md:w-auto"
//                 >
//                   Contact Us
//                 </button>
//               </li>

//               {/* Web Team */}
//               <li>
//                 <Link
//                   to="/webteam"
//                   className="hover:underline block py-2 md:py-0"
//                 >
//                   Web Team
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Contact Us Modal */}
//       {showContactModal && (
//         <div
//           id="modal-overlay"
//           className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//           onClick={handleOutsideClick}
//         >
//           <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full overflow-y-auto max-h-[90vh]">
//             <button
//               onClick={() => setShowContactModal(false)}
//               className="absolute top-2 right-2 text-gray-900 hover:text-gray-700 font-bold text-xl"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-bold mb-4">Contact Us</h2>
//             <ul className="space-y-4 text-gray-900">
//               <li>
//                 <strong>Dean Students Welfare:</strong> +91-6005103740,{" "}
//                 <a
//                   href="mailto:deanstudentswelfare@nitsri.ac.in"
//                   className="text-teal-600 underline"
//                 >
//                   deanstudentswelfare@nitsri.ac.in
//                 </a>
//               </li>
//               <li>
//                 <strong>Associate Dean:</strong> +91-8986948677,{" "}
//                 <a
//                   href="mailto:shashikantkumar@nitsri.ac.in"
//                   className="text-teal-600 underline"
//                 >
//                   shashikantkumar@nitsri.ac.in
//                 </a>
//               </li>
//               <li>
//                 <strong>Anti-Ragging Cell:</strong> +91-7006725396,{" "}
//                 <a
//                   href="mailto:anti.ragging@nitsri.ac.in"
//                   className="text-teal-600 underline"
//                 >
//                   anti.ragging@nitsri.ac.in
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;
