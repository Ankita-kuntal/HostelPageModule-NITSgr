import { Link } from 'react-router-dom';
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import About from "../components/home/About";
import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-navy">
      <Header />

      {/* About Section
      <section className="bg-gray-100 p-4">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-10 max-w-6xl mx-auto">
            <div>
              <img src="/assets/images/demopic.jpg" alt="Lecture Hall" className="rounded-lg shadow-lg w-full h-auto object-cover" />
              <p className="mt-4 text-teal font-medium text-center">
                Your gateway to student living solutions<br />since 2023
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold">About College Hostel Info</h2>
              <p className="text-gray-700 text-sm sm:text-base">
                At College Hostel Info, we are dedicated to being your go-to resource for all things related to college accommodation...
                <br /><br />
                Whether you're looking for a vibrant hostel close to campus, a quiet space for focused study, or a community-oriented living environment, our committed team is here to help.
              </p>
            </div>
          </div>
        </div>
      </section> */}
      <About />

      {/* Services Section */}
      <section className="bg-gray-50 w-full">
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
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
