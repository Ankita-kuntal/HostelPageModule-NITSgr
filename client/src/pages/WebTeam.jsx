import { FaLinkedin, FaGithub } from "react-icons/fa";
import userIcon from "../assets/images/userIcon.png";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the ScrollToTopButton component

const teamMembers = [
  {
    name: "Asma Siddiqui",
    role: "Web Developer",
    image: userIcon,
    funFact: "In the world of code, chai is my constant companion ☕",
    email: "asmasiddiqui511@gmail.com",
    enrollment: "2023BCSE029",
    linkedin: "https://www.linkedin.com/in/asmasid11",
    github: "https://github.com/AsmaSid11",
  },
  {
    name: "Harshita",
    role: "Web Developer",
    image: userIcon,
    funFact: "Finds peace in coding and singing 🌼",
    email: "harshita2386@gmail.com",
    enrollment: "2023BCSE022",
    linkedin: "https://www.linkedin.com/in/harshita-dubey-bb9168286",
    github: "https://github.com/Hash-D25",
  },
  {
    name: "Ankita Kuntal",
    role: "Web Developer",
    image: userIcon,
    funFact: "Can center divs but not her inner peace!✌",
    email: "2023nitsgr153@nitsri.ac.in",
    enrollment: "2023BITE007",
    linkedin:
      "https://www.linkedin.com/in/ankita-kuntal?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/ankita",
  },
];

const WebTeam = () => {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-6 md:px-20">
      <h2 className="text-3xl font-semibold mt-6 mb-4 text-navy">Meet the Web Team</h2>
      <div className="h-1 w-20 bg-teal-500 rounded mb-8"></div>

      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
        This website is designed, developed, and maintained by a team of dedicated students at NIT Srinagar. We aim to
        ensure that all hostel-related information is accurate, up-to-date, and easily accessible.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-teal-50 shadow-lg rounded-2xl p-6 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-full w-32 h-32 object-cover mb-4 border-4 border-teal-300"
            />
            <h2 className="text-xl font-semibold text-teal-800">{member.name}</h2>
            <p className="text-sm text-gray-700 mb-1">{member.role}</p>
            <p className="text-sm text-gray-500 italic text-center mb-2">{member.funFact}</p>
            <div className="text-sm text-gray-700 text-center mb-3">
              <p>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${member.email}`} className="text-teal-700 hover:underline">
                  {member.email}
                </a>
              </p>
              <p>
                <strong>Enrollment:</strong> {member.enrollment}
              </p>
            </div>
            <div className="flex gap-4 text-xl text-teal-700 mt-2">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-900">
                <FaLinkedin />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-900">
                <FaGithub />
              </a>
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
