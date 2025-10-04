import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { About } from "./pages/About"
import Navbar from "./components/layout/Navbar"
import { useEffect, useState } from "react"
import Footer from "./components/layout/Footer"
import Services from "./pages/Services"
import Courses from "./pages/Courses"
import Contact from "./pages/Contact"

const App = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
            const handleScroll = () => {
            const offset = window.scrollY;
            setScrolled(offset > 50); // change color after 50px scroll
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Navbar scrolled={scrolled} />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App