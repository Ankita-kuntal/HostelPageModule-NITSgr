import { Link } from 'react-router-dom';
import React from 'react';
import campusImage from '../../assets/images/campus.jpg';

const Header = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${campusImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold mb-4 text-white text-opacity-85">Hostel - NIT Srinagar</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">Find the ideal accommodation for your college journey</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/hostel-admin" className="bg-teal-400 hover:bg-yellow-800 px-6 py-2 rounded text-white min-w-[120px]">About</Link>
          <Link to="/girls-hostel" className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black min-w-[120px]">Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
