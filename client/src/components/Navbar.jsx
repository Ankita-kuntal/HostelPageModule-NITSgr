import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo-white.png";
import instituteLogo from "../assets/images/logo-name.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAntiRaggingDropdown, setShowAntiRaggingDropdown] = useState(false); // State for Anti-Ragging dropdown

  return (
    <nav className="bg-teal-700 text-white text-opacity-90 p-4 flex items-center justify-between">
      <div className="flex items-center">
      <img src={logo} alt="Logo" className="h-12 w-auto" />
      <a href="https://www.nitsri.ac.in" target="_blank" rel="noopener noreferrer">
          <img src={instituteLogo} alt="NIT Srinagar" className="h-10 w-auto ml-4" />
      </a>
      </div>
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
       
        <li>
          <Link to="/hostel-rules" className="hover:underline">
            Rules
          </Link>
          </li>
          <li>
          <Link to="/downloads" className="hover:underline">
            Downloads
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
