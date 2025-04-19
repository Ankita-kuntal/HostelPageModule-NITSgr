import { Link } from 'react-router-dom';
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Header />

      {/* About Section */}
      <section className="bg-gray-900 p-4">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 max-w-6xl mx-auto">
            <div>
              <img
                src="/assets/images/demopic.jpg"
                alt="Lecture Hall"
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
              <p className="mt-4 text-yellow-500 text-center font-medium">
                Your gateway to student living solutions<br />since 2023
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">About College Hostel Info</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                At College Hostel Info, we are dedicated to being your go-to resource for all things related to college accommodation...
                <br /><br />
                Whether you're looking for a vibrant hostel close to campus, a quiet space for focused study, or a community-oriented living environment, our committed team is here to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-800 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <h2 className="text-3xl font-semibold mb-4 text-center">Services College Hostel Info Provides</h2>
          <p className="mb-8 text-gray-300 text-center text-sm sm:text-base">Reach out for tailored solutions and expert advice</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Girls Hostel Info",
                desc: "Find details about capacity, facilities, rules and images of the Girls Hostel.",
                link: "/girls-hostel",
                label: "View Girls Hostel",
              },
              {
                title: "Boys Hostel Info",
                desc: "Explore information on Boys Hostel features, rooms, staff, and more.",
                link: "/boys-hostel",
                label: "View Boys Hostel",
              },
              {
                title: "Hostel Administration",
                desc: "Meet the hostel incharge and administrative team behind the scenes.",
                link: "/hostel-admin",
                label: "Meet the Team",
              },
            ].map((service, index) => (
              <div key={index} className="border border-gray-700 p-6 rounded-lg bg-black bg-opacity-40 hover:bg-opacity-60 transition-all">
                <h3 className="text-xl font-semibold text-yellow-400 mb-2">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{service.desc}</p>
                <Link to={service.link} className="text-yellow-500 hover:underline inline-block">{service.label}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
