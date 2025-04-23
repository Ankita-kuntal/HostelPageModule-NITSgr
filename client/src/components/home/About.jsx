import React from "react";
import pic from "../../assets/images/nitsgr.jpg";

const About = () => {
  return (
    <section className="bg-white text-navy min-h-screen flex flex-col items-center justify-center py-16 px-6 sm:px-10 lg:px-20">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        Message from the Dean Students Welfare
      </h2>

      {/* Added a container with enhanced box effect for the entire content */}
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Image */}
          <div className="flex justify-center p-6 md:p-10">
            <img
              src={pic}
              alt="Dean's Office"
              className="rounded-2xl shadow-lg w-full max-w-full sm:max-w-sm md:max-w-md h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="bg-gradient-to-br from-white to-slate-100 text-navy p-6 sm:p-8 lg:p-10 space-y-5">
            <p className="text-lg leading-relaxed font-bold">Dear Students,</p>
            <p className="text-base leading-relaxed">
              It is with great enthusiasm and a deep sense of responsibility that I take on the role of Dean Students Welfare at NIT Srinagar. Our students are the heart of this institution and my foremost priority is to ensure your well-being, growth, and holistic development.
            </p>
            <p className="text-base leading-relaxed">
              The Dean Students Welfare office is here to support you in every aspect of your journey – be it academic, personal, or professional. <span className="font-semibold">We aim to create a nurturing and inclusive environment where every student feels heard, supported, and empowered</span> to reach their full potential.
            </p>
            <p className="text-base leading-relaxed">
              Together with my team, I look forward to strengthening student-centric initiatives, enhancing campus life, and fostering a culture of empathy, innovation, and mutual respect.
            </p>
            <p className="text-base leading-relaxed">
              Let us work together hand in hand to make your experience at NIT Srinagar enriching and memorable.
            </p>
            <p className="text-base leading-relaxed">With warm regards!</p>
            <p className="text-base leading-relaxed font-semibold">
              Prof. Mohammad Abid Bazaz<br />
              Dean Students Welfare
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;