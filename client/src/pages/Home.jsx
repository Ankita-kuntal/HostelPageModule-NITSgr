import { useEffect } from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import About from "../components/home/About";
import Services from "../components/home/Services";
import React from "react";

const Home = () => {
  useEffect(() => {
    // Prevent automatic scrolling to the hash on page reload
    if (window.location.hash) {
      window.history.replaceState(null, null, " "); // Remove the hash from the URL
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy">
      <Header />

      {/* About Section */}
      <div id="about-section">
        <About />
      </div>

      {/* Services Section */}
      <div id="services-section">
        <Services />
      </div>
    </div>
  );
};

export default Home;
