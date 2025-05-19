import { useState, useEffect } from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";

import senior from "../assets/images/senior.jpg";
import junior from "../assets/images/senior.jpg";
import lhostel from "../assets/images/senior.jpg";
import ahostel from "../assets/images/senior.jpg";
import ngh from "../assets/images/senior.jpg";

// Carousel Component for Modal
const ModalCarousel = ({ image, blockName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
const Modal = ({ block, isOpen, onClose, wardenInfo }) => {
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
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">Facilities:</h4>
            <ul className="list-disc list-inside space-y-1">
              <li>WiFi Connectivity</li>
              <li>Common Room</li>
              <li>Water Coolers</li>
              <li>Cleaning Services</li>
            </ul>
          </div>
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
            
              <>
                <p>Warden: {block.warden}</p>
                <p>Department: {block.wardenDepartment}</p>
                
                  <p>
                    Email:{" "}
                    <a 
                      href={`mailto:${block.wardenEmail}`}
                      className="text-teal-600 hover:underline"
                    >
                      {block.wardenEmail}
                    </a>
                  </p>
                <p>Contact: {block.wardenContact}</p>
              </>
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
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [adminData, setAdminData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch admin data from the same source as HostelAdmin component
    fetch("/data/adminData.json")
      .then((res) => res.json())
      .then((data) => {
        setAdminData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading admin data:", err);
        setLoading(false);
      });
  }, []);

  const openModal = (block) => {
    setSelectedBlock(block);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [senior, junior, ngh, lhostel, ahostel];

  const blocks = [
    {
      name: "Senior Girls Hostel",
      image: senior,
      desc: "This hostel accommodates final year female B.Tech students. It is shared by two students. It has all necessary facilities and ensures a comfortable stay.",
      adminBlockName: "Senior Girls Hostel", 
      warden: "Dr. Fatima Jalid",
      wardenDepartment: "Chemical Engineering",
      wardenContact: "9990795522",
      wardenEmail: " fatima@nitsri.ac.in"
    },
    {
      name: "Junior Girls Hostel",
      image: junior,
      desc: "This hostel is designated for 3rd year female students and has a capacity of 200 students.",
      adminBlockName: "Junior Girls Hostel",
      warden: "Dr. Nitika Kundan",
      wardenDepartment: "MMED",
      wardenContact: "6006191446",
      wardenEmail: " nitika.kundan@nitsri.ac.in"
    },
    {
      name: "New Girls Hostel",
      image: ngh,
      desc: "This Block is used for 2nd year students, equipped with modern amenities and peaceful surroundings. It accommodates 5 students per room.",
      adminBlockName: "New Girls Hostel", 
      warden: "Dr. Janani L",
      wardenDepartment: "Civil Engineering",
      wardenContact: "944691502",
      wardenEmail: " janani@nitsri.ac.in"
    },
    {
      name: "L Block",
      image: lhostel,
      desc: "This block accommodates 1st year students. It is a multi-seater hostel with all basic amenities.",
      adminBlockName: "L Block", 
      warden: "Dr. Fatima Jalid",
      wardenDepartment: "Chemical Engineering",
      wardenContact: "9990795522",
      wardenEmail: " fatima@nitsri.ac.in"
    },
    {
      name: "A Block",
      image: ahostel,
      desc: "This block is for 1st year students. It has a capacity of 200 students and is equipped with all necessary facilities.",
      adminBlockName: "A Block", 
      warden: "Dr. Fatima Jalid",
      wardenDepartment: "Chemical Engineering",
      wardenContact: "9990795522",
      wardenEmail: " fatima@nitsri.ac.in"
    },
  ];

  // Function to find warden info for a specific block
  const getWardenInfo = (blockName) => {
    if (!adminData || !adminData.wardens) return null;
    
    return adminData.wardens.find(warden => {
      if (Array.isArray(warden.block)) {
        return warden.block.includes(blockName);
      }
      return warden.block === blockName;
    });
  };

  if (loading) {
    return (
      <div className="px-8 md:px-24 py-6 flex justify-center items-center h-64">
        <p className="text-xl">Loading hostel information...</p>
      </div>
    );
  }

  return (
    <div className="px-8 md:px-24 py-6">
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-navy">Girls Hostel Information</h2>
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
        {blocks.map((block, index) => {
          const wardenInfo = getWardenInfo(block.adminBlockName);
          return (
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
                {wardenInfo && (
                  <p className="mt-2 text-sm">
                    <span className="font-medium">Warden: </span>
                    {wardenInfo.name} ({wardenInfo.department})
                  </p>
                )}
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
          );
        })}
      </div>

      {/* Modal for displaying hostel details */}
      {selectedBlock && (
        <Modal 
          block={selectedBlock} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          wardenInfo={getWardenInfo(selectedBlock.adminBlockName)}
        />
      )}

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default GirlsHostel;