import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20 w-full">
      <div className="mx-auto max-w-7xl grid md:grid-cols-3 gap-8 px-6 xl:px-0 md:justify-items-center">
        {/* About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            <img src="/images/TechGeek.png" alt="TechGeek Logo" width={60} />
          </h2>
          <p className="text-sm leading-relaxed">
            Empowering students, creators, and businesses with digital skills that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
          <p>Email: <a href="mailto:info@techgeek.com" className="text-blue-400">jeremiahiasngu@gmail.com</a></p>
          <p>WhatsApp: <a href="https://wa.me/2348150420521" className="text-blue-400">+234 815 0420 521</a></p>
          <div className="flex gap-3 mt-3">
            {/* <a href="#" className="hover:text-blue-400">Facebook</a> */}
            <a target="_blank" href="https://www.linkedin.com/in/jeremiah-bankole" className="hover:text-blue-400">
                <img src="/images/linkedin.png" alt="LinkedIn Logo" width={30} />
            </a>
            {/* <a href="#" className="hover:text-blue-400">Twitter</a> */}
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Tech Geek. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
