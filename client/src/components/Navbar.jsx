import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-white.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAntiRaggingDropdown, setShowAntiRaggingDropdown] = useState(false);
  const [showRulesDropdown, setShowRulesDropdown] = useState(false); // State for Rules dropdown
  const [showContactModal, setShowContactModal] = useState(false);

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      setShowContactModal(false);
    }
  };

  return (
    <nav className="bg-teal-700 text-white text-opacity-90 p-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
      <ul className="flex flex-wrap justify-end gap-4 text-sm sm:text-base font-medium">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          className="relative"
        >
          <Link to="/hostel-admin" className="hover:underline">
            Hostel Administration ▾
          </Link>
          {showDropdown && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-md z-10 w-48">
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
        <li>
          <Link to="/girls-hostel" className="hover:underline">
            Girls Hostel
          </Link>
        </li>
        <li>
          <Link to="/boys-hostel" className="hover:underline">
            Boys Hostel
          </Link>
        </li>

        <li
          onMouseEnter={() => setShowAntiRaggingDropdown(true)}
          onMouseLeave={() => setShowAntiRaggingDropdown(false)}
          className="relative"
        >
          <Link to="/anti-ragging/rules" className="hover:underline">
            Anti-Ragging ▾
          </Link>
          {showAntiRaggingDropdown && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-md z-10 w-48">
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

        {/* Rules Dropdown */}
        <li
          onMouseEnter={() => setShowRulesDropdown(true)}
          onMouseLeave={() => setShowRulesDropdown(false)}
          className="relative"
        >
          <Link to="/hostel-rules" className="hover:underline">
            Rules ▾
          </Link>
          {showRulesDropdown && (
            <ul className="absolute top-full left-0 bg-white text-black rounded-md shadow-md z-10 w-48">
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

        <li>
          <Link to="/downloads" className="hover:underline">
            Downloads
          </Link>
        </li>
        <li>
          {/* Contact Us Navlink */}
          <button
            onClick={() => setShowContactModal(true)}
            className="hover:underline"
          >
            Contact Us
          </button>
        </li>
      </ul>

      {/* Contact Us Modal */}
      {showContactModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={handleOutsideClick}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 relative max-w-lg w-full overflow-y-auto max-h-[90vh]"
          >
            {/* Cross Button */}
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
                <strong>Hostel Office:</strong> +91-1234567890
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
