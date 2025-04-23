import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import campusImage from '../../assets/images/campus.jpg';

const Header = () => {
  return (
    <section
      className="relative w-full h-[280px] bg-cover bg-center bg-no-repeat"  
      style={{ backgroundImage: `url(${campusImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white text-opacity-85">Halls of Residence</h1>
      </div>
    </section>
  );
};

export default Header;

