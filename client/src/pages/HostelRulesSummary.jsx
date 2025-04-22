import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton"; // Import the ScrollToTopButton component

const HostelRulesSummary = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold mt-6 mb-4">Hostel Rules Summary</h1>
      <div className="h-1 w-20 bg-teal-500 rounded mb-9"></div>

      <div className="space-y-6">
        {/* General Responsibility */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">General Responsibility</h2>
          <p className="text-gray-700">
            Every student must know and follow the Conduct and Disciplinary Code from day one.
          </p>
          <p className="text-gray-700">
            Violations may lead to penalties, including expulsion from hostel or institute.
          </p>
        </section>

        {/* I. Student Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">I. Student Responsibilities</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Behave respectfully with staff, elders, and peers.</li>
            <li>Dress decently (no offensive prints).</li>
            <li>Utilize academic opportunities sincerely.</li>
            <li>Respect laws, human rights, and report violations.</li>
          </ul>
        </section>

        {/* II. Student Behavior Guidelines */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">II. Student Behavior Guidelines</h2>

          <h3 className="text-xl font-semibold text-gray-600 mt-4">Hostel Living</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Once admitted, stay for the full year unless debarred.</li>
            <li>Maintain furniture, fittings, and switch off lights/fans when not in use.</li>
            <li>Only authorized room changes allowed.</li>
            <li>No outsiders without prior permission. Strict visiting hours apply.</li>
            <li>Girls: Must be in hostel by 7:30 PM.</li>
            <li>Boys: Must be in hostel by 9:30 PM.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mt-4">Discipline</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>No groupism, ragging, or anti-social/political activities.</li>
            <li>Carry ID card at all times.</li>
            <li>No damage to property or littering.</li>
            <li>No weapons, crackers, motor vehicles, drugs, smoking, or alcohol.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mt-4">Technology & Mess Rules</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Register laptops; permission needed to take them outside.</li>
            <li>No unauthorized electrical appliances.</li>
            <li>Cooking and loud music are prohibited.</li>
            <li>Students must dine in their assigned mess and pay dues on time.</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-600 mt-4">Other Restrictions</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>No posters, leaflets, or money collection without permission.</li>
            <li>No strikes, protests, or agitations.</li>
            <li>No girls in boys' hostels and vice versa (strictly enforced).</li>
            <li>Hostel rooms can be inspected anytime.</li>
          </ul>
        </section>

        {/* III. Disciplinary Sanctions */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">III. Disciplinary Sanctions</h2>
          <h3 className="text-xl font-semibold text-gray-500">Minor:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Warning or written apology.</li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-500 mt-4">Major:</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Exam debarment, suspension, caution money forfeiture, or expulsion (in serious cases).</li>
          </ul>
        </section>

        {/* IV. Functionaries Involved */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">IV. Functionaries Involved</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Warden & Associate Dean: Handle hostel-level discipline.</li>
            <li>Dean Students Welfare: Oversees actions and reports to the Director.</li>
            <li>Director: Has final authority for major punishments and appeals.</li>
          </ul>
        </section>

        {/* V. Undertaking */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">V. Undertaking</h2>
          <p className="text-gray-700">
            Students must sign an undertaking to follow the code. Even without signing, they're still bound by it.
          </p>
        </section>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
};

export default HostelRulesSummary;