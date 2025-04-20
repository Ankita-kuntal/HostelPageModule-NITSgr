import { Link } from 'react-router-dom';
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import About from "../components/home/About";
import Services from "../components/home/Services";
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy">
      <Header />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      
    </div>
  );
};

export default Home;
