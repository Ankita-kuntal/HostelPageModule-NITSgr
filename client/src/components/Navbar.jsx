import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/images/logo-white.png";

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

  const toggleDropdown = (name) => {
    if (isMobileMenuOpen) {
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <>
      <div className="bg-teal-800 text-white text-opacity-90 pt-2 sm:pt-1 px-4">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex w-full justify-between items-center mb-4 sm:mb-2">
            {/* Logo */}
            <div className="flex-shrink-0 ml-8 sm:ml-2">
              <a
                href="https://nitsri.ac.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="h-24 sm:h-12 w-auto cursor-pointer"
                />
              </a>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center text-center flex-1 px-2 sm:px-1">
              <h1 className="text-3xl sm:text-base md:text-2xl font-bold leading-snug sm:leading-tight">
                राष्ट्रीय प्रौद्योगिकी संस्थान श्रीनगर
              </h1>
              <h2 className="text-3xl sm:text-base md:text-2xl font-bold pt-1 sm:pt-0.5 leading-snug sm:leading-tight">
                National Institute of Technology Srinagar
              </h2>
            </div>

            {/* Spacer */}
            <div className="flex-shrink-0 w-16 sm:w-4"></div>
          </div>
        </div>
      </div>

      {/* Navigation bar below */}
      <nav className="bg-teal-800 text-white text-opacity-90 pb-2 px-4">
        <div className="container mx-auto">
          {/* Hamburger Toggle Button */}
          <div className="md:hidden flex justify-end mb-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setActiveDropdown(null); // Close dropdowns when toggling menu
              }}
              className="flex items-center"
            >
              <span className="text-white text-2xl">☰</span>
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto`}
          >
            <ul className="flex flex-col items-center md:flex-row md:justify-end md:gap-6 md:mt-0 text-sm sm:text-base font-medium">
              <li>
                <Link to="/" className="hover:underline block py-3 md:py-0">
                  Home
                </Link>
              </li>

              {/* Hostel Administration */}
              <li
                onMouseEnter={() =>
                  !isMobileMenuOpen && setActiveDropdown("admin")
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && setActiveDropdown(null)
                }
                className="relative w-full md:w-auto"
              >
                <button
                  onClick={() => toggleDropdown("admin")}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Hostel Administration ▾
                </button>
                {activeDropdown === "admin" && (
                  <ul className="bg-white text-black rounded-md shadow-md z-10 w-56 mt-1 md:absolute md:left-auto md:right-0">
                    <li>
                      <a
                        href="/hostel-admin#dean-welfare"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Dean Students Welfare
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hostel-admin#associate-dean"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Associate Dean
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hostel-admin#wardens"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Wardens
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hostel-admin#hall-assistants"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Hall Assistants
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Hostel Info */}
              <li
                onMouseEnter={() =>
                  !isMobileMenuOpen && setActiveDropdown("hostel")
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && setActiveDropdown(null)
                }
                className="relative w-full md:w-auto"
              >
                <button
                  onClick={() => toggleDropdown("hostel")}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Hostel Info ▾
                </button>
                {activeDropdown === "hostel" && (
                  <ul className="bg-white text-black rounded-md shadow-md z-10 w-56 mt-1 md:absolute md:left-auto md:right-0">
                    <li>
                      <Link
                        to="/girls-hostel"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Girls Hostel
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/boys-hostel"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Boys Hostel
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Anti-Ragging */}
              <li
                onMouseEnter={() =>
                  !isMobileMenuOpen && setActiveDropdown("antiRagging")
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && setActiveDropdown(null)
                }
                className="relative w-full md:w-auto"
              >
                <button
                  onClick={() => toggleDropdown("antiRagging")}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Anti-Ragging ▾
                </button>
                {activeDropdown === "antiRagging" && (
                  <ul className="bg-white text-black rounded-md shadow-md z-10 w-72 mt-1 md:absolute md:left-auto md:right-0">
                    <li>
                      <a
                        href="/anti-ragging/committee"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Anti Ragging Committee
                      </a>
                    </li>
                    <li>
                      <a
                        href="/anti-ragging/rules"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Anti Ragging Rules, Regulations and Undertakings
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              {/* Rules */}
              <li
                onMouseEnter={() =>
                  !isMobileMenuOpen && setActiveDropdown("rules")
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && setActiveDropdown(null)
                }
                className="relative w-full md:w-auto"
              >
                <button
                  onClick={() => toggleDropdown("rules")}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Rules ▾
                </button>
                {activeDropdown === "rules" && (
                  <ul className="bg-white text-black rounded-md shadow-md z-10 w-56 mt-1 md:absolute md:left-auto md:right-0">
                    <li>
                      <Link
                        to="/hostel-rules-summary"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Summary
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/hostel-rules"
                        className="block px-4 py-3 hover:bg-gray-100"
                      >
                        Detailed Rules
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Downloads */}
              <li
                onMouseEnter={() =>
                  !isMobileMenuOpen && setShowDownloadsDropdown(true)
                }
                onMouseLeave={() =>
                  !isMobileMenuOpen && setShowDownloadsDropdown(false)
                }
                className="relative w-full md:w-auto"
              >
                <button
                  onClick={() => toggleDropdown("downloads")}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Downloads ▾
                </button>
                {activeDropdown === "downloads" && (
                  <ul className="bg-white text-black rounded-md shadow-md z-10 w-72 mt-1 md:absolute md:left-auto md:right-0">
                    {downloadsData.map((item, index) => (
                      <li key={index}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 hover:bg-gray-100"
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
                  onClick={() => setShowContactModal(true)}
                  className="hover:underline block py-3 md:py-0 w-full text-center"
                >
                  Contact Us
                </button>
              </li>

              {/* Web Team */}
              <li>
                <Link
                  to="/webteam"
                  className="hover:underline block py-3 md:py-0"
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
          <div className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full overflow-y-auto max-h-[90vh]">
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
