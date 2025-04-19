import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import GirlsHostel from './pages/GirlsHostel';
import BoysHostel from './pages/BoysHostel';
import HostelIncharge from './pages/HostelIncharge';
import HostelAdmin from './pages/HostelAdmin';
import HostelRules from './pages/HostelRules';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/girls-hostel" element={<GirlsHostel />} />
          <Route path="/boys-hostel" element={<BoysHostel />} />
          <Route path="/hostel-incharge" element={<HostelIncharge />} />
          <Route path="/hostel-admin" element={<HostelAdmin />} />
          <Route path="/hostel-rules" element={<HostelRules />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
