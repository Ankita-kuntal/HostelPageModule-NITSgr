import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import NewsAnnouncement from './components/NewsAnnouncement';
import Home from './pages/Home';
import GirlsHostel from './pages/GirlsHostel';
import BoysHostel from './pages/BoysHostel';
import HostelAdmin from './pages/HostelAdmin';
import HostelRules from './pages/HostelRules';
import Footer from './components/home/Footer';
import AntiRaggingCommittee from "./pages/AntiRaggingCommittee";
import AntiRaggingRules from "./pages/AntiRaggingRules";
import Downloads from './pages/Downloads';

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
          <Route path="/hostel-admin" element={<HostelAdmin />} />
          <Route path="/hostel-rules" element={<HostelRules />} />
          <Route path="/anti-ragging/committee" element={<AntiRaggingCommittee />} />
          <Route path="/anti-ragging/rules" element={<AntiRaggingRules />} />
          <Route path="/downloads" element={<Downloads />} />
        </Routes>
      </div>
      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
