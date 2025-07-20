import { useState } from 'react';
import { Linkedin, Github, ArrowUp } from 'lucide-react';

const teamMembers = [
  {
    name: "Asma Siddiqui",
    role: "Web Developer",
    image: "/assets/team/asma.webp",
    funFact: "Bookmarks aren't just for browsers 🔖",
    email: "asmasiddiqui511@gmail.com",
    enrollment: "2023BCSE029",
    linkedin: "https://www.linkedin.com/in/asmasid11",
    github: "https://github.com/AsmaSid11",
  },
  {
    name: "Ikjot Kour",
    role: "Web Developer",
    image: "/assets/team/ikjot.jpg",
    funFact: "Friend-coded with vibes 🧘‍♀️ ",
    email: "2023nitsrg181@nitsri.ac.in",
    enrollment: "2023BITE020",
    linkedin: "https://www.linkedin.com/in/ikjot-kour-0994a730b",
    github: "https://github.com/ikjotkour27",
  },
  {
    name: "Harshita",
    role: "Web Developer",
    image: "/assets/team/harshita.webp",
    funFact: "Finds peace in coding and singing 🌼",
    email: "harshita2386@gmail.com",
    enrollment: "2023BCSE022",
    linkedin: "https://www.linkedin.com/in/harshita-dubey-bb9168286",
    github: "https://github.com/Hash-D25",
  },
  {
    name: "Ankita Kuntal",
    role: "Web Developer",
    image: "/assets/team/ankita.webp",
    funFact: "Can center divs but not her inner peace!✌",
    email: "2023nitsgr153@nitsri.ac.in",
    enrollment: "2023BITE007",
    linkedin: "https://www.linkedin.com/in/ankita-kuntal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/Ankita-kuntal",
  },
];

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useState(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-slate-700 hover:bg-slate-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

const WebTeam = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-20">
      <h2 className="text-4xl font-semibold mt-6 mb-4 text-slate-500 text-center">Meet the Web Team</h2>
      {/* <div className="h-1 w-50 bg-teal-500 rounded mb-8 f"></div> */}
      
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        This website is designed, developed, and maintained by Gaash Team at NIT Srinagar. We aim to
        ensure that all hostel-related information is accurate, up-to-date, and easily accessible.
      </p>
      
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-teal-50 shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full w-20 h-20 object-cover border-4 border-teal-300"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-xl font-semibold text-teal-800">{member.name}</h2>
                  <div className="flex gap-3 text-xl text-teal-700">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-900">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-900">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 mb-1">{member.role}</p>
                <p className="text-sm text-gray-500 italic mb-3">{member.funFact}</p>
                
                <div className="text-sm text-gray-700">
                  <p className="mb-1">
                    <strong>Email:</strong>{" "}
                    <a href={`mailto:${member.email}`} className="text-teal-700 hover:underline">
                      {member.email}
                    </a>
                  </p>
                  <p>
                    <strong>Enrollment:</strong> {member.enrollment}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default WebTeam;