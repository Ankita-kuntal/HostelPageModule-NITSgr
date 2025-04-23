import { useState } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the ScrollToTopButton component

// Image Imports
import indus from "../assets/images/indus.jpg";
import chenab from "../assets/images/chenab.jpg";
import tawi from "../assets/images/tawi.jpg";
import cBlock from "../assets/images/cblock.jpg";
import jhelum from "../assets/images/jhelum.jpg";
import jhelumExt from "../assets/images/jhelumext.jpg";
import mansar from "../assets/images/mansar.jpg";
import manasbal from "../assets/images/manasbal.jpg";

// Carousel Component for Modal
const ModalCarousel = ({ image, blockName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
// For demonstration, create multiple copies of the same image
  // In a real scenario, you would have multiple different photos of the same hostel

// For demonstration, create multiple copies of the same image
  // In a real scenario, you would have multiple different photos of the same hostel
  const sameTypeImages = [image, image, image];

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sameTypeImages.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sameTypeImages.length) % sameTypeImages.length
    );
  };

  return (
    <div className="relative w-full h-48">
      <img
        src={sameTypeImages[currentIndex]}
        alt={`${blockName} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />
      <button
        onClick={prevImage}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
      >
        →
      </button>
      <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
        {sameTypeImages.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

// Modal Component for Popup
const Modal = ({ block, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] flex flex-col overflow-hidden">
        <div className="relative">
          <ModalCarousel image={block.image} blockName={block.name} />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto flex-grow">
          <h3 className="text-2xl font-bold mb-2">{block.name}</h3>
          <div className="h-1 w-20 bg-teal-500 rounded mb-4"></div>
          <p className="text-gray-700 mb-4">{block.desc}</p>

          {/* Additional Details */}
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Facilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>WiFi Connectivity</li>
              <li>Common Room</li>
              <li>Water Coolers</li>
              <li>Cleaning Services</li>
            </ul>
          </div>

          {/* Additional content to demonstrate scrolling */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Hostel Rules:</h4>
            <ol className="list-decimal list-inside space-y-1">
              <li>Students must follow the entry/exit timings strictly.</li>
              <li>Cooking in rooms is not permitted.</li>
              <li>Visitors must register at the reception.</li>
              <li>Property damage will be charged accordingly.</li>
              <li>Maintain noise levels that do not disturb others.</li>
            </ol>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Contact Information:</h4>
            <p>Warden: Dr. Sharma</p>
            <p>Email: warden.{block.name.split(" ")[0].toLowerCase()}@nitsri.ac.in</p>
            <p>Phone: +91-XXXXXXXXXX</p>
          </div>
          <button
            onClick={onClose}
            className="mt-6 bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Carousel Component for main page
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
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (block) => {
    setSelectedBlock(block);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col md:flex-row gap-4 items-center cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => openModal(block)}
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
              <button 
                className="mt-2 text-teal-600 font-medium hover:underline"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(block);
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying hostel details */}
      {selectedBlock && (
        <Modal 
          block={selectedBlock} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default BoysHostel;