import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex flex-wrap justify-center gap-4">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/girls-hostel" className="hover:underline">Girls Hostel</Link></li>
        <li><Link to="/boys-hostel" className="hover:underline">Boys Hostel</Link></li>
        <li><Link to="/hostel-incharge" className="hover:underline">Hostel Incharge</Link></li>
        <li><Link to="/hostel-admin" className="hover:underline">Hostel Administration</Link></li>
        <li><Link to="/hostel-rules" className="hover:underline">Hostel Rules</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
