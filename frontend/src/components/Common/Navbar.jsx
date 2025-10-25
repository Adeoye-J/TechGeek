import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 20 ? setScrolled(true) : setScrolled(false)
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isAuthenticated = false; // Replace with actual authentication logic


  return (
    <nav 
        className={`shadow-md w-full fixed top-0 right-0 left-0 z-50 ${scrolled && "backdrop-blur-md shadow-md"}`}
    >
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center w-full mx-auto max-w-7xl">
        <Link to="/" className="text-2xl font-bold text-blue-600">
            <img src="/images/TechGeek.png" alt="Tech Geek Logo" width={50} />
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition font-semibold"
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition font-semibold"
                }
            >
                About
            </NavLink>
            <NavLink
                to="/services"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition font-semibold"
                }
            >
                Services
            </NavLink>
            <NavLink
                to="/courses"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition font-semibold"
                }
            >
                Courses
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600"
                    : "hover:text-blue-600 transition font-semibold"
                }
            >
                Contact
            </NavLink>
        </div>

        {/* CTA */}
        {/* <Link
          to="/courses"
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm"
        >
          Start Learning
        </Link> */}

        {
            isAuthenticated ? (
                <Link
                  to="/dashboard"
                    className="hidden md:inline-block bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition font-semibold text-sm ml-4"
                >
                  Dashboard
                </Link>
            ) : (
                <div className="flex items-center gap-4">
                    <Link
                    to="/login"
                        className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm"
                    >
                        Login
                    </Link>
                    <Link
                    to="/register"
                        className="hidden md:inline-block bg-gray-200 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-300 transition font-semibold text-sm"
                    >
                        Register
                    </Link>
                </div>
            )
        }

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
          <div className="flex flex-col">
            <Link to="/" className="hover:text-blue-500 px-6 py-2 border-b border-gray-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="hover:text-blue-500 px-6 py-2 border-b border-gray-300" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="hover:text-blue-500 px-6 py-2 border-b border-gray-300" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/courses" className="hover:text-blue-500 px-6 py-2 border-b border-gray-300" onClick={() => setIsOpen(false)}>Courses</Link>
            <Link to="/contact" className="hover:text-blue-500 px-6 py-2 border-b border-gray-300" onClick={() => setIsOpen(false)}>Contact</Link>

            {isAuthenticated ? (
                <Link
                  to="/dashboard"
                    className="mt-2 bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition font-semibold text-sm text-center"
                    onClick={() => setIsOpen(false)}
                >
                    Dashboard
                </Link>
            ) : (
                <>
                    <Link
                      to="/login"
                        className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition font-semibold text-sm text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Login
                    </Link>
                    <Link
                      to="/register"
                        className="mt-2 bg-gray-200 text-gray-800 px-5 py-2 rounded-full hover:bg-gray-300 transition font-semibold text-sm text-center"
                        onClick={() => setIsOpen(false)}
                    >
                        Register
                    </Link>
                </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
