const Footer = () => {
  return (
    <footer className="bg-white text-slate-800 border-t-4 border-teal-300 mt-4 py-1 px-16 tracking-wide flex flex-col items-center gap-4">
      <p className="text-[15px] leading-loose">
        © Animal Art. All rights reserved.
      </p>
      <ul className="flex flex-wrap justify-center space-x-6 gap-y-1">
        <li>
          <a href="#" className="text-[15px] hover:text-white">
            Terms of Service
          </a>
        </li>
        <li>
          <a href="#" className="text-[15px] hover:text-white">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="#" className="text-[15px] hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
