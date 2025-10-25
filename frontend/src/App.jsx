import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./components/Landing/Home"
import { About } from "./components/Landing/About"
import Navbar from "./components/Common/Navbar"
import { useEffect, useState } from "react"
import Footer from "./components/Common/Footer"
import Services from "./components/Landing/Services"
import Courses from "./components/Landing/Courses"
import Contact from "./components/Landing/Contact"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import Dashboard from "./pages/Dashboard/Dashboard"
import AllCourses from "./pages/Courses/AllCourses"
import CourseDetails from "./pages/Courses/CourseDetails"
import CreateCourse from "./pages/Courses/CreateCourse"


const App = () => {

  return (
    <div className="min-h-screen flex flex-col justify-between">
        <Navbar />
        <Routes>
            {/* Landing and Accessible Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to={"/"} replace />} />

            {/* Protected Routes */}
            <Route path="/" element={<ProtectedRoute />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="all-courses" element={<AllCourses />} />
                <Route path="course-details" element={<CourseDetails />} />
                <Route path="create-course" element={<CreateCourse />} />
            </Route>

        </Routes>
        <Footer />
    </div>
  )
}

export default App