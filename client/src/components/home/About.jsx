import React from "react";
import pic from "../../assets/images/nitsgr.jpg";

const About = () => {
  return (
    <section className="bg-white text-navy min-h-screen flex flex-col items-center justify-center py-12 px-4">
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Message from the Dean Students Welfare
      </h2>

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Image */}
        <div className="flex justify-center md:col-span-1">
          <img
            src={pic}
            alt="Dean's Office"
            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-full"
          />
        </div>

        {/* Text box*/}
        <div className="md:col-span-2 bg-white text-navy rounded-lg shadow-lg p-8 space-y-4">
          <p className="text-base leading-relaxed font-bold">Dear Students,</p>
          <p className="text-base leading-relaxed">
            It is with great enthusiasm and a deep sense of responsibility that I take on the role of Dean Students Welfare at NIT Srinagar. Our students are the heart of this institution and my foremost priority is to ensure your well-being, growth, and holistic development.
          </p>
          <p className="text-base leading-relaxed">
            The Dean Students Welfare office is here to support you in every aspect of your journey– be it academic, personal, or professional. <b>We aim to create a nurturing and inclusive environment where every student feels heard, supported, and empowered</b> to reach their full potential.
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
    </section>
  );
};

export default About;
