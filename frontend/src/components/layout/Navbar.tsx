import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ( {scrolled} : {scrolled: any} ) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav 
        className={`shadow-md w-full fixed z-50 ${scrolled && "bg-white shadow-md"}`}
    >
      <div className="px-4 xl:px-0 py-3 flex justify-between items-center w-full mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src="/images/TechGeek.png" alt="Tech Geek Logo" width={50} />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 font-medium">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition"
                }
            >
                About
            </NavLink>
            <NavLink
                to="/services"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition"
                }
            >
                Services
            </NavLink>
            <NavLink
                to="/courses"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition"
                }
            >
                Courses
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition"
                }
            >
                Contact
            </NavLink>
        </div>

        {/* CTA */}
        <Link
          to="/courses"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Start Learning
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link to="/" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/courses" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/contact" className="hover:text-blue-500" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
