import React from 'react'

const Hero = () => {
    return (
        <div className="relative bg-white/20 
      [background-image:radial-gradient(circle_at_center,rgba(0,0,0,0.05)_0%,transparent_70%),linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]
      [background-size:60px_60px]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 space-y-20">
            <div className="text-center max-w-4xl mx-auto">
                <span className="p-2 bg-gray-200 rounded-md text-[9px] sm:text-xs mb-4 inline-block text-gray-800 font-normal">Empowering Tech Professionals</span>
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-800 mb-4 leading-none">
                    Empowering the Next Generation of <span className="text-primary italic">Tech Geeks</span>
                </h1>
                <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                    At Tech Geek, we make tech simple, practical, and profitable. Whether you’re a student, entrepreneur, or career starter — we help you gain skills that open real opportunities.
                </p>
                <div className="flex items-center gap-6 justify-center">
                    <a href="#courses" className="inline-block bg-primary hover:bg-primary-hover text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-300">Explore Courses</a>
                    <a href="" className="hover:bg-gray-400 py-3 px-6 rounded-md shadow-md transition-all duration-300 font-semibold">Learn More</a>
                </div>
            </div>
            <div className="overflow-hidden rounded-2xl shadow-lg w-full mx-auto flex items-center justify-center">
                <img src="/images/7.jpg" alt="Students learning dynamically with FUN" className="object-cover bg-center bg-cover rounded-2xl" />
            </div>
        </div>
    </div>
    )
}

export default Hero