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
      {/* <section className="bg-gray-50 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6 text-center">Services College Hostel Info provides</h2>
          <p className="mb-8 sm:mb-12 text-gray-600 text-sm sm:text-base text-center">Reach out for tailored solutions and expert advice</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Girls Hostel Info",
                desc: "Find details about capacity, facilities, rules and images of the Girls Hostel.",
                link: "/girls-hostel",
                label: "View Girls Hostel"
              },
              {
                title: "Boys Hostel Info",
                desc: "Explore information on Boys Hostel features, rooms, staff, and more.",
                link: "/boys-hostel",
                label: "View Boys Hostel"
              },
              {
                title: "Hostel Administration",
                desc: "Meet the hostel incharge and administrative team behind the scenes.",
                link: "/hostel-admin",
                label: "Meet the Team"
              }
            ].map((card, idx) => (
              <div key={idx} className="border border-gray-300 p-4 sm:p-6 rounded-lg bg-white shadow hover:shadow-md transition-all">
                <h3 className="text-lg sm:text-xl font-semibold text-teal mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-4 text-sm sm:text-base">{card.desc}</p>
                <Link to={card.link} className="text-teal hover:underline inline-block">{card.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      <Services />

      
    </div>
  );
};

export default Home;
