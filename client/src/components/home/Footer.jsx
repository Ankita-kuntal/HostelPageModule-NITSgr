const Footer = () => {
  
  return (
    <footer className="bg-gray-100 text-navy border-t border-gray-300 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm">
        <p>&copy; {new Date().getFullYear()} National Institute of Technology Srinagar . All Rights Reserved.</p>
        <div className="mt-2 sm:mt-0 flex gap-4">
          <a href="#" className="text-teal hover:underline">Privacy Policy</a>
          <a href="#" className="text-teal hover:underline">Terms of Service</a>
        </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  