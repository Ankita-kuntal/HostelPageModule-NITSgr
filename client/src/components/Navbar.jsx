import { Link } from 'react-router-dom';
import logo from '../assets/images/logo-black.png'; // Import the logo image

const Navbar = () => {
  return (
    <nav className="bg-teal-700 text-white text-opacity-90 p-4 flex items-center justify-between">
      <img src={logo} alt="Logo" className="h-12 w-auto" /> {/* Align logo to the left */}
      <ul className="flex flex-wrap justify-end gap-4 text-sm sm:text-base font-medium">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/girls-hostel" className="hover:underline">Girls Hostel</Link></li>
        <li><Link to="/boys-hostel" className="hover:underline">Boys Hostel</Link></li>
        <li><Link to="/anti-ragging" className="hover:underline">Anti-Ragging</Link></li>
        <li><Link to="/hostel-admin" className="hover:underline">Hostel Administration</Link></li>
        <li><Link to="/hostel-rules" className="hover:underline">Hostel Rules</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
