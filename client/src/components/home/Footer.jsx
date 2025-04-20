const Footer = () => {
  return (
    <footer className="bg-navy text-white mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-sm">
        <p>
          &copy; All Rights Reserved {new Date().getFullYear()} CSC Web Team,
          NIT Srinagar.
        </p>
        {/* <div className="mt-2 sm:mt-0 flex gap-4">
          <a href="#" className="text-teal hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="text-teal hover:underline">
            Terms of Service
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
