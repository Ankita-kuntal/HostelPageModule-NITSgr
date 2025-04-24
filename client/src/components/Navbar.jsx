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

  return (
    <nav className="bg-teal-800 text-white text-opacity-90 p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        {/* Logo and Institute Logo */}
        {/* <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <a href="https://www.nitsri.ac.in" target="_blank" rel="noopener noreferrer">
            <img src={instituteLogo} alt="NIT Srinagar" className="h-10 w-auto" />
          </a>
        </div> */}

        {/* Hamburger Toggle Button (Visible on small screens) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-end w-10 h-10"
        >
          <span className="text-white">☰</span> {/* Hamburger icon */}
        </button>

        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 md:mt-0 text-sm sm:text-base font-medium">
            {/* Home */}
            <li>
              <Link to="/" className="hover:underline block py-2 md:py-0">
                Home
              </Link>
            </li>

            {/* Hostel Administration */}
            <li
              onMouseEnter={() => setActiveDropdown("admin")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <Link
                to="/hostel-admin"
                className="hover:underline block py-2 md:py-0"
              >
                Hostel Administration ▾
              </Link>
              {activeDropdown === "admin" && (
                <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
                  <li>
                    <a
                      href="/hostel-admin#dean-welfare"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Dean Students Welfare
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hostel-admin#associate-dean"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Associate Dean
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hostel-admin#wardens"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Wardens
                    </a>
                  </li>
                  <li>
                    <a
                      href="/hostel-admin#hall-assistants"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Hall Assistants
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Hostel Info */}
            <li
              onMouseEnter={() => setActiveDropdown("hostel")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <span className="cursor-pointer hover:underline block py-2 md:py-0">
                Hostel Info ▾
              </span>
              {activeDropdown === "hostel" && (
                <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
                  <li>
                    <Link
                      to="/girls-hostel"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Girls Hostel
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/boys-hostel"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Boys Hostel
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Anti-Ragging */}
            <li
              onMouseEnter={() => setActiveDropdown("antiRagging")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <Link
                to="/anti-ragging/rules"
                className="hover:underline block py-2 md:py-0"
              >
                Anti-Ragging ▾
              </Link>
              {activeDropdown === "antiRagging" && (
                <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
                  <li>
                    <a
                      href="/anti-ragging/committee"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Anti Ragging Committee
                    </a>
                  </li>
                  <li>
                    <a
                      href="/anti-ragging/rules"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Anti Ragging Rules, Regulations and Undertakings
                    </a>
                  </li>
                </ul>
              )}
            </li>

            {/* Rules */}
            <li
              onMouseEnter={() => setActiveDropdown("rules")}
              onMouseLeave={() => setActiveDropdown(null)}
              className="relative"
            >
              <Link
                to="/hostel-rules"
                className="hover:underline block py-2 md:py-0"
              >
                Rules ▾
              </Link>
              {activeDropdown === "rules" && (
                <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-48">
                  <li>
                    <Link
                      to="/hostel-rules-summary"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Summary
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/hostel-rules"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Detailed Rules
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Downloads */}
            <li
              onMouseEnter={() => setShowDownloadsDropdown(true)}
              onMouseLeave={() => setShowDownloadsDropdown(false)}
              className="relative"
            >
              <Link
                to="/downloads"
                className="cursor-pointer hover:underline block py-2 md:py-0"
              >
                Downloads ▾
              </Link>
              {showDownloadsDropdown && (
                <ul className="absolute left-0 md:left-auto md:right-0 bg-white text-black rounded-md shadow-md z-10 w-56">
                  {downloadsData.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2 hover:bg-gray-100"
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
              >
                Web Team
              </Link>
            </li>
          </ul>
        </div>
      </div>

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
    </nav>
  );
};

export default Navbar;
