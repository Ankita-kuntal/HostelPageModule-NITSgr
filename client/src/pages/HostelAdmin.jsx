import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import deanImg from "../assets/images/admin/dsw.png";
import associateImg from "../assets/images/admin/adsw.png";

// Wardens
import janib from "../assets/images/admin/janib.jpg";
import shakeelwaseem from "../assets/images/admin/shakeelwaseem.jpeg";
import pramodkumar from "../assets/images/admin/pramodkumar.jpg";
import ashokkumar from "../assets/images/admin/ashokkumar.jpg";
import asadurrahman from "../assets/images/admin/asadurrahman.jpg";
import srikantmaktedar from "../assets/images/admin/shrikantmaktedar.png";
import amandeepsingh from "../assets/images/admin/amandeepsingh.jpg";
import munirnayak from "../assets/images/admin/munirnayak.png";
import noorzaman from "../assets/images/admin/noorzamankhan.jpg";
import prabalverma from "../assets/images/admin/prabalverma.jpg";
import mukunddutt from "../assets/images/admin/mukunddutt.jpeg";
import fatimajalid from "../assets/images/admin/fatimajalid.jpeg";
import janani from "../assets/images/admin/janani.jpeg";
import nitikakundan from "../assets/images/admin/nitikakundan.jpg";

// Hall Assistants
import showkatsidiq from "../assets/images/admin/showkatsidiq.png";
import arshid from "../assets/images/admin/arshid.png";
import khursheed from "../assets/images/admin/khursheed.png";
import mansoorahmadmir from "../assets/images/admin/mansoorahmadmir.png";
import inamulhaq from "../assets/images/admin/Inamulhaq.png";
import shahidashraf from "../assets/images/admin/shahidashraf.png";
import waheed from "../assets/images/admin/waheedahmad.jpg";
import altafrather from "../assets/images/admin/altafrather.jpg";

const HostelAdmin = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="px-8 md:px-24 py-10 font-sans bg-white">
      <h2 className="text-3xl font-bold text-navy mb-12 text-center">
        Hostel Administration
      </h2>

      <Section
        id="dean-welfare"
        image={deanImg}
        title="Dean Students Welfare"
        name="Dr. Mohammad Abid Bazaz"
        designation="Professor, Department of Electrical Engineering"
        email="deanstudentswelfare@nitsri.ac.in"
        contact="+91-6005103740"
      />

      <Section
        id="associate-dean"
        image={associateImg}
        title="Associate Dean Students Welfare"
        name="Dr. Shashi Kant Kumar"
        designation="Assistant Professor: Department of Chemical Engineering"
        email="shashikantkumar@nitsri.ac.in"
        contact="+91-8986948677"
      />

      <WardensSection />

      <HallAssistantsSection />
    </div>
  );
};

const Section = ({ id, image, title, name, designation, email, contact }) => (
  <section
    id={id}
    className="mb-16 scroll-mt-24 bg-white shadow-md rounded-lg p-6"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <img
        src={image}
        alt={title}
        className="w-48 h-48 object-cover rounded-md border border-gray-200 shadow"
      />
      <div className="text-gray-800 space-y-1">
        <h3 className="text-xl font-bold text-teal-700">{title}</h3>
        {name && <p className="text-lg font-semibold">{name}</p>}
        {designation && <p className="text-sm text-gray-600">{designation}</p>}
        {email && (
          <p className="text-sm text-gray-700">
            Email:{" "}
            <a href={`mailto:${email}`} className="text-teal-600 underline">
              {email}
            </a>
          </p>
        )}
        {contact && (
          <p className="text-sm text-gray-700">Contact No: {contact}</p>
        )}
      </div>
    </div>
  </section>
);

const WardensSection = () => {
  const wardens = [
    {
      name: "Dr. Janibul Bashir",
      department: "IT Engineering",
      block: "Indus Hostel (2022 Batch)",
      email: "janibul@nitsri.ac.in",
      contact: "8825099229",
      image: janib,
    },
    {
      name: "Dr. Shakeel Ahmad Waseem",
      department: "Civil Engineering",
      block: "Chenab Hostel",
      email: "shakeelahmad@nitsri.ac.in",
      contact: "7889673358",
      image: shakeelwaseem,
    },
    {
      name: "Dr. Pramod Kumar Yadav",
      department: "CS Engineering",
      block: "Mansar and Manasbal Hostel",
      email: "pramod.kumar@nitsri.ac.in",
      contact: "9411407432",
      image: pramodkumar,
    },
    {
      name: "Dr. Ashok Kumar",
      department: "EC Engineering",
      block: "Tawi Hostel",
      email: "ashok.kumar@nitsri.ac.in",
      contact: "8102350942",
      image: ashokkumar,
    },
    {
      name: "Dr. Asadur Rahman",
      department: "Electrical Engineering",
      block: "Jhelum Extension",
      email: "asadur@nitsri.ac.in",
      contact: "9957497127",
      image: asadurrahman,
    },
    {
      name: "Dr. Srikant S Maktedar",
      department: "Chemical Engineering",
      block: "Chenab Hostel",
      email: "shrikant@nitsri.ac.in",
      contact: "9978500944",
      image: srikantmaktedar,
    },
    {
      name: "Dr. Amandeep Singh",
      department: "EC Engineering",
      block: "Jhelum Hostel",
      email: "amansingh@nitsri.ac.in",
      contact: "7508250907",
      image: amandeepsingh,
    },
    {
      name: "Dr. Munir Ahmad Nayak",
      department: "Civil Engineering",
      block: "Jhelum Hostel",
      email: "munir.nayak@nitsri.ac.in",
      contact: "9993815818",
      image: munirnayak,
    },
    {
      name: "Dr. Noor Zaman Khan",
      department: "Mechanical Engineering",
      block: "C-Block and Indus (2024 Batch)",
      email: "noorzaman@nitsri.ac.in",
      contact: "9891674435",
      image: noorzaman,
    },
    {
      name: "Dr. Prabal Verma",
      department: "IT Engineering",
      block: "Mansar and Manasbal Hostel",
      email: "prabal.verma@nitsri.ac.in",
      contact: "9419223663",
      image: prabalverma,
    },
    {
      name: "Dr. Mukund Dutt Sharma",
      department: "Mechanical Engineering",
      block: "Indus Hostel (2022 Batch)",
      email: "mukund.sharma@nitsri.ac.in",
      contact: "9882241895",
      image: mukunddutt,
    },
    {
      name: "Dr. Fatima Jalid",
      department: "Chemical Engineering",
      block: "Girls Hostel",
      email: "fatima@nitsri.ac.in",
      contact: "9990795522",
      image: fatimajalid,
    },
    {
      name: "Dr. Janani L",
      department: "Civil Engineering",
      block: "Girls Hostel",
      email: "janani@nitsri.ac.in",
      contact: "944691502",
      image: janani,
    },
    {
      name: "Dr. Nitika Kundan",
      department: "MMED",
      block: "Girls Hostel",
      email: "nitika.kundan@nitsri.ac.in",
      contact: "6006191446",
      image: nitikakundan,
    },
  ];

  return (
    <section id="wardens" className="scroll-mt-24 mb-16">
      <h3 className="text-2xl font-bold text-teal-700 mb-6">Wardens</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wardens.map((warden, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-4 flex flex-col items-center text-center"
          >
            <img
              src={warden.image || ""}
              alt={warden.name}
              className={`w-32 h-32 object-cover rounded-full mb-4 border ${
                warden.image ? "" : "bg-gray-200"
              }`}
            />
            <h4 className="text-lg font-semibold text-gray-800">
              {warden.name}
            </h4>
            <p className="text-sm text-gray-600">{warden.department}</p>
            <p className="text-sm text-gray-500">{warden.block}</p>
            {warden.email && (
              <p className="text-sm text-gray-700 mt-1">
                Email:{" "}
                <a
                  href={`mailto:${warden.email}`}
                  className="text-teal-600 underline"
                >
                  {warden.email}
                </a>
              </p>
            )}
            <p className="text-sm text-gray-700">Contact: {warden.contact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const HallAssistantsSection = () => {
  const hallAssistants = [
    {
      name: "Mr. Showkat Siddiqui",
      block: "BIndus",
      contact: "6006794058",
      image: showkatsidiq,
    },
    {
      name: "Mr. Arshid Ismail Bhat",
      block: "",
      contact: "9086863620",
      image: arshid,
    },
    {
      name: "Mr. Khurshid Ahmad",
      block: "Chenab",
      contact: "9797263561",
      image: khursheed,
    },
    { name: "Mr. Umer Habib", block: "", contact: "6005588252", image: "" },
    {
      name: "Mr. Mansoor Ahmad",
      block: "Jhelum",
      contact: "9682500561",
      image: mansoorahmadmir,
    },
    { name: "Mr. Yasir Rizvi", block: "", contact: "7006059229", image: "" },
    {
      name: "Mr. Inam ul Haq",
      block: "Mansar & Manasbal",
      contact: "9541449115",
      image: inamulhaq,
    },
    { name: "Mr. Mohammad Aslam", block: "", contact: "7006345529", image: "" },
    {
      name: "Mr. Shahid Ashraf",
      block: "Jhelum Extension, C-Block & Tawi",
      contact: "7051786578",
      image: shahidashraf,
    },
    {
      name: "Mr. Waheed Ahmad",
      block: "",
      contact: "9797459593",
      image: waheed,
    },
    {
      name: "Mr. Javaid Hussain Teli",
      block: "All Hostels",
      contact: "7051550554",
      image: "",
    },
    {
      name: "Mr. Altaf Ahmad Rather",
      block: "",
      contact: "8899026742",
      image: altafrather,
    },
  ];

  return (
    <section id="hall-assistants" className="scroll-mt-24 mb-16">
      <h3 className="text-2xl font-bold text-teal-700 mb-6">Hall Assistants</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {hallAssistants.map((assistant, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow p-4 flex flex-col items-center text-center"
          >
            {assistant.image ? (
              <img
                src={assistant.image}
                alt={assistant.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border"
              />
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 border" />
            )}
            <h4 className="text-lg font-semibold text-gray-800">
              {assistant.name}
            </h4>
            <p className="text-sm text-gray-700">
              Contact: {assistant.contact}
            </p>
            <p className="text-sm text-gray-500">{assistant.block}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostelAdmin;
