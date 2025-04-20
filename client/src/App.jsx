import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import NewsAnnouncement from './components/NewsAnnouncement';
import Home from './pages/Home';
import GirlsHostel from './pages/GirlsHostel';
import BoysHostel from './pages/BoysHostel';
import HostelIncharge from './pages/HostelIncharge';
import HostelAdmin from './pages/HostelAdmin';
import HostelRules from './pages/HostelRules';
import Footer from './components/home/Footer';

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* Navbar */}
      <Navbar />
      {/* News and Announcement */}
      <NewsAnnouncement />
      {/* Main Content */}
      <div className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/girls-hostel" element={<GirlsHostel />} />
          <Route path="/boys-hostel" element={<BoysHostel />} />
          <Route path="/hostel-incharge" element={<HostelIncharge />} />
          <Route path="/hostel-admin" element={<HostelAdmin />} />
          <Route path="/hostel-rules" element={<HostelRules />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
