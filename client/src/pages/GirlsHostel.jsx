import { useState } from "react";

import senior from "../assets/images/senior.jpg";
import junior from "../assets/images/senior.jpg";
import lhostel from "../assets/images/senior.jpg";
import ahostel from "../assets/images/senior.jpg";
import ngh from "../assets/images/senior.jpg";

// Carousel Component
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full max-w-4xl h-64 mx-auto">
      <img
        src={images[currentIndex]}
        alt="Girls Hostel"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-teal text-white px-2 py-1 rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-teal text-white px-2 py-1 rounded-full"
      >
        Next
      </button>
    </div>
  );
};

const GirlsHostel = () => {
  const images = [senior, junior, ngh, lhostel, ahostel];

  const blocks = [
    {
      name: "Senior Girls Hostel",
      image: senior,
      desc: "This hostel accommodates final year female B.Tech students. It is shared by two students. It has all necessary facilities and ensures a comfortable stay.",
    },
    {
      name: "Junior Girls Hostel",
      image: junior,
      desc: "This hostel is designated for 3rd year female students and has a capacity of 200 students.",
    },
    {
      name: "New Girls Hostel",
      image: ngh,
      desc: "This Block is used for 2nd year students, equipped with modern amenities and peaceful surroundings. It accomodates 5 students per room.",
    },
    {
      name: "L Block",
      image: lhostel,
      desc: "This block accommodates 1st year students. It is a multi-seater hostel with all basic amenities.",
    },
    {
      name: "A Block",
      image: ahostel,
      desc: "This block is for 1st year students. It has a capacity of 200 students and is equipped with all necessary facilities.",
    },
  ];

  return (
    <div className="px-8 md:px-24 py-6">
      <h2 className="text-3xl font-semibold mt-6 mb-4">Girls Hostel Information</h2>
      <div className="h-1 w-20 bg-teal-500 rounded mb-3"></div>

      {/* Carousel */}
      <Carousel images={images} />

      {/* General Information */}
      <ul className="list-disc list-inside space-y-2 mt-6">
        <li>
          <strong>Total Blocks:</strong> 5 blocks designated for female B.Tech students.
        </li>
        <li>
          <strong>Accommodation:</strong> Capacity varies by block, with both single and shared rooms.
        </li>
        <li>
          <strong>Facilities:</strong> Includes Wi-Fi, mess facilities, security, common rooms, and more.
        </li>
        <li>
          <strong>Allotment:</strong> Allotment is year-wise for better coordination and comfort.
        </li>
        <li>
          <strong>Office Timings:</strong> 9 AM – 5 PM
        </li>
      </ul>

      {/* Blocks Information */}
      <h3 className="text-2xl font-semibold mt-10 mb-4">Blocks</h3>
      <div className="flex flex-col gap-6">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center"
          >
            <img
              src={block.image}
              alt={block.name}
              className="w-full md:w-1/3 h-40 object-cover rounded-lg"
            />
            <div className="w-full md:w-2/3">
              <h4 className="text-xl font-semibold mb-1">{block.name}</h4>
              <div className="h-1 w-20 bg-teal-500 rounded mb-3"></div>
              <p>{block.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GirlsHostel;
