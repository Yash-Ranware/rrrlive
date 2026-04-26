// client/src/features/shared/pages/Landing.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide text-blue-600">
            DevPlatform
          </h1>

          <div className="space-x-4">
            <button
              onClick={() => navigate("/login")}
              className="px-4 py-2 text-sm text-gray-600 hover:text-black transition"
            >
              Login
            </button>

            <button
              onClick={() => navigate("/register")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition"
            >
              Register
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="text-center px-6 py-32 bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          Become a <span className="text-blue-600">Top 1%</span> Software Developer
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
          Master coding, build real-world projects, and level up your skills
          with structured learning and testing.
        </p>

        <button
          onClick={() => navigate("/register")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition shadow-md"
        >
          Get Started
        </button>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 py-12 px-6 text-center text-gray-600 bg-gray-50">
        
        <div className="flex flex-wrap justify-center gap-8 mb-6 text-sm">
          <a href="#" className="hover:text-black transition">About Us</a>
          <a href="#" className="hover:text-black transition">Contact</a>
          <a href="#" className="hover:text-black transition">Privacy Policy</a>
          <a href="#" className="hover:text-black transition">Terms & Conditions</a>
        </div>

        <div className="space-y-2 text-sm">
          <p>Email: support@devplatform.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Pune, Maharashtra, India</p>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © 2026 DevPlatform. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Landing;