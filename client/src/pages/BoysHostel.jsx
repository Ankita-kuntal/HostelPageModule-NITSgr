const BoysHostel = () => {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-semibold mb-4">Boys Hostel Information</h2>
        <img src="/images/boys-hostel.jpg" alt="Boys Hostel" className="w-full h-auto mb-4 rounded-lg shadow-md" />
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Capacity:</strong> 200 students</li>
          <li><strong>Facilities:</strong> Wi-Fi, Gym, Common Room, Mess</li>
          <li><strong>Contact:</strong> Mr. Rajesh Kumar - 9876543211</li>
          <li><strong>Office Timings:</strong> 9 AM - 5 PM</li>
        </ul>
      </div>
    );
  };
  
  export default BoysHostel;
  