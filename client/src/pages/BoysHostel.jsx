import { useState } from "react";

// Image Imports
import indus from "../assets/images/indus.jpg";
import chenab from "../assets/images/chenab.jpg";
import tawi from "../assets/images/tawi.jpg";
import cBlock from "../assets/images/cblock.jpg";
import jhelum from "../assets/images/jhelum.jpg";
import jhelumExt from "../assets/images/jhelumext.jpg";
import mansar from "../assets/images/mansar.jpg";
import manasbal from "../assets/images/manasbal.jpg";

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
        alt="Boys Hostel"
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

const BoysHostel = () => {
  const images = [indus, chenab, tawi, cBlock, jhelum, jhelumExt, mansar, manasbal];

  const blocks = [
    {
      name: "Indus Block",
      image: indus,
      desc: "This hostel is for 3rd year B.Tech students. There are three floors in this hostel. There are separate wardens and guard room in each floor. The capacity of this hostel is 625 students.",
    },
    {
      name: "Chenab Block",
      image: chenab,
      desc: "This multi-seater hostel is for 1st year B.Tech students and has a capacity of 510 students. It consists of three floors with all basic amenities.",
    },
    {
      name: "Tawi Block",
      image: tawi,
      desc: "Tawi Hostel has a total capacity of 192 students. It is equipped with all basic amenities required for a comfortable stay.",
    },
    {
      name: "C-Block",
      image: cBlock,
      desc: "This is a smaller hostel facility with a capacity of 60 students. It is used as an additional residential block to support student accommodation needs.",
    },
    {
      name: "Jhelum Block",
      image: jhelum,
      desc: "This single-seater hostel is for 4th year B.Tech students and has a total capacity of 288 students. It has three floors and 291 rooms, divided into six blocks: A, B, C, D, E, and F. Facilities include internet access.",
    },
    {
      name: "Jhelum Extension",
      image: jhelumExt,
      desc: "An extended block of the Jhelum Hostel, the Jhelum Extension has a capacity of 192 students and provides similar facilities as the main hostel building.",
    },
    {
      name: "Mansar Block",
      image: mansar,
      desc: "Designated for 2nd year B.Tech students, Mansar Hostel has two floors and accommodates 145 students. Each room is shared by multiple students.",
    },
    {
      name: "Manasbal Block",
      image: manasbal,
      desc: "Designated for 2nd year B.Tech students, Manasbal Hostel has two floors and accommodates 145 students. Each room is shared by multiple students.",
    },
  ];

  return (
    <div className="px-8 md:px-24 py-6">
      <h2 className="text-3xl font-semibold mt-6 mb-4">Boys Hostel Information</h2>
      <div className="h-1 w-20 bg-teal-500 rounded mb-3"></div>

      {/* Carousel */}
      <Carousel images={images} />

      {/* General Information */}
      <ul className="list-disc list-inside space-y-2 mt-6">
        <li>
          <strong>Total Blocks:</strong> 8 blocks designated for B.Tech students across all four years.
        </li>
        <li>
          <strong>Accommodation:</strong> Capacity ranges from 60 to 625 students per block, with both single and multi-seater rooms.
        </li>
        <li>
          <strong>Facilities:</strong> All blocks are equipped with basic amenities including Wi-Fi, common areas, and recreational zones.
        </li>
        <li>
          <strong>Allotment:</strong> Each block is assigned based on the student's academic year for better organization and management.
        </li>
        {/* <li>
          <strong>Contact:</strong> Mr. Rajesh Kumar – 9876543211
        </li> */}
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

export default BoysHostel;
