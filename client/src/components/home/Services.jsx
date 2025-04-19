import React from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/images/nitsgr.jpg";

const servicesData = [
  {
    title: "Hostel Administration",
    desc: "Meet the hostel incharge and administrative team of NIT Srinagar.",
    link: "/hostel-admin",
    label: "View Administration",
  },
  {
    title: "Girls Hostel",
    desc: "Find details about capacity, facilities, rules and images of the Girls Hostel.",
    link: "/girls-hostel",
    label: "View Girls Hostel",
  },
  {
    title: "Boys Hostel",
    desc: "Find details about capacity, facilities, rules and images of the Boys Hostel.",
    link: "/boys-hostel",
    label: "View Boys Hostel",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
        <h2 className="text-3xl font-bold text-center text-navy mb-10">
          Hostel Services Information
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((card, idx) => (
            <div
              key={idx}
              className="bg-navy text-white border border-navy p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 h-full"
            >
              <img
                src={pic}
                alt="Hostel"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="mb-6 text-sm sm:text-base">{card.desc}</p>
              <Link
                to={card.link}
                className="inline-block bg-teal text-white px-6 py-3 rounded-md text-sm hover:bg-teal/90 transition"
              >
                {card.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
